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
  erje,
  slashtheoryimage1,
  slashtheoryimage2,
  slashtheoryimage3,
  slashtheoryimage4,
  slashtheoryimage5,
  cheetahimage1,
  cheetahimage2,
  cheetahimage3,
  cheetahimage4,
  cheetahimage5,
  cheetahimage6,
  cheetahimage7,
  cheetahimage8,
  autoposapps,
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
    link:'http://www.slashtheory.com',
    client: 'Slashtheory',
    summary: 'Slashtheory is an Indian company engaged in the digital design and IT industry. This company application development, as well as iOS and Android application development.',
    image: `${slashtheory}`,
    year: '2020',
    preview:{
      title:'Slashtheory, web design technology services from India.',
      description:'This project is the first development of the Slashtheory website. Slashtheory is an Indian company engaged in the digital design and IT industry. This company provides several services such as UI/UX design, full stack web application development, as well as iOS and Android application development. I got this project through the behance platform, then the client and I made more intense contact via WhatsApp. Initially the client asked me to design logos, business cards and infographics for his company, in the end the client also asked for UI/UX design services and development with WordPress.',
      image:`${slashtheoryimage1}`,
      caption:'Slashtheory Web Design',
      caption2:'Some of the initial conversations with clients on behance and then continued to WhatsApp.'
    },
    content:[
      {
        title:'Problem',
        description:'Slastheory is a new venture in the software development industry. They need a professional package service to create logos, create business cards, infographics, to UI/UX and development. While they are taking care of all the legality of new companies in India, they hope that this task can be done properly by professionals so as to save time. They were looking for professional services on behance until they finally made contact with my account.',
      },
      {
        title:'Users & Audiences',
        description:'The main purpose of this site is to provide company profile information and services offered by these companies, namely in the form of software design and development. So that users on this site are clients and prospective clients who just want to know information related to Slashtheory and the services it offers.',
      },
      {
        title:'Roles & Responsibilities',
        list:[
          'Project Manager. I discuss with clients, get feedback from them, create project summaries, create project timelines, etc.',
          'Designer. I am also the designer for this project, designing logos, business cards, infographics, and UI/UX.',
          'Developer. I am also a developer on this project.'
        ]
      },
      {
        title:'Scope and Constraints',
        description:'This is a web project created for the Slashtheory company so all processes need to be built from scratch sketches. The most important thing is that the clients already know about the structure of the web content, which they write and share with me via WhatsApp. So I developed the website structure from the information I received during the discussions. List of designs that I made during the project:',
        list:[
          'Logo design.',
          'Business cards.',
          'Infographics',
          'UI/UX'
        ],
        description2:'There is a list of pages for the UI/UX that I design, namely:',
        list2:[
          'Home page',
          'What we do page',
          'Contact page',
        ],
        description3:'As for the development process, I created a message sending feature directly to the Slashtheory admin email which can be accessed on the What we do page.'
      },
      {
        title:'Process',
        process:'Gathering requirements',
        description:'During the project, we did not even hold a video call to discuss needs, this was due to the busyness of the clients. All information was obtained through the WhatsApp group which contains 3 people, namely me and 2 clients. Clients explain the needs, flow and concept of web apps, and send asset links that I can access. Some of the notes obtained from the results of discussions in the WhatsApp group are:',
        list:[
          'Clients request a logo design with a logotype type with the brand colors magenta and cyan.',
          'Clients request a dark color tone for the background.',
          'The client requested a simple business card, with a dark background.',
          'The client requests to use a typewriter font as the heading in the hero section.',
          'The client requests that the website be developed with Elementor and a message sending feature is made to the admin email on the contact page.',
        ],
        process2:'Logo Design Process',
        description2:'The first stage in working on this project is the logo design stage. After I picked up a few discussion points from the WhatsApp group with the client, I concluded that the client wanted a logo in the form of a logotype with cyan and magenta tones. From the several concepts that I made, clients agreed on a futuristic logotype concept, with a slash on the letter "l" logo and a negative space slash on the letter "o" logo as well as a logotype style with firm angles and a truncated "s" style that strengthens futuristic impression. In this logotype concept, I also applied two color tones, namely magenta and cyan, to the two truncated letters "s". The sketch and final result of the agreed logo can be seen in the image below.',
        image2:`${slashtheoryimage2}`,
        caption2:'Some of the initial conversations with clients on behance and then continued to WhatsApp.',
        process3:'Sitemap',
        description3:`The initial action I took upon finalizing the deal was to develop a sitemap, providing a comprehensive overview of the website's sections. This sitemap serves as a valuable tool for assessing the project's scope and serves as my reference point during the page design phase. Once the sitemap was completed, I shared it with them for their approval before proceeding to the subsequent step, which involves creating wireframes.`,
        image3:`${slashtheoryimage3}`,
        caption3:'Sitemap',
        process4:'Website for Inspiration',
        description4:`I have discovered an inspiring design that perfectly aligns with my vision. I desire a website that exudes elegance through a dark color scheme, while maintaining a polished and minimalistic appearance. I would like to share with you the website that captured my interest.`,
        image4:`${slashtheoryimage4}`,
        caption4:'Inspirations Website',
        process5:'Define Design Colors',
        description5:`I skipped the wireframe phase and headed straight for the high fidelity mockup phase for some reason from the client. Before heading to the mockup, I did some research on what colors I should use, based on the company's branding. Also I compared it with similar sites.`,
        image5:`${slashtheoryimage5}`,
        caption5:'Colors',
        process6:'Mockup',
        description6:`In making this mockup phase, I didn't get many revisions, only a few layout and asset revisions. After getting approval, I did development on the design I had made using wordpress.`,
        image6:`${slashtheory}`,
        caption6:'Mockup',
      },
      {
        title:'Development',
        description:'I did development using wordpress and elementor within a week. You can see it directly on the link below:',
      },
    ]
  },
  {
    id:2,
    tipe:'WEBSITE',
    link:'https://muhsinin.erje.or.id/',
    year: '2020',
    client: 'Cheetah ERJE',
    summary: 'Cheetah is a special division of the Nadwah Islamiyah Foundation which was established to collect funds from all muhsinin who wish to donate.',
    image: `${cheetah}`,
    color: 'green-700',
    hover:'hoverGreen',
    shadowGreen: 'shadowGreen',
    stripText: 'bg-green-700',
    preview:{
      title:'Cheetah, Religious social Foundation web design for fundraising.',
      description:'This project is the first development of the Cheetah Erje landing page website. Cheetah is a special division of the Nadwah Islamiyah Foundation which was established specifically to collect funds from all muhsinin who wish to donate. The funds collected will be distributed to 4 activity clusters under the auspices of the Nadwah Islamiyah foundation, namely the Raudhatul Jannah Pekanbaru Mosque, the Baitussalam Mosque and Islamic Boarding School, the Tree of Merit, and the Tahfidz Akhawat House.',
      image:`${cheetahimage1}`,
      caption:'Cheetah Web Design',
      caption2:'One of the clusters (out of 4 clusters) of the Nadwah Islamiyah Foundation, namely the Raudhatul Jannah Islamic Center which was taken by drone'
    },
    content:[
      {
        title:'Problem',
        description:'Cheetah has been running offline for several months and many new donors and potential donors have complained about the lack of information about Cheetah Erje and the steps for registering. At the same time, Cheetah Erje also wanted to create digital advertisements to introduce the "Autodebet Muhsinin" program through Facebook Ads and Instagram Ads, so a site was needed as a redirect for the Ads which will be broadcast in the near future. For this reason, the Cheetah team came to the conclusion of creating a Landing Page in blue tones that has complete information regarding the "Autodebit Muhsinin" program.',
      },
      {
        title:'Users & Audiences',
        description:`As I mentioned above, the main purpose of this site is to provide information for donors and potential donors, and it is also used for digital advertising needs to introduce "Cheetah" and Erje Cheetah's "Autodebet Muhsinin" program. So users on this site are donors and potential donors.`,
        image2:`${cheetahimage2}`,
        caption2:'Users & Audiences'
      },
      {
        title:'Roles & Responsibilities',
        list:[
          'Project Manager. I discuss with clients, get donor feedback from them, make project summaries, make project timelines, etc.',
          'Designer. I am also the designer in this project.',
          'Developer. I am also a developer on this project.'
        ],
        description2:'In other words, this project is a personal project that is done alone.'
      },
      {
        title:'Scope and Constraints',
        description:'This is a website development project where a website is created from scratch. The Cheetah Erje team does not have a draft of the website content structure, does not collect assets, and I create the structure and design from scratch, so it requires more time and more intense discussion regarding the content structure. I also have to wait to get the latest photo assets from the ongoing activity cluster. So I developed the website structure from the information I received during the discussion. Luckily I got illustrations from friends in the illustrator community in Indonesia. The section list that I designed is:',
        list:[
          'Above the fold section',
          'About us section',
          'Introduction to the program section',
          'Documentation section',
          'Form section'
        ],
        description2:'And the features that I developed are :',
        list2:[
          'Send data from the form that has been filled in on the website to the Cheetah Erje admin email for follow-up.',
          'Create an "Above the fold" video background.',
        ],
      },
      {
        title:'Process',
        process:'Gathering requirements',
        description:'Since my client and I are in the same city, Pekanbaru, we decided to start the project by meeting at a Cheetah Erje office. Talk about the problem, objectives, scope and budget. These are the notes I took after the meeting :',
        list:[
          'They want a clean, uncluttered UI that is easy to read and navigate',
          'Blue is the primary color and white is the background',
          'Key words of design inspiration: design donation, design foundation, autodebit.',
        ],
        image:`${cheetahimage3}`,
        caption: 'Meeting Cheetah Erje',

        process2:'Sitemap',
        description2:`The first step I took when we had a deal was to create a sitemap so that everyone could see the overall structure of the website's sections. This sitemap is very useful to see how big it is in scope and also as my guide when designing pages. When the sitemap was complete, I sent it to them for approval before moving on to the next step, the wireframe.`,

        process3:'Website for Inspiration',
        description3:`I don't get inspiration from clients so all my inspiration is looking for myself for the look and feel. The inspiration I'm looking for is a website that uses a white background, is clean, and uses the main color blue. And this is the website I found.`,
        image3:`${cheetahimage4}`,
        caption3:'Sitemap',

        process4:'Wireframe',
        description4:`Wireframe Once the sitemap is approved, I move on to the wireframe process. In this wireframe, I'm using the content as well as the layout I'm proposing to present, so they know what the page is going to look like. I find this wireframe process very important so both me and the client can focus on the content first. They agreed with most of the above pages, with some minor revisions. The first is the hero section, initially I explained to put an image in the background in this section, but they want one of their activity clusters to be displayed in the form of a video as a background. They also wanted the induction section to use illustrations instead of pictures.`,
        image4:`${cheetahimage5}`,
        caption4:'Wireframe',

        process5:'Define Design Colors',
        description5:`Before heading to the mockup, I did some research on what colors I should use, based on what branding and company. Also I compared it with similar websites.`,
        image5:`${cheetahimage6}`,
        caption5:'Colors',

        process6:'Mockup',
        description6:`After some feedback about the wireframes in the figma files and their approval, I moved on to the mockup phase. I ended up using most of the layouts from wireframes which means they agreed with my design proposal. Fill in the images, create some design elements to emphasize the site's meaning, add color, and enhance the layout.`,
        image6:`${cheetahimage7}`,
        caption6:'Mockup',
      },
      {
        title:'Result',
        description:'With some feedback and revisions, the design was finally completed. Then the next stage is the development process.',
        image:`${cheetah}`,
        caption:'Mockup',
      },
      {
        title:'Development',
        description:'There are several features that are worked on at this stage, namely:',
        list: [
          'Create a video background in the hero section.',
          'Create a form feature that will send data directly to the Cheetah Erje admin email'
        ],
        image:`${cheetahimage8}`,
        caption:'Form after developing',
        description2:'This process takes 3 days of development until the site is ready to go and now you can see it in action.'
      },
  ]
  },
  {
    id:3,
    tipe:'MOBILE APPS',
    client: 'PT Putra Mandiri Informatika',
    summary: 'Building the UI/UX of the POS application, one of 3 Autopos integrated applications. To make it easier for cashiers to manage products and payments.',
    image: `${autoposapps}`,
    color: 'blue-700',
    hover:'hoverBlue',
    shadowBlue: 'shadowBlue',
    stripText: 'bg-blue-700'
  },
  {
    id:4,
    tipe:'Autopos Apps',
    client: 'Putra Mandiri Informatika',
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
