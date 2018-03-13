import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import CssButton from './components/CssButton';

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
          <CssButton>CssButton</CssButton>
          <br />
          <CssButton primary>CssButton primary</CssButton>
          <br />
          <CssButton secondary>CssButton secondary</CssButton>
          <br />
          <CssButton warning>CssButton warning</CssButton>
          <br />
          <CssButton danger>CssButton danger</CssButton>
          <br />
          <CssButton outline>CssButton outline</CssButton>
          <br />
          <CssButton outline primary>
            CssButton outline primary
          </CssButton>
          <br />
          <CssButton link>CssButton link</CssButton>
          <br />
          <CssButton link primary>
            CssButton link primary
          </CssButton>
          <br />
          <CssButton link danger>
            CssButton link danger
          </CssButton>
          <br />
          To get started, edit <code>src/App.js</code> and save to reloady.
        </p>
      </div>
    );
  }
}

export default App;
