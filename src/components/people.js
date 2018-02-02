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
const Description = Styled.p`
  font-size: .8rem;
  margin: .5rem;
  margin-left: 2rem;
`;
const Col = Styled.div`
  display: flex;
  flex-direction: row;
`;
const Row = Styled.div`
  display: flex; 
  flex-direction: column;
`

const Person = ({ avatar, company, name }) => (
  <Row>
    <Col>
      <Avatar alt={name} url={avatar} title={name} />
      {
        company && 
        <Avatar alt={company.name} url={company.logo} title={company.name} />
      }
    </Col>
    {company && <Description>{company.description}</Description>} 
  </Row>
);

export const People = ({ cc, from, to }) => 
  (cc && from && to) ? 
    (
      <Wrapper>
        <Title>From</Title>
        <Person { ...from } />

        <Title>To</Title>
        <Person { ...to } />
        
        {cc.length > 0 && <Title>CC'd</Title> }
        {cc.map((person, key) =>
          <Person key={key} { ...person } />
        )}
      </Wrapper>
    ) : 
    null;
