import React, { Component } from 'react'
import './App.css'

function Header() {
  return (
    <nav class="header-component">
      <ol class="header-links-list">
        <li>
          <a href="foo1">bar1</a>
        </li>
        <li>
          <a href="foo2">bar2</a>
        </li>
      </ol>
    </nav>
  )
}

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Rest /> */}
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
      </div>
    )
  }
}
