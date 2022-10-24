import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  state = {

  }

  render() {
    return (
      <main className="container App bg-dark">
        <div className="columns col-gapless">
          <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-xs-12  col-mx-auto">
            <h1>When it is</h1>
            <div className="input-group" >
              <input className="form-input input-sm" type="text" />
              <select className="form-select select-sm">
                <option>Example</option>
              </select>
            </div>
            <h1>is</h1>
            <div className="input-group">
              <input className="form-input input-sm" type="text" />
              <select className="form-select select-sm">
                <option>Example</option>
              </select>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default App
