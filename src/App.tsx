import axios, { AxiosError, AxiosResponse } from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route  } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Person } from './models/person';

const About = () => {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:3000/api/v1/person`)
      .then((response: AxiosResponse<Person[]>) => {
        setData(response.data);
      })
      .catch((err: Error | AxiosError) => console.error(err));
    };
 
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
          <div key={item._id}>
            {JSON.stringify(item, null, 2)}
          </div>
        ))}
    </div>
  )
}


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
