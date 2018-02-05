import React from 'react'; 
import Styled from 'styled-components';
import { withStateHandlers } from 'recompose';
import Popover from 'react-popover';

import { Avatar } from './avatar';
import { H2, Paragraph } from './typography';


const withPopoverState = withStateHandlers(
  ({ showing=false }) => ({ showing }),
  {
    hide: () => () => ({ showing: false }),
    show: () => () => ({ showing: true }),
  } 
);

const Wrapper = Styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border: #f0f0f0 solid 1px;
  padding: 1rem;
  max-width: 384px;
`;
const Logo = Styled.img`
  height: 4rem;
  margin-right: 1rem;
`;

const Company = ({ description, logo, name }) => (
  <Wrapper>
    <Logo alt={name} src={logo} />
    <div>
      <H2>{name}</H2>
      <Paragraph>{description}</Paragraph>
    </div>
  </Wrapper>
);

export const Person = withPopoverState(({ avatar, company, email, name, showing, hide, show }) => 
  <Popover 
    isOpen={company && showing} 
    body={<Company {...company} />}
    preferPlace="right">
    <Avatar alt={name} url={avatar} title={name} 
      onHover={() => show()} 
      onOut={() => hide()} /> 
  </Popover>   
);