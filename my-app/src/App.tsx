import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./App.css";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import { DevelopmentData } from "./ProjectData/development.data";
import { CreativeData } from "./ProjectData/creative.data";

const App: React.FC = () => {
  return (
    <div className="App">
      <Box height="300px">
        <div className="header">
          <div className="header-body">
            <Typography variant="h1">Brian's Portfolio</Typography>
            <Typography>Software Engineer</Typography>
          </div>
        </div>
      </Box>
      <Container>
        <h3>Development Work</h3>
        <Grid container spacing={4} alignItems="stretch" justify="center">
          {DevelopmentData.map(project => {
            return (
              <Grid item sm={12} md={4}>
                <ProjectCard
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLink={project.projectLink}
                  projectMedia={project.projectMedia}
                  projectHeadline={project.projectHeadline}
                />
              </Grid>
            );
          })}
        </Grid>
        <h3>Creative Projects</h3>
        <Grid container spacing={4}>
          {CreativeData.map(project => {
            return (
              <Grid item sm={12} md={6}>
                <ProjectCard
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectLink={project.projectLink}
                  projectMedia={project.projectMedia}
                  projectHeadline={project.projectHeadline}
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
