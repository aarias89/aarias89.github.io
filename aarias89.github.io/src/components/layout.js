/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import Menu from "./menu"
import About from "./aboutMe"
import ExperienceList from "./experienceList"
import ExperienceData from "../data/experience.json"
import FormContainer from "./submitFormComponents/FormContainer"
import Skills from "./skills"
import { Container, Row, Col } from "react-bootstrap"
import "../style/layout.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>Andres Arias | Web Developer</title>
          <link
            rel="stylesheet"
            href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
          />
        </Helmet>
        <Container>
          <About />
          <ExperienceList data={ExperienceData} />
          <Skills />
          {/* <Row className="justify-content-md-center"> */}
          <Row>
            <Col xs={12} md={8}>
              <FormContainer />
            </Col>
          </Row>
        </Container>

        {/* <main>{children}</main> */}
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
