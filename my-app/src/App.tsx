import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./App.css";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { DevelopmentData } from "./ProjectData/development.data";
import { CreativeData } from "./ProjectData/creative.data";
import { AnalysisData } from "./ProjectData/analysis.data";

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
                  projectMedia={project.projectMedia}
                />
              </Grid>
            );
          })}
        </Grid>
        <h2>Creative Projects</h2>
        <Grid container spacing={4}>
          {CreativeData.map(project => {
            return (
              <Grid item sm={12} md={6}>
                <ProjectCard
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLink={project.projectLink}
                  projectMedia={project.projectMedia}
                />
              </Grid>
            );
          })}
        </Grid>
        <h2>Data Analytics Work</h2>
        <Grid container spacing={4}>
          {AnalysisData.map(project => {
            return (
              <Grid item sm={12}>
                <ProjectCard
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLink={project.projectLink}
                  projectMedia={project.projectMedia}
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
