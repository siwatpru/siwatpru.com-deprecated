import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

const Index = ({ className, data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div className={className}>
      <Helmet title={siteTitle} />
      <h1>
        Hi, I'm Siwat. <br />I build web apps.
      </h1>
      <h3>Fullstack web developer living in Bangkok, Thailand.</h3>
      <p className="vim">
        <small>
          Siwat also in love with Vim.<br /> He won't be using other editors
          anytime soon ;)
        </small>
      </p>
      <p className="github">
        Nyeh Heh Heh! I know this site is fast!<br />
        Check out the source code{' '}
        <a
          href="https://github.com/siwatpru/siwatpru.com"
          target="_blank"
          rel="noopener"
        >
          here
        </a>
      </p>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default styled(Index)`
  h1 {
    border: 0;
    margin-bottom: 0;
  }
  h3 {
    margin-top: 0;
  }
  p {
    color: hsla(0, 0%, 0%, 0.5);
  }
  .vim {
    margin-top: 10px;
    line-height: 1;
  }
  .github {
    margin-top: 170px;
    line-height: 1.4;
  }
`
