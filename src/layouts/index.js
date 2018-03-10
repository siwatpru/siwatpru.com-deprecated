import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-responsive-grid'

import { rhythm } from '../utils/typography'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Template = ({ className, location, children }) => {
  return (
    <Container className={className}>
      <Header location={location} />
      {children()}
      <Footer />
    </Container>
  )
}

export default styled(Template)`
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`
