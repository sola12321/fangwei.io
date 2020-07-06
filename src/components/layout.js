/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const OuterLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
`

const Footer = styled.footer`
  display: block;
  text-align: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            Copyright © {new Date().getFullYear()} Fangwei Gao. 
            Powered by
            <OuterLink href="https://www.gatsbyjs.org">Gatsby</OuterLink>
            with
            <OuterLink href="https://github.com/niklasmtj/gatsby-theme-julia/tree/master/theme">Theme Julia</OuterLink>.
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
