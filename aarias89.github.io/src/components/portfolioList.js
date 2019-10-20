import React, { Component } from "react"
import PortfolioCard from "./portfolioCard"

class PortfolioList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const projects = this.props.data.map(project => {
      return <PortfolioCard key={project.title} project={project} />
    })

    return <div className="portfolioCard-container"> {projects}</div>
  }
}

export default PortfolioList
