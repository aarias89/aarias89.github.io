import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi PortfolioPage</h1>
    <p>Welcome to page </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
