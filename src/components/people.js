import React from 'react'; 
import Styled from 'styled-components';

import { Person } from './person';
import { H2 } from './typography';


const Wrapper = Styled.aside`
  display: flex; 
  flex-direction: column;
  border-right: #f0f0f0 solid 1px;

  @media screen and (max-width: 640px) {
    flex-direction: row;
    border-bottom: #f0f0f0 solid 1px;
    border-right: none;
  }
`;
const Title = Styled(H2)`

  border-bottom: #f0f0f0 solid 1px;
  margin: .5rem;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export const People = ({ cc, from, to, setFocus }) => 
  (cc && from && to) ? 
    (
      <Wrapper>
        <Title>From</Title>
        <Person {...from} />
        
        <Title>To</Title>
        <Person {...to} />
        
        {cc.length > 0 && <Title>CC'd</Title> }
        {cc.map((ccd, key) =>
          <Person key={key} {...ccd} />
        )}
      </Wrapper>
    ) : 
    null;
