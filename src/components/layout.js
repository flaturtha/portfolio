/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="site">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container mx-auto">
          <main className="site-content mb-20">{children}</main>
        </div>
        <footer className="text-shark-200 mt-auto p-6">
          <div className="container mx-auto flex flex-row justify-center">
          <p className="mr-4">© {new Date().getFullYear()} Rich Cook</p>
          <a href="/policies/" className="underline">Policies</a>
          </div>    
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
