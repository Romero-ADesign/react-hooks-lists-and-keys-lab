import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const project = projects.map((projObj) => {
    return <ProjectItem key={projObj.id}name={projObj.name} about={projObj.about} technologies={projObj.technologies} />
  })

  console.log(project)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;


//const linkElements = links.map((linkList) => {
//  return <a href={links[0]}>{linkList}</a>
//});
//return (
//  <nav>{linkElements}</nav>
//);