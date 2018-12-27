import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import { rhythm, scale } from '../utils/typography'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(0)} ${rhythm(3 / 4)};
  @media only screen and (min-width: 768px) {
    padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, navLinks = [], children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let headerTitle

    const headerNavLinks = (
      <div style={{ display: 'flex' }}>
        {navLinks.map(({ title, to }, index) => (
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
                color: '#00BFA5',
              }}
              to={to}
            >
              {title}
            </Link>
          </h4>
        ))}
      </div>
    )

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
      <Wrapper>
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
      </Wrapper>
    )
  }
}

export default Layout
