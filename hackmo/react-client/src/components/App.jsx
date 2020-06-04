import React from 'react';
import axios from 'axios';

import Balance from './Balance.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      users: [],
    };

  }


  render() {
    return (
      <div>
        <h1>HackMo</h1>
      </div>
    );
  }
}

export default App;
