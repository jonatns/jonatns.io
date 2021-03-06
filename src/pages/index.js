import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const navLinks = data.site.siteMetadata.navLinks
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        navLinks={navLinks}
        title={siteTitle}
      >
        <SEO
          title="Welcome"
          keywords={['blog', 'gatsby', 'javascript', 'react']}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || ''
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        navLinks {
          title
          to
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceName: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
            sourceName
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
