import React from 'react';
import { FormattedMessage } from 'react-intl';
import Color from './Color';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const Colors = ({ colors, selectedColor, selectColor }) => {
  return (
    <section>
      <header><FormattedMessage id="colors.title" /></header>
      <Ul>
        {
          colors.map(color => (
            <Color key={color.id} color={color} selectedColor={selectedColor} selectColor={selectColor} />
          ))
        }
      </Ul>
    </section>
  );
};

export default Colors;
