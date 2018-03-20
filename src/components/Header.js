import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

const Logo = ({ isRoot }) => {
  if (isRoot) {
    return (
      <div>
        <H1>
          <StyledHeaderLink to={'/'}>siwatpru.com</StyledHeaderLink>
        </H1>
      </div>
    )
  } else {
    return (
      <div>
        <H3>
          <StyledHeaderLink to={'/'}>siwatpru.com</StyledHeaderLink>
        </H3>
      </div>
    )
  }
}

export default ({ location }) => {
  const rootPath = `/`
  const bigHeaderPaths = [rootPath, `${rootPath}work`, `${rootPath}blog`]
  const { pathname } = location
  return (
    <div>
      <Logo isRoot={bigHeaderPaths.indexOf(location.pathname) > -1} />
      <Nav>
        <StyledLink to="/" isActive={() => pathname === rootPath}>
          Home
        </StyledLink>
        <StyledLink to="/work" isActive={() => pathname === '/work'}>
          Work
        </StyledLink>
        <StyledLink to="/blog" isActive={() => pathname.startsWith('/blog')}>
          Blog
        </StyledLink>
      </Nav>
    </div>
  )
}

const StyledLink = styled(Link)`
  ${props =>
    props.isActive() &&
    `
    border-bottom: 3px solid hsla(0, 0%, 0%, 0.08);
  `};
`

const Nav = styled.nav`
  margin-bottom: ${rhythm(1.5)};
  ${StyledLink} {
    color: inherit;
    padding: 2px 2px;
  }
  ${StyledLink} + ${StyledLink} {
    margin-left: 15px;
  }
  ${StyledLink}:hover {
    text-decoration: none;
  }
`

const StyledHeaderLink = styled(Link)`
  boxshadow: none;
  text-decoration: none;
  color: inherit;
  ${this}: hover {
    text-decoration: none;
  }
`

const H1 = styled.h1`
  font-size: ${scale(1.5).fontSize};
  line-height: ${scale(1.5).lineHeight};
  margin-bottom: 0;
  margin-top: 0;
`

const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.07);
`
