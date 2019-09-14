import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ProjectModel } from "../models/project.model";
import { ProjectDescription } from "./ProjectDescription";
import "../App.css";
import "./ProjectCard.css";

export const ProjectCard = ({
  projectName,
  projectDescription,
  projectLink,
  projectMedia,
  projectHeadline
}: ProjectModel) => {
  return (
    <Card className="card">
      <CardActionArea
        href={projectLink}
        target="_blank"
        className="card"
        rel="noopener noreferrer"
      >
        <CardMedia
          component="img"
          alt={projectMedia.title}
          height="300"
          image={projectMedia.image}
          title={projectMedia.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className="project-name">
            {projectName}
          </Typography>
          <Typography color="textSecondary">{projectHeadline}</Typography>
          <div className="MuiTypography-root MuiTypography-body2 MuiTypography-colorTextSecondary">
            <ProjectDescription
              description={projectDescription}
            ></ProjectDescription>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
