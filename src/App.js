import React from "react";
import "./App.css";
import Notfound from "./Notfound";
import Pass from "./Pass";
import Contact from "./Contact";
import Help from "./Help";

// import image from './info.png'
// <img src={image} alt="Smiley face" width="32" className="App"/>
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* navigation bar itself! */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <h6>Password Generator</h6>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
                <a className="nav-link" href="/password-generator/home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/password-generator/help">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/password-generator/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/password-generator/home" component={Pass} />
          <Route path="/password-generator/contact" component={Contact} />
          <Route path="/password-generator/help" component={Help} />

          {/* warning: for /login THE NAVBAR SHALL NOT BE DISPLAYED ! */}
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
