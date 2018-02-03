import React from 'react';
import Styled from 'styled-components';

import { Avatar } from './avatar';
import { Title } from './title';


const Wrapper = Styled.article`
  border-bottom: #f0f0f0 solid 1px;
`;
const Header = Styled.header`
  background: ${props => props.focused ? '#f0f0f0' : 'inherit'};
  cursor: pointer;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  padding: 1rem; 

  h1 { 
    color: ${props => props.focused ? '#1294A1' : 'inherit'};
    font-size: 1.6rem;
    font-weight: 100;
    line-height: 2rem;
  }

  p { 
    font-size: .8rem;
    font-weight: 500;
    line-height: 2rem;
  }
`;
const Body = Styled.p`
  margin: 1rem;
  font-weight: 300;
`;

export const Message = ({ id, body, focused, from, subject, to, setFocus }) => (
  <Wrapper>
    <Header focused={focused} onClick={() => setFocus(id)}>
      <h1>{subject}</h1>
      <p>{from.name}, {to.name}</p>
    </Header>
    { focused && <Body>{body}</Body> }
  </Wrapper>
);