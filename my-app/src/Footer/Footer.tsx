import React from "react";
import { Grid, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <Toolbar className="footer">
      <Grid container spacing={3} alignItems="stretch" justify="center">
        <Grid item>
          <a
            href="https://www.linkedin.com/in/thebriando/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.github.com/thebriando/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faFileAlt} />
        </Grid>
        <Grid item>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </Grid>
      </Grid>
    </Toolbar>
  );
};
