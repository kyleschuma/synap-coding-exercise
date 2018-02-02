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
  flex-direction: row; 
`;
const Body = Styled.p`
  margin: 1rem;
  font-weight: 300;
`;

export const Message = ({ id, body, focused, from, subject, to, setFocus }) => (
  <Wrapper>
    <Header focused={focused} onClick={() => setFocus(id)}>
      <Avatar alt={from.name} url={from.avatar} />
      <Title
        focused={focused} 
        text={subject} 
        sub={from.name && to.name ? `${from.name}, ${to.name}` : ''} />
    </Header>
    { focused && <Body>{body}</Body> }
  </Wrapper>
);