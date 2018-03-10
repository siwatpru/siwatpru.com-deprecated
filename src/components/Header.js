import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

const Logo = ({ isRoot }) => {
  if (isRoot) {
    return (
      <div>
        <h1 className="large-header">
          <Link to={'/'}>siwatpru.com</Link>
        </h1>
      </div>
    )
  } else {
    return (
      <div>
        <h3 className="small-header">
          <Link to={'/'}>siwatpru.com</Link>
        </h3>
      </div>
    )
  }
}

const Header = ({ className }) => {
  let rootPath = `/`
  if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
    rootPath = __PATH_PREFIX__ + `/`
  }
  const bigHeaderPaths = [rootPath, `${rootPath}work`, `${rootPath}blog`]
  const activeStyle = {
    paddingBottom: '2px',
    borderBottom: '1px solid hsla(0, 0%, 0%, 1)',
  }
  console.log(location.pathname)
  return (
    <div className={className}>
      <Logo isRoot={bigHeaderPaths.indexOf(location.pathname) > -1} />
      <nav>
        <Link
          to={'/'}
          className={location.pathname === rootPath ? 'link-active' : ''}
        >
          Home
        </Link>
        <Link to={'/work'} activeClassName="link-active">
          Work
        </Link>
        <Link to={'/blog'} activeClassName="link-active">
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default styled(Header)`
  nav {
    margin-bottom: ${rhythm(1.5)};
    a + a {
      margin-left: 15px;
    }
    a {
      color: inherit;
      padding: 0 2px;
    }
    a:hover {
      text-decoration: none;
    }
    .link-active {
      border-bottom: 3px solid hsla(0, 0%, 0%, 0.08);
      padding-bottom: 2px;
    }
  }
  .large-header {
    font-size: ${scale(1.5).fontSize};
    line-height: ${scale(1.5).lineHeight};
    margin-bottom: 0;
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
    margin-bottom: 0;
    line-height: 1.5;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
    a {
      boxshadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`
