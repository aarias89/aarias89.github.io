import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

import About from "../components/About/aboutMe"
import ExperienceList from "../components/Experience/experienceList"
import ExperienceData from "../data/experience.json"
import FormContainer from "../components/submitFormComponents/FormContainer"
import Skills from "../components/Skills/skills"
import { Container, Row, Col } from "react-bootstrap"
import "../style/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Andres Arias" />
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

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
