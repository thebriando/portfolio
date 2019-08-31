import { ProjectModel } from "../models/project.model";
import PalletImage from "../images/pallet.jpg";
import SlalomImage from "../images/slalom-build.jpg";

export const ExperienceData: ProjectModel[] = [
  {
    projectName: "Slalom Build",
    projectDescription: [
      "Created a full stack web application for creating and managing company-sponsored hackathons to be used by participating employees",
      "Worked with an intern team of 10 people to develop the product using a tech stack of Angular and AWS (Lambda, DynamoDB, S3, Cognito)",
      "Wrote unit tests in Jasmine and end-to-end tests in Protractor for each component"
    ],
    projectLink: "https://www.slalombuild.com/",
    projectMedia: {
      title: "Slalom Build",
      image: SlalomImage
    },
    projectHeadline: "Software Engineer Intern"
  },
  {
    projectName: "Pallet",
    projectDescription: [
      "Worked with founders to conceptualize and implement new features to the website in React JS",
      "Fixed various bugs and inconsistencies within the website to improve user experience"
    ],
    projectLink: "https://pallet.click/",
    projectMedia: {
      title: "Pallet",
      image: PalletImage
    },
    projectHeadline: "Front End Engineer Intern"
  }
];
