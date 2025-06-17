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
  vue,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  raptor,
  starbucks,
  tesla,
  ali,
  goucui,
  yundao,
  shopify,
  carrent,
  jobit,
  feicui,
  spotPrice,
  raptorPlatform,
  mysql,
} from "../assets";

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
    title: "UniApp Developer",
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MySql",
    icon: mysql,
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
    title: "Full-stack Developer",
    company_name: "Allegis-BN",
    icon: ali,
    iconBg: "#383E56",
    date: "Mar 2024 - May 2024",
    points: [
      "Contributed to front-end features in RReaacctt, including real-time exchange rate display, enhancing the user experience.",
      "Implemented API endpoints in Nodde..js (Express) to retrieve and aggregate data from multiple microservices for front-end use.",
      "Maintained accurate API responses by identifying and resolving data inconsistencies in Java (Spring Boot).",
      "Wrote unit tests using Jest (React/Node.js) and JUnit (Java) to maintain code quality.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Lida",
    icon: raptor,
    iconBg: "#4866af",
    date: "Aug 2020 - Jul 2023",
    points: [
      "Led development from client meetings to successful deployment of customized solutions, improving customer satisfaction by 15% by using unit tests to ensure code quality.",
      "Enhanced platform speed and scalability, resulting in a 20% reduction in loading times and improved code maintainability through code optimization, Vue3.js upgrade, and the use of TypeScript and Hooks.",
      "Utilized JSON configuration for automated form generation,  and real-time updates, streamlining development and enhancing developing efficiency by 25%.",
      "Utilized React.js and Redux to create a successful diamond shopping mall project, meeting the expectations of our largest new client.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Goucui Technology Co., Ltd",
    icon: goucui,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Aug 2020",
    points: [
      "Making a responsive e-commerce shopping mini app,  resulting in a 10% user increase, by implementing modules like live streaming, WebSocket message, product purchase, poster drawing and sharing,  etc.",
      "Led a 4-member front-end team and provided guidance in problem-solving.",
      "Implemented and maintained a website with server-side rendering for improved 50% SEO performance.",
      "Leveraged Node.js and  PM2 to build middleware service, improving agility and data security.",
      "Worked with the app development team to create embedded HTML5 activity pages, with animation or lottery games, improving customer engagement and contributing a 15% increase to revenue growth.",
    ],
  },
  {
    title: "Junior Software developer",
    company_name: "Yundao Information Technology Co., Ltd",
    icon: yundao,
    iconBg: "#383E56",
    date: "Aug 2017 - Dec 2018",
    points: [
      "Participated in MySQL database form design and Java-based API interface development.",
      "Introduced and popularized a unit testing template, leading to a 40% reduction in software defects and a significant increase in work efficiency.",
      "Utilized technologies such as jQuery, JSP, and Bootstrap to integrate with back-end services, resulting in real-time data-driven updates to the website and an improved user experience.",
      "Consistently delivered tasks on time and with high quality, earning the 'Outstanding Employee' title twice.",
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
    name: "Spot Price",
    description:
      "Built with a microservices architecture, the platform designed to display real-time exchange rates and used by internal agents to place currency exchange orders.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "microservices",
        color: "blue-text-gradient",
      },
    ],
    image: spotPrice,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real Estate CRM",
    description:
      "Property Raptor is a real estate CRM platform that allows agents to manage listings and customer relationships, automate sales, run marketing campaigns,and analyze data with visual dashboards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "salesforce",
        color: "pink-text-gradient",
      },
    ],
    image: raptorPlatform,
    source_code_link: "https://github.com/",
  },
  {
    name: "Jewelry E-commerce",
    description:
      "A comprehensive trading platform with live-stream shopping room where hosts showcase jade jewelry in real time, customers place orders instantly, and in-app chat provides fast, personalized support.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "webpack",
        color: "blue-text-gradient",
      },
    ],
    image: feicui,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
