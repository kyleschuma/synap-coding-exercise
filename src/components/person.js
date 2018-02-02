import React from 'react'; 
import Styled from 'styled-components';

import { Avatar } from './avatar';
import { Title } from './title';

const Wrapper = Styled.section`
`;
const Header = Styled.header`
  display: flex; 
  flex-direction: row; 
`;

export const Person = ({ person, title }) => (
  <Wrapper>
    <Header> 
      <Avatar {...person} />
      <Title text={title} sub={person.name} />   
    </Header>
  </Wrapper> 
);
