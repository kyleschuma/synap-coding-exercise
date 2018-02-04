import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  display: flex; 
  cursor: ${props => props.onClick === undefined ? 'inherit' : 'pointer'};
  flex-direction: column;
  align-items: center;
  margin: .25rem;
  width: 128px;
`;
const Img = Styled.img`
  background: #fff;
  border: #f0f0f0 solid 1px;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  margin-bottom: .25rem;
`;
const Title = Styled.p`
  font-size: .8rem;
  font-weight: 100;
  line-height: 1rem;
`;

export const Avatar = ({ alt, url, title, onHover, onOut }) => (
  <Wrapper onMouseOver={onHover} onMouseOut={onOut}> 
    <Img src={url} alt={alt} />
    {title && <Title>{title}</Title>}
  </Wrapper>
);