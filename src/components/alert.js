import Styled from 'styled-components';

export const Alert = Styled.div`

  cursor: ${props => props.onClick ? 'pointer' : 'inherit'};

  position: absolute;
  bottom: 0px; 
  width: 100%;
  padding: 2rem;
  
  background: #f2dede; 
  border: #ebcccc;
  color: #a94442;
`;

