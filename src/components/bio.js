import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const StyledImage = styled(Image)`
  min-width: 60px;
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: ${rhythm(1 / 2)};
  border-radius: 5%;
`

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Wrapper>
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <p>
              <strong>{author}</strong> is a enthusiastic frontend engineer with
              vast experience developing full-stack web applications for various
              types of businesses. Great team player and creative thinker
              interested in UX, accessibility and web performance.
              <br />
              <a
                href={`https://twitter.com/${social.twitter}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                You should follow him on Twitter
              </a>
            </p>
          </Wrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
