import Styled from 'styled-components';

export const H1 = Styled.h1`
  color: ${props => props.focused ? '#1294A1' : 'inherit'};
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 2rem;
`;

export const H2 = Styled.h1`
  color: ${props => props.focused ? '#1294A1' : 'inherit'};
  font-size: 1.2rem;
  font-weight: 100;
  line-height: 2rem;
`;

export const Paragraph = Styled.p`
  font-size: .8rem;
  font-weight: 500;
  line-height: .8rem;

  text-align: ${props => props.centered ? 'center' : 'inherit'};
`;