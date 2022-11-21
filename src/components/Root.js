import React from 'react';
import Example from './Example';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      err: false,
    };
  }

  render() {
    if (this.state.err) {
      return <div>Error</div>;
    }
    return (
      <>
        <Example />
      </>
    );
  }
}

export default Root;
