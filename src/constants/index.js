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
  cheetah,
  banglele,
  pmi,
  asana,
  erje
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

const workExperiences = [
  {
    id:1,
    company: 'PT Putra Mandiri Informatika',
    position: 'U/UX Designer',
    interval : 'Aug/21 - Present',
    responsibilities: [
      'Design and develop the Autopos POS application in the form of integrated mobile, dashboard, and QR orders.',
      'Conduct end-to-end tests on newly updated applications.',
      'Manage tasks in Asana, give and receive input from the team.',
      'Conduct tests on various Sunmi and Newland devices.',
      'Designing PT. Putra Mandiri Informatika website.',
      'Collaborate with the Developer team every week.',
      'Working on several other applications such as AMS device management, Ticketing Apps, Digital Payments.'
    ],
    logo:`${pmi}`,
    tools:[
      `${figma}`,
      `${affinity}`,
      `${affinityphoto}`,
      `${asana}`,
    ]
  },
  {
    id:2,
    company: 'PT Banglele Indonesia Maju',
    position: 'Graphic Designer',
    interval : 'Jan/21 - Aug/22',
    responsibilities: [
      'Design Instagram content needs such as feeds and reels.',
      'Design printing needs such as banners, posters, flyers, and brochures.',
      'Design presentation needs.',
      'Design business proposals and annual work reports.',
      'Designing a website using Figma, Figjam.',
      'Editing corporate video content with Davinci Resolve.',
      'Doing website development with WordPress and Elementor.'
    ],
    logo:`${banglele}`,
    tools:[
      `${figma}`,
      `${affinity}`,
      `${affinityphoto}`,
      `${davinci}`,
      `${elementor}`,
      `${wordpress}`
    ]
  },
  {
    id:3,
    company: 'Erje TV',
    position: 'Graphic Designer',
    interval : 'Mar/20 - Aug/22',
    responsibilities: [
      'Design Instagram content needs such as feeds and reels.',
      'Design printing needs such as banners, posters, flyers, brochures.',
      'Design presentation needs.',
      'Design business proposals and annual work reports.',
      'Designing a website using figma, figjam.',
      'Doing website development with WordPress and Elementor.',
    ],
    logo:`${erje}`,
    tools:[
      `${figma}`,
      `${affinity}`,
      `${affinityphoto}`,
      `${elementor}`,
      `${wordpress}`
    ]
  },
]

export { skillDesign, skills, skillsTwo, projects,workExperiences};
