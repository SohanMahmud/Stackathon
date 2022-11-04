import React from 'react';
import Example from './Example';
import Line from './Line';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      err: false,
    };
  }
  // async componentDidMount(){

  // }

  render() {
    if (this.state.err) {
      return <div>Error</div>;
      // } else if (this.state.loading) {
      //   return <div> Loading!</div>;
    }
    return (
      <>
        <h1>Test Page</h1>
        <Line />
        <Example />
      </>
    );
  }
}

export default Root;
