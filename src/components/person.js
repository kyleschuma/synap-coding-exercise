import React from 'react'; 
import Styled from 'styled-components';

import { Avatar } from './avatar';

const Wrapper = Styled.section`
  flex: 1;
  display: flex; 
  flex-direction: column;

  h2 { 
    color: #1294A1;
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 2rem;
  }
  p { 
    font-size: .8rem;
    font-weight: 500;
    line-height: 1rem;
  }
  p.centered { 
    text-align: center;
  }
`;
const Row = Styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
`;
const Column = Styled.div`
  display: flex; 
  flex-direction: column;
`;
const Toolbar = Styled.header`
  height: 3rem;
`;



export const Person = ({ avatar, company, email, name, onClose }) => (
  <Wrapper>
    <Toolbar onClick={onClose}> 

    </Toolbar>
    <Row>
      <Avatar alt={name} url={avatar} />
      <Column>
        <h2>{name}</h2>
        <p>{email}</p>
      </Column>
    </Row>
    
    { 
      company &&
      <Column>
        <Row>
          <Avatar alt={company.name} url={company.logo} />
          <h2>{company.name}</h2>
        </Row>
        <p className="centered">{company.description}</p>
      </Column>
    }
  </Wrapper> 
);
