import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;
const Content = Styled.section`
  flex: 1; 
  display: flex;
  flex-direction: column;
`;

export const Layout = ({ search, people, messages, error }) => (
  <Wrapper>
    {people}
    <Content>
      {error}
      {search}
      {messages}
    </Content>
  </Wrapper> 
);

