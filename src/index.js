// Loading the `Component` as a property of React.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './bootstrap-3.4.1/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className='jumbotron'>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
