import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

const Work = ({ className, data }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <div className={className}>
      <Helmet title={siteTitle} />
      <h1>
        Siwat is building<br />
        softwares and tools
      </h1>
      <h3>somewhere in the corner at Sertis.</h3>
      <p className="work">
        <small>
          Sertis is a leading data and AI innovation company in Thailand. Check
          Sertis out{' '}
          <a href="https://sertiscorp.com" target="_blank" rel="noopener">
            here
          </a>.
        </small>
      </p>
      <p className="open-source">
        Have a project you'd like to discuss?<br />
        Let's chat{' '}
        <a href="mailto:siwat.pru@outlook.com" target="_blank" rel="noopener">
          siwat.pru@outlook.com
        </a>
        <br />
        <small>Also, more open-source works coming soon :)</small>
      </p>
    </div>
  )
}

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default styled(Work)`
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
  .work {
    line-height: 1;
  }
  .open-source {
    line-height: 1.4;
    margin-top: 170px;
    small {
      margin-top: 20px;
    }
  }
`
