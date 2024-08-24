import AlmadelicVideoMobile from "../../../public/almadelic-mobile.mp4";
import AlmadelicVideoDesktop from "../../../public/almadelic-desktop.mp4";

import OverlandVideoMobile from "../../../public/overland-mobile.mp4";
import OverlandVideoDesktop from "../../../public/overland-desktop.mp4";

import NextFlixVideoMobile from "../../../public/nextflix-mobile.mp4";
import NextFlixVideoDesktop from "../../../public/nextflix-desktop.mp4";

export interface CreateProjectProps {
  title: string;
  projectTag: string;
  description: string;
  longDescription: string;
  videoUrl: {
    mobile: string;
    desktop: string;
  };
  deployedLink: string;
  pathUrl?: string;
  repoLink: string;
  technology: string[];
  role: string[];
  learnings: string;
  backgroundGradient: string;
}

const createProject = (props: CreateProjectProps): CreateProjectProps => {
  return { ...props };
};

export const featuredProjectsData: CreateProjectProps[] = [
  createProject({
    title: "Almadelic",
    projectTag: "full-stack",
    description:
      "A full-stack telehealth platform offering ketamine therapy and educational resources for mental health treatment, from the comfort of your home.",
    longDescription:
      "A comprehensive telehealth platform designed to transform the way mental health care is delivered, with a focus on providing ketamine therapy to individuals suffering from anxiety, depression, PTSD, and other conditions. This project involved a full-stack development approach using React, JavaScript, and Material UI for the frontend, with backend support from AWS services, including Lambda, API Gateway, and S3 for a serverless architecture.",
    videoUrl: {
      mobile: AlmadelicVideoMobile,
      desktop: AlmadelicVideoDesktop,
    },
    deployedLink: "https://deployed.com/",
    repoLink: "https://github.com/ChristianBega/Blog-Site",
    technology: [
      "React",
      "Material UI",
      "GoHighLevel (CRM)",
      "Dr.Chrono (EHR)",
      "Zapier Automations",
      "AWS S3",
      "AWS Lambda",
      "AWS API-Gateway",
      "AWS Route 53",
      "Cloud Front",
      // 3rd Party API
      // Automation
    ],
    role: [
      "Lead Developer & Full-Stack Engineer: Spearheaded the development of both frontend and backend components, ensuring seamless integration between the UI and underlying services.",
      "API Integration Specialist: Designed and implemented REST APIs using AWS Lambda and API Gateway, facilitating secure data exchange between the CRM, EHR, and payment systems.",
      "Automation Architect: Developed and managed complex automations using Zapier and GoHighLevel CRM to streamline business processes, including appointment reminders, lead nurturing, and more.",
      "Collaborator & Project Consultant: Worked closely with designers, project managers, and business stakeholders to align the platform with business requirements and user needs, finding technical solutions to complex challenges.",
    ],
    learnings: "",
    backgroundGradient: "linear-gradient(180deg, #ff7a4d, #2349e4)",
  }),
  createProject({
    title: "Overland Baseball",
    projectTag: "front-end",
    description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    longDescription:
      "Overland Baseball's website is a single page React application that provides its users a convenient way to access and browse different team information. The application is built with React and Material UI to provide a polished and functional front end. Additionally, the website features working forms using Email Js, image sliders, and timelines.",
    videoUrl: {
      mobile: OverlandVideoMobile,
      desktop: OverlandVideoDesktop,
    },

    deployedLink: "https://overlandbaseball.com/",
    pathUrl: "/project-details",
    repoLink: "https://github.com/ChristianBega/Overland-Baseball-Website",
    technology: ["React", "Material UI", "Framer motion", "Email Js", "React Form Hook"],
    role: [
      "Developed application from ground up starting with creating wire frames, designing site layout and, and creating logic and functionality for the website.",
      "Designed website wireframe to clarify UI/UX layout and interconnect crucial website information.",
      "Collaborated with client to determine and establish clear user criteria, user stories, and additional user requirements for the website.",
      "Integrated 3rd Party APIs and dependencies to handle form validation and emailing services.",
    ],
    learnings: "",
    backgroundGradient: "linear-gradient(180deg, #0066ff, #33cc33)",
  }),
  createProject({
    title: "NextFlix (Movie App)",
    projectTag: "full-stack",
    description: "A full-stack movie browsing application that allows users to discover movies and shows using The Movie Database (TMDb) API.",
    longDescription:
      "NextFlix is a full-stack web application built with React, styled components, and Firebase, designed to provide users with an easy and intuitive way to browse and discover movies and TV shows. By leveraging The Movie Database (TMDb) API, the app offers detailed information on a vast array of films and series, including trailers, ratings, and reviews. The integration of Firebase ensures secure user authentication and data storage, allowing users to save their favorite movies and create watchlists for a personalized viewing experience.",
    videoUrl: {
      mobile: NextFlixVideoMobile,
      desktop: NextFlixVideoDesktop,
    },
    deployedLink: "https://nextflix-movie-hub.netlify.app/",
    repoLink: "https://github.com/ChristianBega/Movie-App",
    technology: ["React", "Javascript", "Styled Components", "Firebase", "The Movie Database API"],
    role: [
      "Designed and implemented the front-end using React and styled components, ensuring a responsive and visually appealing user interface.",
      "Integrated The Movie Database (TMDb) API to fetch and display detailed movie and TV show information, including search functionality.",
      "Set up Firebase for user authentication and database storage, enabling users to save their favorite movies and manage watchlists.",
    ],
    learnings:
      "Gained experience in building full-stack applications with React and Firebase, and deepened knowledge in consuming external APIs and managing asynchronous data flows in a React application.",
    backgroundGradient: "linear-gradient(180deg, #de0a14, #0f4392)",
  }),
];
