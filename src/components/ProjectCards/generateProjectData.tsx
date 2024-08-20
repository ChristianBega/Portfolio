// import OverlandBaseballImage from "../../../public/overlandBaseball.png";
// import BlogSiteImage from "../../../public/blogSite.png";
// import FinancialTrackerImage from "../../../public/FinaicalTracker.png";
import AlmadelicVideoMobile from "../../../public/almadelic-mobile.mp4";
import OverlandVideoMobile from "../../../public/overland-mobile.mp4";
import NextFlixVideoMobile from "../../../public/nextflix-mobile.mp4";

export interface CreateProjectProps {
  title: string;
  projectTag: string;
  description: string;
  longDescription: string;
  videoUrl: string;
  deployedLink: string;
  pathUrl?: string;
  repoLink: string;
  technology: string[];
  role: string[];
  learnings: string;
}

const createProject = (props: CreateProjectProps): CreateProjectProps => {
  return { ...props };
};

// export const featuredProjectsData: CreateProjectProps[] = [
//   createProject({
//     title: "Overland Baseball",
//     projectTag: "front-end",
//     description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
//     longDescription:
//       "Overland Baseball's website is a single page React application that provides its users a convenient way to access and browse different team information. The application is built with React and Material UI to provide a polished and functional front end. Additionally, the website features working forms using Email Js, image sliders, and timelines.",
//     imageUrl: OverlandBaseballImage,
//     deployedLink: "https://overlandbaseball.com/",
//     pathUrl: "/project-details",
//     repoLink: "https://github.com/ChristianBega/Overland-Baseball-Website",
//     technology: ["React", "Material UI", "Framer motion", "Email Js", "React Form Hook"],
//     role: [
//       "Developed application from ground up starting with creating wire frames, designing site layout and, and creating logic and functionality for the website.",
//       "Designed website wireframe to clarify UI/UX layout and interconnect crucial website information.",
//       "Collaborated with client to determine and establish clear user criteria, user stories, and additional user requirements for the website.",
//       "Integrated 3rd Party APIs and dependencies to handle form validation and emailing services.",
//     ],
//     learnings: "",
//   }),
//   createProject({
//     title: "Blog Site",
//     projectTag: "full-stack",
//     description:
//       "A MERN full stack blog site web application which allows users a way to create a blog post, leave comments, and update their profile.",
//     longDescription:
//       "Coding Circle is a MERN full-stack blog web application that offers users a way to create an account, leave posts and comments, and share their thoughts and learnings. The application's front end uses React and Daisy UI, and is supported by a backend built with Express, Node, and MongoDB.",
//     imageUrl: BlogSiteImage,
//     deployedLink: "https://deployed.com/",
//     repoLink: "https://github.com/ChristianBega/Blog-Site",
//     technology: ["React", "MongoDB", "Tailwind", "Daisy UI", "Express", "Node", "MongoDb", "JWT", "Bcrypt"],
//     role: [
//       "Built project from scratch which included creating wire frames and database schemas which helped provided clarity and direction for the application.",
//       "Successfully setup express server connection and established a working communication with the MongoDB NoSQL database.",
//       "Constructed the backend GraphQL typeDefs & Resolvers and integrated them to the front end.",
//       "Confirmed the applications features were tested and identify and rectified any bugs and issues, ensuring a smooth user experience.",
//     ],
//     learnings: "",
//   }),
//   createProject({
//     title: "Golden Goose Finance",
//     projectTag: "full-stack",
//     description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
//     longDescription:
//       "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
//     imageUrl: FinancialTrackerImage,
//     deployedLink: "https://golden-goose-finance.herokuapp.com/",
//     repoLink: "https://github.com/ChristianBega/Golden-Goose-Finance",
//     technology: [
//       "React",
//       "Javascript",
//       "MongoDB",
//       "Express",
//       "Node",
//       "Material UI",
//       "Mongoose ODM",
//       "Bcrypt",
//       "JSON web tokens",
//       "GraphQL",
//       "GraphQL Apollo",
//     ],
//     role: [
//       "Assisted back-end development team by designing models, resolvers, and typeDefs for REST API.",
//       "Led the integration of the REST API to a React Js front-end utilizing GraphQL queries and mutations to perform CRUD operations.",
//       "Utilized GraphQL Apollo server & client to test and verify Rest API routes and appropriate end points are working as expected.",
//     ],
//     learnings: "",
//   }),
// ];

export const featuredProjectsData: CreateProjectProps[] = [
  createProject({
    title: "Almadelic",
    projectTag: "full-stack",
    // description: "A telehealth medicine startup offering patients virtual ketamine therapy treatments from the comfort of their home.",
    description:
      "A full-stack telehealth platform designed to make transformative, personalized ketamine therapy accessible, convenient, and effective—all from the comfort of your home.",
    longDescription: "  ",
    videoUrl: AlmadelicVideoMobile,

    deployedLink: "https://deployed.com/",
    repoLink: "https://github.com/ChristianBega/Blog-Site",
    technology: ["React", "MongoDB", "Tailwind", "Daisy UI", "Express", "Node", "MongoDb", "JWT", "Bcrypt"],
    role: [
      "Built project from scratch which included creating wire frames and database schemas which helped provided clarity and direction for the application.",
      "Successfully setup express server connection and established a working communication with the MongoDB NoSQL database.",
      "Constructed the backend GraphQL typeDefs & Resolvers and integrated them to the front end.",
      "Confirmed the applications features were tested and identify and rectified any bugs and issues, ensuring a smooth user experience.",
    ],
    learnings: "",
  }),
  createProject({
    title: "Overland Baseball",
    projectTag: "front-end",
    description: "A front-end single page application that allows players a coaches a convenient platform to access and browse team information.",
    longDescription:
      "Overland Baseball's website is a single page React application that provides its users a convenient way to access and browse different team information. The application is built with React and Material UI to provide a polished and functional front end. Additionally, the website features working forms using Email Js, image sliders, and timelines.",
    videoUrl: OverlandVideoMobile,

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
  }),
  createProject({
    title: "NextFlix (Movie App)",
    projectTag: "full-stack",
    description: "A MERN full stack finance tracking web application that allows users monitor their bills, savings, and expenses.",
    longDescription:
      "Golden Goose Finance is a full-stack MERN web application that provides users with an intuitive and user-friendly solution for tracking their finances. The application is built with MongoDB, Express, Node.js, React, and Material UI, allowing users to track their expenses, savings, and bills in an organized manner. Additionally, users can view their financial data through charts and graphs to gain insight into their financial habits.",
    videoUrl: NextFlixVideoMobile,

    deployedLink: "https://golden-goose-finance.herokuapp.com/",
    repoLink: "https://github.com/ChristianBega/Golden-Goose-Finance",
    technology: [
      "React",
      "Javascript",
      "MongoDB",
      "Express",
      "Node",
      "Material UI",
      "Mongoose ODM",
      "Bcrypt",
      "JSON web tokens",
      "GraphQL",
      "GraphQL Apollo",
    ],
    role: [
      "Assisted back-end development team by designing models, resolvers, and typeDefs for REST API.",
      "Led the integration of the REST API to a React Js front-end utilizing GraphQL queries and mutations to perform CRUD operations.",
      "Utilized GraphQL Apollo server & client to test and verify Rest API routes and appropriate end points are working as expected.",
    ],
    learnings: "",
  }),
];
