import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

export default ({ data }) => {
  return (
    <div>
      <H1>
        Hi, I'm Siwat. <br />I build web apps.
      </H1>
      <H3>Fullstack web developer living in Bangkok, Thailand.</H3>
      <VimP>
        <small>
          Siwat also in love with Vim.<br /> He won't be using other editors
          anytime soon ;)
        </small>
      </VimP>
      <GithubP>
        Nyeh Heh Heh! I know this site is fast!<br />
        Check out the source code{' '}
        <a
          href="https://github.com/siwatpru/siwatpru.com"
          target="_blank"
          rel="noopener"
        >
          here
        </a>
      </GithubP>
    </div>
  )
}

const H1 = styled.h1`
  border: 0;
  margin-bottom: 0;
`
const H3 = styled.h3`
  margin-top: 0;
`
const P = styled.p`
  color: hsla(0, 0%, 0%, 0.5);
`
const VimP = P.extend`
  margin-top: 10px;
  line-height: 1;
`
const GithubP = P.extend`
  margin-top: 170px;
  line-height: 1.4;
`
