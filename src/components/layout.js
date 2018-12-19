import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, navLinks = [], children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let headerTitle

    const headerNavLinks = navLinks.map(({ title, to }, index) => (
      <h4
        key={index}
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginRight: rhythm(0.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={to}
        >
          {title}
        </Link>
      </h4>
    ))

    if (location.pathname === rootPath) {
      headerTitle = (
        <h1 style={{ ...scale(1), marginRight: rhythm(1) }}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      headerTitle = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginRight: rhythm(1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header
          style={{
            display: 'flex',
            alignItems: 'baseline',
            flexWrap: 'wrap',
            marginBottom: rhythm(1.5),
          }}
        >
          {headerTitle}
          {headerNavLinks}
        </header>
        {children}
      </div>
    )
  }
}

export default Layout
