import { ProjectModel } from '../models/project.model';
import PalletImage from '../assets/images/pallet.jpg';
import SlalomImage from '../assets/images/slalom-build.jpg';
import BrazeImage from '../assets/images/braze.jpeg';
import AtlassianImage from '../assets/images/atlassian.png';

export const ExperienceData: ProjectModel[] = [
  {
    projectName: 'Atlassian',
    projectDescription: [
      'Migrated Parcel, an open-source web bundler with over 400k monthly downloads, to Jira and Bitbucket',
      'Led a project stream to design and implement Parcel’s graph structure which improved build times by over 10% and memory usage by over 40%',
      'Drove performance exploration efforts and shipped various optimizations for Parcel which contributed to improvements all around the board',
      'Handled on-call support with Parcel integration across several teams in Atlassian',
      'Developed and maintained the internal services that manage hundreds of users and CLA’s in Atlassian’s open source projects',
    ],
    projectLink: 'https://atlassian.com',
    projectMedia: {
      title: 'Atlassian',
      image: AtlassianImage,
    },
    projectHeadline: 'Software Engineer',
  },
  {
    projectName: 'Braze',
    projectDescription: [
      'Implemented “message descriptions” as a way to help customers add details and notes when creating new dashboard items',
      'Rolled out the new feature to millions of monthly active users with multiple users responding with positive feedback on the new UI',
      'Scoped and estimated work for the project with our PM and designer, and presented demos to the organization',
    ],
    projectLink: 'https://braze.com',
    projectMedia: {
      title: 'Braze',
      image: BrazeImage,
    },
    projectHeadline: 'Software Engineer Intern',
  },
  {
    projectName: 'Slalom Build',
    projectDescription: [
      'Created a full stack web application for creating and managing company-sponsored hackathons to be used by participating employees',
      'Worked with an intern team of 10 people to develop the product using a tech stack of Angular and AWS (Lambda, DynamoDB, S3, Cognito)',
      'Wrote unit tests in Jasmine and end-to-end tests in Protractor for each component',
    ],
    projectLink: 'https://www.slalombuild.com/',
    projectMedia: {
      title: 'Slalom Build',
      image: SlalomImage,
    },
    projectHeadline: 'Software Engineer Intern',
  },
  {
    projectName: 'Pallet',
    projectDescription: [
      'Worked with founders to conceptualize and implement new features to the website in React JS',
      'Fixed various bugs and inconsistencies within the website to improve user experience',
    ],
    projectLink: 'https://pallet.click/',
    projectMedia: {
      title: 'Pallet',
      image: PalletImage,
    },
    projectHeadline: 'Front End Engineer Intern',
  },
];
