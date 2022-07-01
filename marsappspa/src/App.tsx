import React, {useState, useEffect, useContext} from 'react';
import logo from './logo.svg';
import nasaLogo from './nasa-logo-web-rgb.png';
import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

interface Props {
    name: string,
    p1: string,
    p2: string,
    image: string
}

const Context = React.createContext({
   count: 0,
   setCount: (count: number) => {}
});

function Comp1() {
    return (
        <div>
            <Comp3 />
            <Comp2 />
        </div>
    );
}

function Comp2() {
    const context = useContext(Context);
    return (
        <div>
            <button onClick={() => context.setCount(context.count + 1)}>
                Click me
            </button>
        </div>
    )
}

function Comp3() {
    return (
      <div>
          <p>You clicked {<Comp4 />} times</p>
      </div>
    );
}

function Comp4() {
    const context = useContext(Context);
    return (
        <div>
            {context.count}
        </div>
    );
}

function Counter() {
    const context = useContext(Context);
    return (
        <div>
            <p>You clicked {context.count} times</p>
            <button onClick={() => context.setCount(context.count + 1)}>
                Click me
            </button>
        </div>
    );
}

function ReactBase() {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    )
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
  const countString = localStorage.getItem("count");
  const [count, setCount] = useState(countString == null ? 0 : parseInt(countString));

  useEffect(() => {
      document.title = `You clicked ${count} times`;
      localStorage.setItem("count", count.toString());
  });
  return (
    <div className="App">
      <header className="App-header">
        <Context.Provider value={{count, setCount}}>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/NASA">NASA</Link>
                  </li>
                  <li>
                    <Link to="/Button">Button</Link>
                  </li>
                  <li>
                    <Link to="/ComplexButton">Complex Button</Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<ReactBase />} />
                <Route path="/NASA" element={<Component name="NASA" p1="fafargigmfaefasrfa" p2="fafaffeafa3f3asfdafadfa" image={nasaLogo} />} />
                <Route path="/Button" element={<Counter />} />
                <Route path="/ComplexButton" element={<Comp1 />} />
              </Routes>
            </div>
          </Router>
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;
