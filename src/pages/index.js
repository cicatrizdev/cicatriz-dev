import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from 'gatsby'
import loadable from '@loadable/component'

import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import About from '../components/about'
import Skills from '../components/skills'
import Timeline from '../components/timeline'

const Layout = loadable(() => import('../components/layout'))

const Separator = styled.hr`
  margin-top: 24px;
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.fontColor};
  opacity: 0.2;
`

console.log(
  `
  ___
  |_|
   |._
   |'."-._.-""--.-"-.__.-'/
   |  |                  (
   |   |   Keep moving    )
   |   |     forward!    /
   |  /                 /
   |.'                 (
   |.-"-.__.-""-.__.-"-.)
   |
   |
   |
  ------------------------
 / May the X be with you! |
/                         |
  `
)

const Home = ({ className, location }) => {
  const title = siteConfig.siteTitle
  const { keywords } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero heroImg={siteConfig.siteCover} title={title} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <Col xs={4} className="avatar">
              <img
                className="avatar__image"
                src={withPrefix(siteConfig.authorAvatar)}
                alt="user avatar"
                width={200}
                height={200}
                style={{ objectFit: 'cover' }}
              />
              <div className="social">
                {siteConfig.social.github && (
                  <a
                    className="social-link github"
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="social-icon" size="32" />
                  </a>
                )}
                {siteConfig.social.linkedin && (
                  <a
                    className="social-link linkedin"
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="social-icon" size="32" />
                  </a>
                )}
                {siteConfig.social.email && (
                  <a
                    className="social-link email"
                    href={`mailto:${siteConfig.social.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope className="social-icon" size="32" />
                  </a>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={4} sm={4}>
              <About title="About" text={siteConfig.authorDescription} />
            </Col>
            <Col xs={4} sm={4}>
              <Skills title="Skills" />
            </Col>
          </Row>
          <Separator />
          <Timeline />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }

  .avatar {
    align-items: center;
    margin-bottom: 24px;
    flex-direction: column;
  }

  .avatar__image {
    box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.75);
    max-width: 200px;
    border-radius: 100px;
    margin: 0 auto 24px;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #fff;
  }

  a.social-link.github:hover {
    opacity: 0.4;
  }

  a.social-link.linkedin:hover {
    color: #0077b5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }

  a.social-link.calendly:hover {
    color: #a3b017;
  }
`
