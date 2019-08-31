import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./App.css";
import { Grid, Typography, Container, Box } from "@material-ui/core";
import { DevelopmentData } from "./ProjectData/development.data";
import { CreativeData } from "./ProjectData/creative.data";
import { ExperienceData } from "./ProjectData/experience.data";

const App: React.FC = () => {
  return (
    <div className="App">
      <Box height="300px">
        <div className="header">
          <div className="header-body">
            <Typography variant="h2">Brian's Portfolio</Typography>
            <Typography>Software Engineer | Seattle, WA</Typography>
          </div>
        </div>
      </Box>
      <Container>
        <h2>Work Experience</h2>
        <Grid container spacing={4} alignItems="stretch" justify="center">
          {ExperienceData.map(project => {
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
        <h2>Development Work</h2>
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
