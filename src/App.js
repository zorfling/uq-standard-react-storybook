import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Button>Button</Button>
          <br />
          <Button primary>Button primary</Button>
          <br />
          <Button secondary>Button secondary</Button>
          <br />
          <Button warning>Button warning</Button>
          <br />
          <Button danger>Button danger</Button>
          <br />
          <Button outline>Button outline</Button>
          <br />
          <Button outline primary>
            Button outline primary
          </Button>
          <br />
          <Button link>Button link</Button>
          <br />
          <Button link primary>
            Button link primary
          </Button>
          <br />
          <Button link danger>
            Button link danger
          </Button>
          <br />
          To get started, edit <code>src/App.js</code> and save to reloady.
        </p>
      </div>
    );
  }
}

export default App;
