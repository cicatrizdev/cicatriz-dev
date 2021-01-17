import React from 'react'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { config } from 'react-awesome-styled-grid';
import siteConfig from '../../../data/siteConfig'

import BMCoffee from '../../assets/buymeacoffee.svg';

const Link = styled(({ className, icon: Icon, color, ...props }) => (
  <a 
    className={className}
    target='_blank'
    rel="noopener noreferrer"
    {...props}
  >
    <Icon color={color} size={32} />
  </a>
)).attrs(props => ({ color: props.theme.colors.fontColor }))`
  & + & {
    margin-left: 24px;
  }
`;

const Footer = ({ className }) => {
  const {
    twitter,
    linkedin,
    github,
  } = siteConfig.social
  return (
    <footer className={className}>
      Desenvolvido com 💙 {` por ${siteConfig.authorName} © ${new Date().getFullYear()} `}
      <div>
        <StyledImg href="https://www.buymeacoffee.com/cicatr1z" target="_blank" rel="noopener noreferrer">
          <img
            src={BMCoffee}
            width="150"
          />
        </StyledImg>
      </div>
    </footer>
  )
}

export default styled(Footer)`
  min-height: 93px; 
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: calc(960px + 48px);
  margin: 0 auto;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.background};

  ${props => config(props).media.sm`
    flex-direction: row;
  `}
`;

export const StyledImg = styled.a`
  margin-right: 24px;  

  img {
    margin-bottom: -10px;
    background: black;
    padding: 12px;
    border-radius: 8px;

    :hover {
      background: #25303B
    }
  }
`;