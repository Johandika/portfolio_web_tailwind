import {
  css,
  js,
  bootstrap,
  dbeaver,
  expressjs,
  html,
  nextjs,
  nodejs,
  postgre,
  postman,
  reactjs,
  redux,
  tailwind,
  typescript,
  affinity,
  affinityphoto,
  figma,
  elementor,
  davinci,
  fontcreator,
  wordpress,
  slashtheory,
  cheetah
} from "../assets/images/index.js";

const skills = [
  {
    logo: `${css}`,
    name: "CSS",
  },
  {
    logo: `${js}`,
    name: "Javascript",
  },
  {
    logo: `${html}`,
    name: "HTML",
  },
  {
    logo: `${reactjs}`,
    name: "ReactJS",
  },
  {
    logo: `${nextjs}`,
    name: "Nextjs",
  },
  {
    logo: `${nodejs}`,
    name: "Nodejs",
  },
  {
    logo: `${expressjs}`,
    name: "ExpressJS",
  },
];

const skillsTwo = [
  {
    logo: `${bootstrap}`,
    name: "Bootstrap",
  },
  {
    logo: `${dbeaver}`,
    name: "Dbeaver",
  },
  {
    logo: `${postman}`,
    name: "Postman",
  },
  {
    logo: `${postgre}`,
    name: "Postgre",
  },
  {
    logo: `${redux}`,
    name: "Redux",
  },
  {
    logo: `${tailwind}`,
    name: "Tailwind",
  },
  {
    logo: `${typescript}`,
    name: "Typescript",
  },
];

const skillDesign = [
  {
    logo: `${affinity}`,
    name: "Affinity Designer",
  },
  {
    logo: `${fontcreator}`,
    name: "Font Creator",
  },
  {
    logo: `${affinityphoto}`,
    name: "Affinity Photo",
  },
  {
    logo: `${elementor}`,
    name: "Elementor",
  },
  {
    logo: `${davinci}`,
    name: "Davinci Resolve",
  },
  {
    logo: `${wordpress}`,
    name: "Wordpress",
  },
  {
    logo: `${figma}`,
    name: "Figma",
  },
];

const projects = [
  {
    id:1,
    tipe:'WEBSITE',
    client: 'Slashtheory',
    summary: 'Slashtheory is an Indian company engaged in the digital design and IT industry. This company application development, as well as iOS and Android application development.',
    image: `${slashtheory}`,
  },
  {
    id:2,
    tipe:'WEBSITE',
    client: 'Cheetah ERJE',
    summary: 'Cheetah is a special division of the Nadwah Islamiyah Foundation which was established to collect funds from all muhsinin who wish to donate.',
    image: `${cheetah}`,
    color: 'green-700',
    hover:'hoverGreen',
    shadowGreen: 'shadowGreen',
    stripText: 'bg-green-700'

  },
  {
    id:3,
    tipe:'WEBSITE',
    client: 'PMI Corp.',
    summary: 'PT. Putra Mandiri Informatika was founded in 2017 and focuses on distributing hardware such as cash registers and payment instruments (EDC).',
    image: `${cheetah}`,
    color: 'blue-700',
    hover:'hoverBlue',
    shadowBlue: 'shadowBlue',
    stripText: 'bg-blue-700'
  }
]

export { skillDesign, skills, skillsTwo, projects };
