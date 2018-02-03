import React from 'react';
import Styled from 'styled-components';
import Infinite from 'react-infinite-scroll-component';

import { Loading } from './loading';
import { Search } from './search';


const Wrapper = Styled.section`
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
    
    const height = this.wrapper.offsetHeight - this.search.offsetHeight;
    this.setState({ height });
  }

  render() { 

    const { children, next } = this.props;
    const { height } = this.state; 
    
    return (
      <Wrapper innerRef={el => this.wrapper = el}>
        <Search innerRef={el => this.search = el} placeholder="Search Messages" />
        <Infinite hasMore={true} height={height} loader={<Loading />} next={next}>
          {children}
        </Infinite>
      </Wrapper>
    )
  }
}
