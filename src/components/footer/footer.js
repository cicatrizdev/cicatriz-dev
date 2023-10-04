import React from 'react'
import styled from 'styled-components'
import { config } from 'react-awesome-styled-grid'
import siteConfig from '../../../data/siteConfig'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div>
        Developed with{' '}
        <span role="img" aria-label="emoji">
          💙
        </span>{' '}
        {` by ${siteConfig.authorName}`}
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  div {
    margin-bottom: 16px;
  }

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`

export const StyledImg = styled.a`
  margin-right: 24px;

  img {
    margin-bottom: -10px;
    background: black;
    padding: 12px;
    border-radius: 8px;

    :hover {
      background: #25303b;
    }
  }
`
