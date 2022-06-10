import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // fetch('/test').then(resp => resp.text()).then(data => console.log(data));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column column-25 sidebar">
            <h1 className="logo">Weed Stuff</h1>

            <ul className="nav">
              <li className="nav__item">
                <a href="/" className="nav__link">Strains</a>
              </li>
              <li className="nav__item">
                <a href="/terpenes" className="nav__link">Terpenes</a>
              </li>
            </ul>
          </div>
          <div className="column main">
            <h3 className="header">Strains</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
