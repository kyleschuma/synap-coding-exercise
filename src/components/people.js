import React from 'react'; 
import Styled from 'styled-components';
import { withStateHandlers } from 'recompose';
import Popover from 'react-popover';

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

const withPopoverState = withStateHandlers(
  ({ showing=false }) => ({ showing }),
  {
    hide: () => () => ({ showing: false }),
    show: () => () => ({ showing: true }),
  } 
);

const Company = Styled(({ className, description, logo, name }) =>
  <div className={className}>
    <img alt={name} src={logo} />
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
)`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border: #f0f0f0 solid 1px;
  padding: 1rem;

  img { 
    height: 4rem;
    margin-right: 1rem;
  }
  h2 { 
    font-size: 1.2rem;
    font-weight: 100;
    line-height: 2rem;
  }
  p { 
    font-size: .8rem;
    font-weight: 100;
    line-height: 1rem;
  }
`;

const Person = withPopoverState(({ avatar, company, email, name, showing, hide, show }) => 
  <Popover 
    isOpen={company && showing} 
    body={<Company {...company} />}
    preferPlace="right">
    <Avatar alt={name} url={avatar} title={name} 
      onHover={() => show()} 
      onOut={() => hide()} /> 
  </Popover>   
);

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
          <Person {...ccd} />
        )}
      </Wrapper>
    ) : 
    null;
