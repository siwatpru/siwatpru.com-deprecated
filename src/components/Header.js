import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

const Header = ({ className, isRoot }) => {
  if (isRoot) {
    return (
      <div className={className}>
        <h1 className="large-header">
          <Link to={'/'}>siwatpru.com</Link>
        </h1>
      </div>
    )
  } else {
    return (
      <div className={className}>
        <h3 className="small-header">
          <Link to={'/'}>siwatpru.com</Link>
        </h3>
      </div>
    )
  }
}

export default styled(Header)`
  .large-header {
    font-size: ${scale(1.5).fontSize};
    line-height: ${scale(1.5).lineHeight};
    margin-bottom: ${rhythm(1.5)};
    margin-top: 0;
    a {
      boxshadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
  .small-header {
    font-family: Montserrat, sans-serif;
    margin-top: 0;
    margin-bottom: ${rhythm(-1)};
    a {
      boxshadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`
