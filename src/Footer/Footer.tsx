import React from "react";
import { Grid, Toolbar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStickyNote } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="https://www.github.com/thebriando/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="/portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faStickyNote} />
          </a>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
