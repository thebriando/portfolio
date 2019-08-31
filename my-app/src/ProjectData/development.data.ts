import { ProjectModel } from "./project.data.model";

export const DevelopmentData: ProjectModel[] = [
  {
    projectName: "BobaStop",
    projectDescription: [
      "Developed an Android app in Kotlin to display nearby bubble tea shops using the Yelp API",
      "Implemented a randomizer feature to generate random bubble tea flavors by tapping a button or shaking the device"
    ],
    projectLink: "https://github.com/etruong/info-448-final",
    projectMedia: {
      title: "BobaStop",
      image: "https://i.imgur.com/YBxcIXq.png"
    }
  },
  {
    projectName: "Write Every Morning",
    projectDescription: [
      "Coded productivity website in React JS for keeping track of daily tasks within a calendar",
      "Implemented Firebase's user authentication and realtime database to keep track of data for each user"
    ],
    projectLink: "https://write-every-morning.firebaseapp.com",
    projectMedia: {
      title: "Write Every Morning",
      image: "https://i.imgur.com/j6htJnW.png"
    }
  },
  {
    projectName: "Playlister",
    projectDescription: [
      "Created a website to display Spotify music recommendations based on user’s selected artist, genre, or playlist",
      "Fetched data from the Spotify Web API to generate artist and track recommendations based on the user’s input"
    ],
    projectLink: "https://info340a-wi19.github.io/project-thebriando/",
    projectMedia: {
      title: "Playlister",
      image: "https://i.imgur.com/AB2k2Ow.png"
    }
  },
  {
    projectName: "Optimum Appliance",
    projectDescription: [
      "Designed, wrote copy, and coded website for a local appliance repair shop and grew site to over 15k pageviews",
      "Integrated appointments system and contact page for customer inquiries"
    ],
    projectLink: "http://www.optimumappliance.net/",
    projectMedia: {
      title: "Optimum Appliance",
      image: "https://i.imgur.com/LLpzXgg.jpg"
    }
  },
  {
    projectName: "UWPD Crime Data",
    projectDescription: [
      "Worked with student team to create a Shiny web app to visualize different crime statistics around the UW campus",
      "Wrote code to create reactive plots to display data pulled from online crime datasets and various APIs"
    ],
    projectLink: "https://thebriando.shinyapps.io/INFO-final-project/",
    projectMedia: {
      title: "UWPD Crime Data",
      image: "https://i.imgur.com/O9b1b5q.png"
    }
  }
];
