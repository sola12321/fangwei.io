import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Container = styled.div`
  text-align: left;
`
const ImageContainer = styled.div`
  height: 180px;
  width: 180px;
  display: inline-block;
  float: right;
`

const OuterContainer = styled.div`
  min-height:80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`

const Link = styled.a`
  color: #cc002b;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`

const List = styled.ul``

const ListElem = styled.li``

const NameHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`


const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        image: file(relativePath: { eq: "my_head.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>About Me</NameHeader>
          <Description>
            <ImageContainer>
              <Img fluid={data.image.childImageSharp.fluid} />
            </ImageContainer>
            I am a master student in the{" "}
            <Link href="https://www.lti.cs.cmu.edu/">
              Language Technology institue
            </Link>
            ,{" "}
            <Link href="https://www.cs.cmu.edu/">
              School of Computer Science
            </Link>
            , at{" "}
            <Link href="https://www.cmu.edu/">Carnegie Mellon University</Link>.
            My intereted areas and past experience include machine learning,
            distribute system and full-stack web development. <br />
            <br />
            Before starting my graduate study at CMU, I obtained my BS degree at{" "}
            <Link href="https://illinois.edu/">
              University of Illinois at Urbana-Champaign
            </Link>
            , majoring in Computer Engineering. In UIUC, I used to work on
            modeling, analyzing and simulating social media with{" "}
            <Link href="http://abdelzaher.cs.illinois.edu/">
              Prof. Tarek Abdelzaher
            </Link>
            .
          </Description>
          <NameHeader>Pulications</NameHeader>
          <List>
            <ListElem>
              Chaoqi Yang, Ruijie Wang, <strong>Fangwei Gao</strong>, Dachun
              Sun, Jiawei Tang, Tarek Abdelzaher.{" "}
              <Link href="https://arxiv.org/abs/2005.00112">
                "Quantifying Projected Impact of Social Distancing Policies on
                COVID-19 Outcomes in the US"
              </Link>
              . ArXiv preprint, arXiv:2005.00112. Apr. 30 2020. <br />
              We also built an interactive web application to visualize our
              predictive results. Check out{" "}
              <Link href="https://covid19predictions.csl.illinois.edu">
                here
              </Link>
              .
            </ListElem>
          </List>
          <NameHeader>Experience</NameHeader>
          <List>
            <ListElem>
              <strong>Cyber Physical Computing Group, UIUC</strong> <br />
              Undergraduate research assitant mainly worked on DARPA{" "}
              <Link href="https://www.darpa.mil/program/computational-simulation-of-online-social-behavior">
                SocialSim
              </Link>{" "}
              Program, Feb. 2019 - May 2020
            </ListElem>
            <ListElem>
              <strong>Indeed</strong> <br />
              Software Engineer Intern in Lead Generation(LeadGen) team, May 2019 - Aug. 2019
            </ListElem>
          </List>
          <NameHeader>Teaching</NameHeader>
          <List>
            <ListElem>
              Course Assistant for CS374/ECE374: Algorithms and Models of
              Computation (
              <Link href="https://courses.engr.illinois.edu/cs374/sp2020/B/">
                Spring 2020
              </Link>
              ,{" "}
              <Link href="https://courses.engr.illinois.edu/cs374/fa2019/A/">
                Fall 2019
              </Link>
              ,{" "}
              <Link href="https://courses.engr.illinois.edu/cs374/sp2019/">
                Spring 2019
              </Link>
              )
            </ListElem>
          </List>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
