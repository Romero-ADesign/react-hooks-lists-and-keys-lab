import React from "react";

function ProjectItem({ name, about, technologies }) {

  const technologie = technologies.map((techObj, id) => {
    return <span key={id}>{techObj}</span>
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologie}
      </div>
    </div>
  );
}

export default ProjectItem;


//const project = projects.map((projObj) => {
//  return <ProjectItem key={projObj.id}name={projObj.name} about={projObj.about} technologies={projObj.technologies} />
//})