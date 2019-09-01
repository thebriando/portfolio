import React from "react";
import { ProjectCard } from "./ProjectCard/ProjectCard";
import "./App.css";
import { Grid, Container } from "@material-ui/core";
import { DevelopmentData } from "./ProjectData/development.data";
import { CreativeData } from "./ProjectData/creative.data";
import { ExperienceData } from "./ProjectData/experience.data";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="segment work">
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
        </Container>
      </div>
      <div className="segment development">
        <Container>
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
        </Container>
      </div>
      <div className="segment creative">
        <Container>
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
      <Footer />
    </div>
  );
};

export default App;
