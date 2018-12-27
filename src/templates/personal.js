import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

const Content = styled.div`
  h4 {
    color: #757575;
  }
`

class Personal extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const navLinks = this.props.data.site.siteMetadata.navLinks
    const { previous, next } = this.props.pageContext

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        navLinks={navLinks}
      >
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 style={{ marginBottom: rhythm(1) }}>{post.frontmatter.title}</h1>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </Layout>
    )
  }
}

export default Personal

export const pageQuery = graphql`
  query PersonalPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        navLinks {
          title
          to
        }
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`
