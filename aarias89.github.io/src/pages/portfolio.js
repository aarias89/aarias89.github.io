import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Hi from Portfolio Page</h1>
    <p>Welcome to the page... under construction </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
