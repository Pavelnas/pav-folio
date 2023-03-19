import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../../../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Yogobe",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2021 - Present",
    points: [
      "Mentoring and leading the backend team.",
      "Leading in the technical decisions and architectures to provide high standards and code quality.",
      "Provisioning/maintaining infrastructure through AWS services such as EKS, ECR, RDS, IAM, ElasticSearch, SecretsManager, and S3 including automation using Terraform.",
      "Provisioning new services for logging, monitoring and metrics collection using ELK stack.",
      "Continuous development and delivery of new features using Ruby on Rails.",
      "Writing our own gems such as Graphql Hybrid Authenticator called (Graphise).",
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "WebOps",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2017 - July 2021",
    points: [
      "Admin Panel (Internal Tool), Planning and designing ReactJS project that provides an admin panel frontend for a certain API by just configuring JSON files.",
      "Developing middleware and components to be generic and can be configurable to support all kinds of configurations.",
      "GenOps (Internal Tool), Planning and designing a tool that works as a code generator based on configurations files for the backend using pure Ruby.",
      "Applying Reconcile design pattern in order to make our tool stateful so the tool itself can do more than just generate initial code.",
      "Developing/Integrating engines that help our tools such as Payments Engine and Authentication Engine.",
      "GS1-Egypt  -- gs1eg.org, Upgrading to the latest versions of Rails and Refactoring the legacy code to the highest standard and convention.",
      "Developing new features/services.",
      "Maintaining and migrating fully to Azure Cloud.",
      "Decoupling large monolithic apps into small domains/services.",
      "Transporter -- transporter-group.com, Analyzing business needs to transform it into technical solutions.",
      "Developing a high-end tailored geolocation service written from scratch to meet the business needs.",
      "Provisioning and maintaining a Kube cluster for staging/production to meet high availability.",
      "Reviewing architecture and code to meet standards.",
    ],
  },
  {
    title: "Jr Backend Engineer",
    company_name: "Aiesec EGYPT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Oct 2017 - July 2021",
    points: [
      "Created new multiple services for sales, human resources, and residence, Managing 200+ member and 1000+ student  that interact with."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
