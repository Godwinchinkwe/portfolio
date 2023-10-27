import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList"
// import GitHubIcon from "@material-ui/icons/GitHub";
import "./Project.css"

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;