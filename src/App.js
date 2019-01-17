import React from 'react'
import { Router } from '@reach/router'
// import { Link } from 'preact-router/match' // TODO
import './App.css'

function HeaderItem({ href, text }) {
  return (
    <li className="header-item">
      <a className="header-item-link" href={href}>
        {text}
      </a>
    </li>
  )
}

function Header() {
  return (
    <nav className="header-component">
      <ol className="header-links-list">
        <HeaderItem href="/" text="CHRIS ISLER" />
        <HeaderItem href="/about" text="About" />
        <HeaderItem href="/" text="Blog" />
        <HeaderItem href="/" text="Resume" />
        <HeaderItem href="/" text="Code" />
        <HeaderItem href="/" text="Music" />
      </ol>
    </nav>
  )
}

function RouteWithHeader({ View }) {
  return (
    <div>
      <Header />
      <div className="route-with-header">
        <View />
      </div>
    </div>
  )
}

function HomeView() {
  return (
    <div>
      <h1>home view</h1>
    </div>
  )
}

function AboutView(props) {
  return (
    <div {...props}>
      <h1>about view</h1>
    </div>
  )
}

export default () => (
  <Router>
    <RouteWithHeader path="/" default View={HomeView} />
    <RouteWithHeader path="/about" View={AboutView} />
  </Router>
)
