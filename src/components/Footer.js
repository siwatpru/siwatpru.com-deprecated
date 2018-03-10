import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }) => (
  <div className={className}>© Siwat Pruksapanya</div>
)

export default styled(Footer)`
  margin-top: 20px;
  border-top: 1px solid hsla(0, 0%, 0%, 0.07);
  color: hsla(0, 0%, 0%, 0.5);
`
