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

function RouteWithHeader({ View, children }) {
  const view = children ? <View children={children} /> : <View />
  return (
    <div>
      <Header />
      <div className="route-with-header">{view}</div>
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
      <BlogIndexView path="/" default />
      {blogs.map(({ title, url, content }) => (
        <Markdown key={title} path={url} source={content} />
      ))}
    </RouteWithHeader>
  </Router>
)

function BlogView(props) {
  return <section {...props}>{props.children}</section>
}

function BlogIndexView(props) {
  const subroute = props.uri.slice(5) // Remove "/blog" prefix
  if (subroute.length !== 0) {
    console.info(`Navigating to blog home, ${subroute} is not a valid route.`)
    // Bug note: If a user enters an invalid route like "/blog/f34z" then after
    // being rerouted to "/blog" clicks on a blog post link, they'll be
    // rerouted to "blog/f34z/actual-url", this is a problem. No elegant fix is
    // provided by @reach/router.
    props.navigate('/blog')
  }

  return (
    <React.Fragment>
      {blogs.map(blog => (
        <article key={blog.title} className="blog-blurb">
          <h2 className="blog-title-wrapper">
            <Link to={blog.url} className="blog-title-link">
              {blog.title}
            </Link>
          </h2>
          <div className="blog-date">{blog.date.toString()}</div>
        </article>
      ))}
    </React.Fragment>
  )
}
