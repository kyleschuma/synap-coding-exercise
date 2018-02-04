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

  @media screen and (max-width: 640px) {
    border-radius: 24px;
    width: 48px;
    height: 48px;
  }
`;
const Title = Styled.p`
  font-size: .8rem;
  font-weight: 100;
  line-height: 1rem;

  @media screen and (max-width: 640px) {
    font-size: .6rem;
    text-align: center;
  }
`;

export const Avatar = ({ alt, url, title, onHover, onOut }) => (
  <Wrapper onMouseOver={onHover} onMouseOut={onOut}> 
    <Img src={url} alt={alt} />
    {title && <Title>{title}</Title>}
  </Wrapper>
);