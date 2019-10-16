import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

import PortfolioCard from "../components/portfolioCard"

import BlogAppImg from "../images/portfolioImages/BlogApp.jpg"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Container>
      <br />
      <Row className="justify-content-md-center">
        <h1>Portfolio Page</h1>
      </Row>
      <p>Welcome to the page... under construction </p>
      <Row className="portfolioCard-container">
        <PortfolioCard 
        img={BlogAppImg} 
        title={"Ruby on Rails Blog App"} 
        description="Basic Ruby on Rails blog application built using BDD testing methodology using Rspec. Application uses ActionCable for realtime updates on each comment." 
        btnMessage={"Live Demo"}/>
        <PortfolioCard />
        <PortfolioCard />
        <Col xs={12} md={8} lg={12}>
          {/* <PortfolioCard /> */}
        </Col>
      </Row>
      <Link to="/">Back to the homepage</Link>
    </Container>
  </Layout>
)

export default PortfolioPage
