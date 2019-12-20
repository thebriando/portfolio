import { ProjectModel } from "../models/project.model";
import BobaStopImage from "../assets/images/bobastop.png";
import WEMImage from "../assets/images/writeeverymorning.png";
import PlaylisterImage from "../assets/images/playlister.jpg";
import OAImage from "../assets/images/optimumappliance.jpg";
import UWPDCDImage from "../assets/images/uwpdcrimedata.jpg";
import UWMarketplaceImage from "../assets/images/uwmarketplace.png";
import CourseVisorImage from "../assets/images/coursevisor.png"

export const DevelopmentData: ProjectModel[] = [
  {
    projectName: "UW Marketplace",
    projectDescription: [
      "Developed front end components in React, used websockets to notify users when new listings are posted in realtime",
      "Implemented a back end architecture in Go using a Redis store for user sessions, a MySQL database for storing user profiles, a MongoDB database with a Node.js microservice for storing user listing data, and a RabbitMQ instance for sending messages through websockets",
      "Wrote scripts to Dockerize the web client and API server to deploy into AWS EC2 instances"
    ],
    projectLink: "https://github.com/mollyyli/UW-MarketPlace",
    projectMedia: {
      title: "UW Marketplace",
      image: UWMarketplaceImage
    },
    projectHeadline: "A marketplace for UW students to buy and sell their belongings with other students"
  },
  {
    projectName: "CourseVisor",
    projectDescription: [
      "Implemented and conceptualized idea for a website for students to review their UW courses",
      "Designed and created front end components using React and Material UI",
      "Web scraped UW course catalog to populate courses database in Firebase"
    ],
    projectLink: "https://github.com/CourseVisor/CourseVisor",
    projectMedia: {
      title: "UW Marketplace",
      image: CourseVisorImage
    },
    projectHeadline: "A website for students to share their experiences in different courses"
  },
  {
    projectName: "Boba Stop",
    projectDescription: [
      "Developed an Android app in Kotlin to display nearby bubble tea shops using the Yelp API",
      "Implemented a randomizer feature to generate random bubble tea flavors by tapping a button or shaking the device"
    ],
    projectLink: "https://github.com/etruong/info-448-final",
    projectMedia: {
      title: "BobaStop",
      image: BobaStopImage
    },
    projectHeadline: "Android app for finding the hottest new boba shops"
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
      image: WEMImage
    },
    projectHeadline: "React application for setting and keeping track of daily goals"
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
      image: PlaylisterImage
    },
    projectHeadline: "Spotify music recommendations and analysis"
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
      image: OAImage
    },
    projectHeadline: "Client project for an appliance repair business"
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
      image: UWPDCDImage
    },
    projectHeadline: "Interactive R Shiny app to visualize UW crime data"
  }
];
