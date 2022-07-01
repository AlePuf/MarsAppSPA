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

interface PropsCompTree {
    setCount: (count: number) => void,
    count: number
}

function Comp1() {
    const countString = localStorage.getItem("count");
    const [count, setCount] = useState(countString == null ? 0 : parseInt(countString));

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        localStorage.setItem("count", count.toString());
    });
    return (
        <div>
            <Comp2 setCount={setCount} count={count}/>
            <Comp3 setCount={setCount} count={count}/>
        </div>
    );
}

function Comp2(props: PropsCompTree) {
    return (
        <div>
            <button onClick={() => props.setCount(props.count + 1)}>
                Click me
            </button>
        </div>
    )
}

function Comp3(props: PropsCompTree) {
    return (
      <div>
          <p>You clicked {<Comp4 count={props.count} setCount={props.setCount}/>} times</p>
      </div>
    );
}

function Comp4(props: PropsCompTree) {
    return (
        <div>
            {props.count}
        </div>
    );
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
        <Comp1 />
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
