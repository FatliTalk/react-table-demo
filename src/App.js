// Loading the `Component` as a property of React.
import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
  render() {
    const characters = [
      {
        name: 'Jake',
        job: 'Engineer',
      },
      {
        name: 'Xenia',
        job: 'Teacher',
      },
      {
        name: 'Jenny',
        job: 'Bank employee',
      },
      {
        name: 'Jack',
        job: 'Businessman',
      },
    ];

    return (
      <div className="container">
        {/* We can call the property whatever we want,
        so I'll go with characterData.
        The data I'm passing through is the characters variable,
        and I'll put curly braces around it as it's a JavaScript expression.
        */}
        <Table characterData={characters} />
      </div>
    )
  }
}

export default App
