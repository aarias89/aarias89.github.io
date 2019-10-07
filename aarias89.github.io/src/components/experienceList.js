import React from "react"
import ExperienceCard from "./experienceCard"

const ExperienceList = props => {
  const jobs = props.data.map(job => {
    return <ExperienceCard key={job.id} job={job} />
  })

  return (
    <div>
      <h3 id="experience">Experience</h3>
      {jobs}
    </div>
  )
}

export default ExperienceList
