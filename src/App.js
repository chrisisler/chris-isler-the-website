import React from 'react'
import { Router, Link } from '@reach/router'
import Markdown from 'react-markdown/with-html'

import './App.css'

function HeaderItem({ route, text }) {
  return (
    <li className="header-item">
      <Link className="header-item-link" to={route}>
        {text}
      </Link>
    </li>
  )
}

function Header() {
  return (
    <nav className="header-component">
      <ol className="header-links-list">
        <HeaderItem route="/" text="> Chris Isler" />
        <HeaderItem route="/about" text="About" />
        <HeaderItem route="/blog" text="Blog" />
        <HeaderItem route="/" text="Resume" />
        <HeaderItem route="/" text="Code" />
        <HeaderItem route="/" text="Music" />
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
    <section>
      <h1>home view</h1>
    </section>
  )
}

function AboutView(props) {
  return (
    <section {...props}>
      <h1>about view</h1>
    </section>
  )
}

// Blog = {
//   url: String
//   title: String
//   date: Date
//   content: Markdown
// }
function BlogView(props) {
  return (
    <section {...props}>
      {blogs.map(blog => (
        <article key={blog.title} className="blog-blurb">
          <h2 className="blog-title">
            <Link to={blog.url}>{blog.title}</Link>
          </h2>
          <div className="blog-date">{blog.date.toString()}</div>
        </article>
      ))}
    </section>
  )
}

const blogs = [
  {
    url: 'todays-breakfast',
    title: "Today's Breakfast",
    date: new Date(),
    content: `
        # Today's Breakfast

        - Eggs w/ veggies
        - Toast
        - Protein shake
      `
  },
  {
    url: 'todays-workout',
    title: "Today's Gym Sesh",
    date: new Date(),
    content: `
        # Today's Breakfast

        - Eggs w/ veggies
        - Toast
        - Protein shake
      `
  }
]

export default () => (
  <Router>
    <RouteWithHeader path="/" default View={HomeView} />
    <RouteWithHeader path="/about" View={AboutView} />
    <RouteWithHeader path="/blog" View={BlogView}>
      {blogs.map(blog => {
        // const blogView = <Markdown source={blog.content} />
        const blogView = <h1>hello</h1>
        console.log('blog.url is:', blog.url)
        return (
          <RouteWithHeader key={blog.title} path={blog.url} View={blogView} />
        )
      })}
    </RouteWithHeader>
  </Router>
)
