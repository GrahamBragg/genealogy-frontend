import './Home.css';

import logo from './logo.svg';

const Home = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header bp3-dark">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
    );
}

export default Home;