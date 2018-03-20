import React from 'react'
import styled from 'styled-components'

import { rhythm } from '../utils/typography'

export default ({ data }) => {
  return (
    <div>
      <H1>
        Siwat is building<br />
        softwares and tools
      </H1>
      <H3>somewhere in the corner at Sertis.</H3>
      <WorkP>
        <small>
          Sertis is a leading data and AI innovation company in Thailand. <br />
          Check Sertis out{' '}
          <a href="https://sertiscorp.com" target="_blank" rel="noopener">
            here
          </a>.
        </small>
      </WorkP>
      <OpenSourceP>
        Have a project you'd like to discuss?<br />
        Let's chat{' '}
        <a href="mailto:siwat.pru@outlook.com" target="_blank" rel="noopener">
          siwat.pru@outlook.com
        </a>
        <br />
        <StyledSmall>Also, more open-source works coming soon :)</StyledSmall>
      </OpenSourceP>
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
const WorkP = P.extend`
  line-height: 1;
`
const OpenSourceP = P.extend`
  line-height: 1.4;
  margin-top: 170px;
`
const StyledSmall = styled.small`
  margin-top: 20px;
`
