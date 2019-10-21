import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../style/layout.css"

import PortfolioList from "../components/Portfolio/portfolioList"
import PortfolioData from "../data/portfolio.json"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <br />
    <h3>Personal Projects And Past Work</h3>
    <br />
    <PortfolioList data={PortfolioData} />
    <Link to="/">Back to the homepage</Link>
  </Layout>
)

export default PortfolioPage
