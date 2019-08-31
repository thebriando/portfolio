import React from "react";
import logo from "./logo.svg";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { DevelopmentData } from "./ProjectData/development.data";

const App: React.FC = () => {
  return (
    <div className="App">
    <Container>
      <h1>Brian's Portfolio</h1>
      <h2>Development Work</h2>
      <Grid container spacing={4}>
        {DevelopmentData.map(project => {
          return (
            <Grid item sm={12} md={6}>
              <ProjectCard
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectLink={project.projectLink}
              />
            </Grid>
          );
        })}
      </Grid>
      </Container>
    </div>
  );
};

export default App;
