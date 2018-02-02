import React from 'react';
import Styled from 'styled-components';

import { Avatar } from './avatar';

const Wrapper = Styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  line-height: 2.2rem;

  h1 { 
    color: ${props => props.focused ? '#1294A1' : 'inherit'};
    font-size: 1.6rem;
    font-weight: 100;
  }
  h2 {
    color: ${props => props.focused ? '#1294A1' : 'inherit'};
    font-size: 1.2rem;
    font-weight: 100;
  }
  p { 
    font-size: .8rem;
    font-weight: 500;
    line-height: .8rem;
  }
`;

export const Title = ({ avatar, focused, text, sub, onClick }) => (
  <Wrapper focused={focused} onClick={onClick}>
    <h1>{text}</h1>
    <p>{sub}</p>
  </Wrapper>
);