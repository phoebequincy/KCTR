import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Overview from './components/Overview';
import Ropes from './components/Ropes';

const API = process.env.REACT_APP_API

class App extends Component {
  state = {
    ropeinst: [],
  }

  async componentDidMount() {
    const response = await fetch(`${API}/ropeinst`)
    const json = await response.json()
    this.setState({...this.state, ropeinst: json})
  }
  render() {
    return (
      <div>
          <div>
            <NavBar />
              <Route path="/" exact component={Home} />

              <Route path="/Ropes"
                component={() =>
                  <Ropes
                  ropeinst={this.state.ropeinst}
                  />}
              />

              <Route path="/Overview"
                component={()=>
                  <Overview

                  />}
              />

          </div>
        </div>
    )
  }
}

export default App;
