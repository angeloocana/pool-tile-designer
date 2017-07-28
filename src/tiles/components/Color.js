import React from 'react';
import styled from 'styled-components';
import { InvisibleSpan } from '../../core/components/Invisible';

const Input = styled.input`
  appearance: none;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: block;
  transition: transform 0.5s;

  ${props => props.checked ? `
    transform: scale(1.2);
    transition: transform 0.5s;
  ` : ``}
`;

class Color extends React.Component {
  onChange = (event) => {
    this.props.selectColor(this.props.color);
  }

  render() {
    const { color, selectedColor } = this.props;
    const checked = color.id === selectedColor.id;
    return (
      <li>
        <label>
          <Input
            type="checkbox"
            checked={checked}
            onChange={this.onChange}
            style={{
              backgroundColor: color.id
            }}
            title={color.name}
          />
          <InvisibleSpan>{color.name}</InvisibleSpan>
        </label>
      </li>
    );
  }
};

export default Color;
