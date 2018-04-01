import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Container } from 'react-responsive-grid'

import { rhythm } from '../utils/typography'

import Header from '../components/Header'
import Footer from '../components/Footer'

require('prismjs/themes/prism.css')

export default ({ location, children, data }) => {
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  return (
    <StyledContainer>
      <Helmet>
        <html lang="en" />
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
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
