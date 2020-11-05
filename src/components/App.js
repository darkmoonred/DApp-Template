import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard DApp Template_v1
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={} className="App-logo" alt="logo" />
                </a>
                <h1>Header 1</h1>
                <h5>Create DApp From Template</h5>
                <p>
                  Edit <code>src/components/App.js</code> and save to reload.
                </p>
                  START
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;