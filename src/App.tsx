import * as React from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

const About = () => (
  <div>
    About
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

class App extends React.Component {
  
  public render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/code" component={Code} />
            <Route path="/contact" component={Contact} />
            <Route path="/presence" component={info} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
