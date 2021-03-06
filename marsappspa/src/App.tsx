import React, {useState, useEffect} from 'react';
import nasaLogo from './nasa-logo-web-rgb.png';
import './App.scss';
import {Counter} from './Counter';
import {Comp1} from './Comp1';
import {ReactBase} from './ReactBase';
import {Component} from './Component';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export const Context = React.createContext({
   count: 0,
   setCount: (count: number) => {}
});

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
                    <Link to="/nasa">NASA</Link>
                  </li>
                  <li>
                    <Link to="/button">Button</Link>
                  </li>
                  <li>
                    <Link to="/button/complex">Complex Button</Link>
                  </li>
                </ul>
              </nav>
              <Routes>
                <Route path="/" element={<ReactBase />} />
                <Route path="/nasa" element={
                  <Component name="NASA" image={nasaLogo}>
                      <p>ANFiuonuifoanerfasofoasnfoisuaenfas</p>
                      <p>fasnauisnfuiasenfuisaenfuiaes</p>
                  </Component>
                } />
                <Route path="/button">
                    <Route path="" element={<Counter />} />
                    <Route path="complex" element={<Comp1 />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </Context.Provider>
      </header>
    </div>
  );
}

export default App;
