import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

import PortfolioCard from "../components/portfolioCard"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <h1>Portfolio Page</h1>
      </Row>
      <p>Welcome to the page... under construction </p>
      <PortfolioCard />
      <Link to="/">Back to the homepage</Link>
    </Container>
  </Layout>
)

export default PortfolioPage
