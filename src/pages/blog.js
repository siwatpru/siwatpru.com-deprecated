import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'

import { rhythm } from '../utils/typography'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node }) => {
        const title = get(node, 'frontmatter.title') || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link
                style={{ boxShadow: 'none' }}
                to={`/blog${node.fields.slug}`}
              >
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
