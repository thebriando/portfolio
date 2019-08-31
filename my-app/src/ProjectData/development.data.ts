import { ProjectModel } from "./project.data.model";

export const DevelopmentData: ProjectModel[] = [
  {
    projectName: "BobaStop",
    projectDescription: [
      "Developed an Android app in Kotlin to display nearby bubble tea shops using the Yelp API",
      "Implemented a randomizer feature to generate random bubble tea flavors by tapping a button or shaking the device"
    ],
    projectLink: "https://github.com/etruong/info-448-final"
  },
  {
    projectName: "Write Every Morning",
    projectDescription: [
      "Coded productivity website in React JS for keeping track of daily tasks within a calendar",
      "Implemented Firebase's user authentication and realtime database to keep track of data for each user"
    ],
    projectLink: "https://write-every-morning.firebaseapp.com"
  },
  {
    projectName: "Playlister",
    projectDescription: [
      "Created a website to display Spotify music recommendations based on user’s selected artist, genre, or playlist",
      "Fetched data from the Spotify Web API to generate artist and track recommendations based on the user’s input"
    ],
    projectLink: "https://info340a-wi19.github.io/project-thebriando/"
  },
  {
    projectName: "Optimum Appliance",
    projectDescription: [
      "Designed, wrote copy, and coded website for a local appliance repair shop and grew site to over 15k pageviews",
      "Integrated appointments system and contact page for customer inquiries"
    ],
    projectLink: "http://www.optimumappliance.net/"
  }
];
