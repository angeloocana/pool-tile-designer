const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const {
  GraphQLString
} = require('graphql');
// const select = require(`unist-util-select`);
// const precache = require(`sw-precache`);
const webpackLodashPlugin = require('lodash-webpack-plugin');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('src/templates/blog-post.js');
    const tagPages = path.resolve('src/templates/tag-page.js');
    graphql(
      `
        {
          allMarkdownRemark(
            limit: 1000,
            filter: { frontmatter: { draft: { ne: true } } },
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  tags,
                  path
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        resolve();
        // reject(result.errors);
      }

      console.log('************ result.data.allMarkdownRemark.edges', result.data.allMarkdownRemark.edges);

      // Create blog posts pages.
      _.each(result.data.allMarkdownRemark.edges, edge => {

        console.log('///////////////////////////////////');
        console.log('edge.node', edge.node);
        console.log('edge.node.fields.slug', edge.node.fields.slug);
        console.log('edge.node.frontmatter.path', edge.node.frontmatter.path);

        createPage({
          path: edge.node.frontmatter.path || edge.node.fields.slug, // required
          component: blogPost,
          context: {
            slug: edge.node.frontmatter.path || edge.node.fields.slug,
            path: edge.node.frontmatter.path
          },
        });
      });

      // Tag pages.
      let tags = [];
      _.each(result.data.allMarkdownRemark.edges, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      tags = _.uniq(tags);
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`;
        createPage({
          path: tagPath,
          component: tagPages,
          context: {
            tag,
          },
        });
      });

      resolve();
    });
  });
};

//exports.postBuild = require('./post-build')

// Add custom url pathname for blog posts.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`;
    createNodeField({ node, name: 'slug', value: slug });
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'slug',
      value: fileNode.fields.slug,
    });
    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }
  }
};

// Add Lodash plugin
exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};

exports.setFieldsOnGraphQLNodeType = (
  { type, store, pathPrefix, getNode, cache },
  pluginOptions
) => {
  if (type.name !== 'MarkdownRemark') {
    return {};
  }

  return new Promise((resolve, reject) => {

    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%55 here');

    return resolve({
      lang: {
        type: GraphQLString,
        resolve(markdownNode) {
          return markdownNode.frontmatter.path;
        }
      },
    });
  });
};
