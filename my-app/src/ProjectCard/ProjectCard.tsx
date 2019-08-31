import React, { FunctionComponent } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ProjectModel } from "../ProjectData/project.data.model";
import "../App.css";

export const ProjectCard = ({
  projectName,
  projectDescription,
  projectLink
}: ProjectModel) => {
  return (
    <Card>
      <CardActionArea>
        {/* <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ProjectDescription
              description={projectDescription}
            ></ProjectDescription>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={projectLink}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

type projectDescriptionProps = {
  description: string[];
};
export const ProjectDescription = ({
  description
}: projectDescriptionProps) => {
  return (
    <ul>
      {description.map(obj => (
        <li className="description">{obj}</li>
      ))}
    </ul>
  );
};
