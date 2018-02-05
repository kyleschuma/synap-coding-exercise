import React from 'react';
import Styled from 'styled-components';

import { H1, Paragraph } from './typography';

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
`;
const Body = Styled.p`
  margin: 1rem;
  font-weight: 300;
`;

export const Message = ({ id, body, focused, from, subject, to, setFocus }) => (
  <Wrapper>
    <Header focused={focused} onClick={() => setFocus(id)}>
      <H1>{subject}</H1>
      <Paragraph>{from.name}, {to.name}</Paragraph>
    </Header>
    { focused && <Body>{body}</Body> }
  </Wrapper>
);