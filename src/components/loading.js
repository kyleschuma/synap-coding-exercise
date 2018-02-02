import React from 'react';
import Styled, { keyframes } from 'styled-components';

const frames = keyframes`
  0% { margin-left: 0%; }
  49% { margin-left: 100%;  }
  50% { margin-left: 0%; width: 0%; }
  100% { width: 100%; }
`;

const Indicator = Styled.div`
  animation: 2s linear infinite ${frames};

  background-color: #ffffff;
  width: 100%;
  height: 100%;
  margin-left: 0;
`;
const Message = Styled.div`
  margin: 8px;
  text-align: center;
`; 
const ProgressWrapper = Styled.div`
  width: 100%;
  height: 2px;
  overflow: hidden;
  background-color: #1294A1;
`;


export const Progress = () => (
  <ProgressWrapper>
    <Indicator /> 
  </ProgressWrapper>
);

export const Loading = ({ text='Loading...' }) => (
  <div>
    <Progress />
    <Message>{text}</Message>
  </div>
);