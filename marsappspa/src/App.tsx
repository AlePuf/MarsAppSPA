import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import nasaLogo from './nasa-logo-web-rgb.png'
import './App.css';

interface Props {
    name: string,
    p1: string,
    p2: string,
    image: string
}

function Counter() {
    const countString = localStorage.getItem("count");
    const [count, setCount] = useState(countString == null ? 0 : parseInt(countString));

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        localStorage.setItem("count", count.toString());
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

function Component(props: Props) {
  return (
      <div className="NASA">
        <h1>{props.name}</h1>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <img src={props.image} className="Component-logo" height={400} width={800} alt="NASA" />
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component name="NASA" p1="fafargigmfaefasrfa" p2="fafaffeafa3f3asfdafadfa" image={nasaLogo} />
        <Counter />
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

export default App;
