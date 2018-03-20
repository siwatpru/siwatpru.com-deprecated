import React from 'react'
import styled from 'styled-components'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

export default () => (
  <Div>
    <Img src={profilePic} alt={`Siwat Pruksapanya`} />
    <p>
      Written by <strong>Siwat Pruksapanya</strong> who lives and works in
      Bangkok building web. You should follow him on{' '}
      <a href="https://twitter.com/siwatpru" target="_blank" rel="noopener">
        Twitter
      </a>{' '}
      and{' '}
      <a href="https://github.com/siwatpru" target="_blank" rel="noopener">
        Github
      </a>
    </p>
  </Div>
)

const Div = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const Img = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`
