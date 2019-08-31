import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ProjectModel } from "../ProjectData/project.data.model";
import { ProjectDescription } from "./ProjectDescription";
import "../App.css";

export const ProjectCard = ({
  projectName,
  projectDescription,
  projectLink,
  projectMedia,
  projectHeadline
}: ProjectModel) => {
  return (
    <Card>
      <CardActionArea href={projectLink} target="_blank">
        <CardMedia
            component="img"
            alt={projectMedia.title}
            height="300"
            image={projectMedia.image}
            title={projectMedia.title}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography color="textSecondary">
            {projectHeadline}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ProjectDescription
              description={projectDescription}
            ></ProjectDescription>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
