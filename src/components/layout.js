import React from 'react';
import Styled from 'styled-components';

export const Layout = Styled(({ className, search, people, messages, error }) => 
  <div className={className}>
    {people}
    <section className="content">
      {error}
      {search}
      {messages}
    </section>
  </div> 
)`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 640px) {
    flex-direction: column;
  }

  .content {
    flex: 1; 
    display: flex;
    flex-direction: column;
  }

`;

