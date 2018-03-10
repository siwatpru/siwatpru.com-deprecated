import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

const BlogPostTemplate = ({ className, data, pathContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pathContext
  return (
    <div className={className}>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>{post.frontmatter.title}</h1>
      <p className="date">
        {post.frontmatter.date}{' '}
        <a
          href={`https://github.com/siwatpru/siwatpru.com/blob/master/blog${
            post.fields.slug
          }/index.md`}
          target="_blank"
          rel="noopener"
        >
          [source]
        </a>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Bio />

      <ul className="next-or-previous">
        {previous && (
          <li>
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li>
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default styled(BlogPostTemplate)`
  .date {
    font-size: ${scale(-1 / 5).fontSize};
    line-height: ${scale(-1 / 5).lineHeight};
    display: block;
    margin-bottom: ${rhythm(1)};
    margin-top: ${rhythm(-0.8)};
  }

  hr {
    margin-bottom: ${rhythm(1)};
    background: hsla(0, 0%, 0%, 0.07);
  }

  .next-or-previous {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`
