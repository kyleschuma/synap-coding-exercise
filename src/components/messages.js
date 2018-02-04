import React from 'react';
import Styled from 'styled-components';
import Infinite from 'react-infinite-scroll-component';

import { Loading } from './loading';


const Wrapper = Styled.div`
  flex: 1; 
  display: flex; 
  flex-direction: column;
  > div { 
    flex: 1;
  }
`;

export class Messages extends React.Component { 

  constructor(props) { 
    super(props);

    this.state = { 
      height: window.innerHeight
    };
  }

  componentDidMount() { 
    
    const height = this.element.offsetHeight;
    this.setState({ height });
  }

  render() { 

    const { children, next } = this.props;
    const { height } = this.state; 
    
    return (
      <Wrapper innerRef={el => this.element = el}>        
        <Infinite hasMore={true} height={height} loader={<Loading />} next={next}>
          {children}
        </Infinite>
      </Wrapper>
    );
  }
}
