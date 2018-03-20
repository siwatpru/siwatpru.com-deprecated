import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'

import { rhythm } from '../utils/typography'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default ({ location, children, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  return (
    <StyledContainer>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <Header location={location} />
      {children()}
      <Footer />
    </StyledContainer>
  )
}

export const siteQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const StyledContainer = styled(Container)`
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
