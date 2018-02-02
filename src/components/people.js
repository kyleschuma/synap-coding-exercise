import React from 'react'; 
import Styled from 'styled-components';

import { Avatar } from './avatar';

const Wrapper = Styled.aside`
  display: flex; 
  flex-direction: column;

  border-right: #f0f0f0 solid 1px;
`;
const Title = Styled.h2`

  border-bottom: #f0f0f0 solid 1px;
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 2rem;
  margin: .5rem;
`;

export const People = ({ cc, from, to }) => 
  (cc && from && to) ? 
    (
      <Wrapper>
        <Title>From</Title>
        <Avatar alt={from.name} url={from.avatar} title={from.name} />
        <Title>To</Title>
        <Avatar alt={to.name} url={to.avatar} title={to.name} />
        
        {cc.length > 0 && <Title>CC'd</Title> }
        {cc.map((person, key) => 
          <Avatar key={key} alt={person.name} url={person.avatar} title={person.name} />        
        )}
      </Wrapper>
    ) : 
    null;
