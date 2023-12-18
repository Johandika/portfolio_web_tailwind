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
  autoposapps2,
  autoposapps3,
  autoposapps4,
  autoposapps5,
  autoposapps6,
  autoposapps7,
  pmiweb,
  pmiweb1,
  pmiweb2,
  pmiweb3,
  pmiweb4,
  pmiweb5,
  ccarrot,
  allencio,
  aveshome,
  babycall,
  bearsoldier,
  bitpostal,
  bulloff,
  catlove,
  coatofarms,
  ddiving,
  dogresque,
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
    id: 1,
    tipe: "MOBILE APPS",
    link: "https://www.autopos.id/",
    client: "Autopos Apps",
    summary:
      "Building the UI/UX of the POS application, one of 3 Autopos integrated applications. To make it easier for cashiers to manage products and payments.",
    image: `${autoposapps}`,
    year: "2023",
    preview: {
      title: "Autopos apps, integrated sales management mobile application.",
      description:
        "Autopos Apps is one of 3 Autopos applications that are integrated with each other, the Autopos mobile application helps business owners to carry out sales management. This application will later be used on the waiter/cashier side to help carry out transactions from the customer to the waiter/cashier. Apart from that, this application can accept online orders, shift changes, order history, customer list management, ongoing transaction management.",
      image: `${autoposapps2}`,
      caption: "Autopos apps preview",
      caption2: "Autopos application is available on Playstore",
    },
    content: [
      {
        title: "Problem",
        description:
          "In the process of creating 3 integrated Autopos applications (CMS, mobile apps, QR Tablet Order) an application is needed as a bridge that connects the data side on the CMS side with the client, therefore an Autopos mobile application was created with the features needed to interact with the client such as ordering features, transactions, transaction history, Void, changing shifts, online ordering, etc. which directly connect clients (in this case, namely business actors such as cashiers/waiters/business owners) with customers.",
      },
      {
        title: "Users & Audiences",
        description: `Users of this application are business people who need a complete sales data management system. Which will make it easier for users to track sales information, product management, stock management, payment management, employee shift settings, etc. With this application, it is hoped that all business recording and monitoring can be seen in an integrated application system, namely Autopos.`,
      },
      {
        title: "Roles & Responsibilities",
        list: [
          "UI/UX designer, I was responsible as a UI/UX designer who carried out the development of the mobile application design from start to finish. Carrying out design communication with developers.",
          "Tester. I am also did end to end test in this project.",
        ],
        description2: `The design that has been created is submitted to the development team via Asana. And every Friday there will be a meeting to discuss the week's progress and results.`,
      },
      {
        title: "Scope and Constraints",
        description: "Scope :",
        list: [
          `Core Features of the Application: The Autopos application has several core features that include sales management, acceptance of online orders, shift changes, order history, customer list management, and ongoing transaction management. These are the primary features to be implemented in the application.',
          'Integration with the Autopos Ecosystem: This application must be fully integrated with other applications within the Autopos ecosystem, including the Content Management System (CMS) and QR Tablet Order. This will enable smooth data exchange between all components of this ecosystem.`,
          "UI/UX Design: One of my primary responsibilities as a UI/UX designer is to ensure that the user interface (UI) and user experience (UX) design of the application align with user needs. This includes designing user-friendly layouts, navigation, and interactions.",
          "Testing and Quality Assurance: In addition to design, you also have a role as a tester to ensure that the application functions properly and is free from bugs or issues. End-to-end testing will be conducted to check all app features.",
        ],
        description2: "Constraints:",
        list2: [
          "Time: The development of Autopos Apps must adhere to the set deadline, which can limit the amount of time available for designing, developing, and testing the application.",
          "Device Compatibility: The application must perform well on various mobile devices, including smartphones and tablets. This could be a constraint if there are differences in device specifications used by users.",
          `Data Quality: The accuracy and quality of the data used in the application are critical constraints. Inaccurate or incomplete data can disrupt the application's functionality.`,
          "Security: Security of transactions and customer data must be tightly maintained. This includes protection against cyber threats and potential data breaches.",
        ],
      },
      {
        title: "Process",
        process: "Product Knowledge",
        description: `In the initial stage of developing the Autopos Apps project, the first step I took was to gain a strong understanding of the product. This involved interviews with the client, Autopos Apps, to grasp the project's goals, vision, and mission. I also studied the previous applications within the Autopos ecosystem to understand how they interacted with each other. Additionally, I researched the sales management industry to comprehend relevant user trends and needs.`,

        process2: "Sitemap",
        description2: `Once the product understanding was established, the next step was to create a sitemap. A sitemap is a visual representation of the application's structure, encompassing various pages and how they are interconnected. This aids us in organizing information and navigation within the application effectively. The sitemap also enables me and the development team to have a clear overview of how the application will be structured.`,

        process3: "Apps for Inspiration",
        description3: `In an effort to gather further ideas and inspiration for the design of Autopos Apps, I also observed and analyzed various related websites that might have design elements or features relevant to the project. This step helps in identifying the latest design trends and keeping the application relevant in the competitive market.`,
        image3: `${autoposapps5}`,
        caption3: "Inspiration from ESB, iSeller and Qbiz Apps",

        process4: "Design System",
        description4: `Once wireframes have been approved, we initiate the development of the design system. The design system is a guideline that encompasses design elements like colors, fonts, icons, and UI components that will be consistently used throughout the application. It creates visual consistency and provides a strong brand identity for Autopos Apps. Moreover, the design system ensures that the user interface will look and function well on various devices.`,
        image4: `${autoposapps4}`,
        caption4: "Design System & Assets",

        process5: "Mockup",
        description5: `After the design system has been established, I begin creating mockups, which are the final visual designs of the application. Mockups are comprehensive representations of the user interface, including design elements, illustrations, and images. This is the stage where I apply all the design system elements into the final design of the application. Mockups also encompass aspects such as animations, interactions, and responsiveness that bring the application to life.`,
        image5: `${autoposapps6}`,
        caption5: "Some parts of the mockup",

        process6: "Test",
        description6: `In the testing process of Autopos Apps following its launch on the Playstore, I conducted tests that encompassed various different devices. This included testing on Sunmi and Newland terminals, commonly used in retail businesses, as well as testing on tablet displays. The goal was to ensure that the application functions effectively across diverse devices, including different hardware and screen sizes. During testing, I examined the application's performance, functionality, user interface responsiveness, as well as potential issues or inconsistencies. The result is a confidence that Autopos Apps can be accessed and used smoothly on various devices, supporting our vision to provide sophisticated and user-friendly sales management tools to business owners.`,
        image6: `${autoposapps7}`,
        caption6: "Testing on Sunmi POS Terminal",
      },
      {
        title: "Result",
        description:
          "The mobile Autopos application has been launched and is available for download through the Playstore platform. The launch process involved hard work from the entire team, from planning to development, and ultimately monitoring the application in a production environment. Users can now easily access the application through their devices. We are proud to announce that Autopos Apps has received a 4.7-star rating on Playstore. This is a positive indication of the initial user response to the application. We greatly appreciate the support and feedback from users who have given high ratings and positive reviews, motivating us to continually improve and update the application.",
        image: `${autoposapps3}`,
        caption: "Playstore Autopost",
      },
    ],
  },
  {
    id: 2,
    tipe: "WEBSITE",
    link: "http://www.slashtheory.com",
    client: "Slashtheory",
    summary:
      "Slashtheory is an Indian company engaged in the digital design and IT industry. This company application development, as well as iOS and Android application development.",
    image: `${slashtheory}`,
    year: "2020",
    preview: {
      title: "Slashtheory, web design technology services from India.",
      description:
        "This project is the first development of the Slashtheory website. Slashtheory is an Indian company engaged in the digital design and IT industry. This company provides several services such as UI/UX design, full stack web application development, as well as iOS and Android application development. I got this project through the behance platform, then the client and I made more intense contact via WhatsApp. Initially the client asked me to design logos, business cards and infographics for his company, in the end the client also asked for UI/UX design services and development with WordPress",
      image: `${slashtheoryimage1}`,
      caption: "Slashtheory Web Design",
      caption2:
        "Some of the initial conversations with clients on behance and then continued to WhatsApp.",
    },
    content: [
      {
        title: "Problem",
        description:
          "Slastheory is a new venture in the software development industry. They need a professional package service to create logos, create business cards, infographics, to UI/UX and development. While they are taking care of all the legality of new companies in India, they hope that this task can be done properly by professionals so as to save time. They were looking for professional services on behance until they finally made contact with my account.",
      },
      {
        title: "Users & Audiences",
        description:
          "The main purpose of this site is to provide company profile information and services offered by these companies, namely in the form of software design and development. So that users on this site are clients and prospective clients who just want to know information related to Slashtheory and the services it offers.",
      },
      {
        title: "Roles & Responsibilities",
        list: [
          "Project Manager. I discuss with clients, get feedback from them, create project summaries, create project timelines, etc.",
          "Designer. I am also the designer for this project, designing logos, business cards, infographics, and UI/UX.",
          "Developer. I am also a developer on this project.",
        ],
      },
      {
        title: "Scope and Constraints",
        description:
          "This is a web project created for the Slashtheory company so all processes need to be built from scratch sketches. The most important thing is that the clients already know about the structure of the web content, which they write and share with me via WhatsApp. So I developed the website structure from the information I received during the discussions. List of designs that I made during the project:",
        list: ["Logo design.", "Business cards.", "Infographics", "UI/UX"],
        description2:
          "There is a list of pages for the UI/UX that I design, namely:",
        list2: ["Home page", "What we do page", "Contact page"],
        description3:
          "As for the development process, I created a message sending feature directly to the Slashtheory admin email which can be accessed on the What we do page.",
      },
      {
        title: "Process",
        process: "Gathering requirements",
        description:
          "During the project, we did not even hold a video call to discuss needs, this was due to the busyness of the clients. All information was obtained through the WhatsApp group which contains 3 people, namely me and 2 clients. Clients explain the needs, flow and concept of web apps, and send asset links that I can access. Some of the notes obtained from the results of discussions in the WhatsApp group are:",
        list: [
          "Clients request a logo design with a logotype type with the brand colors magenta and cyan.",
          "Clients request a dark color tone for the background.",
          "The client requested a simple business card, with a dark background.",
          "The client requests to use a typewriter font as the heading in the hero section.",
          "The client requests that the website be developed with Elementor and a message sending feature is made to the admin email on the contact page.",
        ],
        process2: "Logo Design Process",
        description2:
          'The first stage in working on this project is the logo design stage. After I picked up a few discussion points from the WhatsApp group with the client, I concluded that the client wanted a logo in the form of a logotype with cyan and magenta tones. From the several concepts that I made, clients agreed on a futuristic logotype concept, with a slash on the letter "l" logo and a negative space slash on the letter "o" logo as well as a logotype style with firm angles and a truncated "s" style that strengthens futuristic impression. In this logotype concept, I also applied two color tones, namely magenta and cyan, to the two truncated letters "s". The sketch and final result of the agreed logo can be seen in the image below.',
        image2: `${slashtheoryimage2}`,
        caption2:
          "Some of the initial conversations with clients on behance and then continued to WhatsApp.",
        process3: "Sitemap",
        description3: `The initial action I took upon finalizing the deal was to develop a sitemap, providing a comprehensive overview of the website's sections. This sitemap serves as a valuable tool for assessing the project's scope and serves as my reference point during the page design phase. Once the sitemap was completed, I shared it with them for their approval before proceeding to the subsequent step, which involves creating wireframes.`,
        image3: `${slashtheoryimage3}`,
        caption3: "Sitemap",
        process4: "Website for Inspiration",
        description4: `I have discovered an inspiring design that perfectly aligns with my vision. I desire a website that exudes elegance through a dark color scheme, while maintaining a polished and minimalistic appearance. I would like to share with you the website that captured my interest.`,
        image4: `${slashtheoryimage4}`,
        caption4: "Inspirations Website",
        process5: "Define Design Colors",
        description5: `I skipped the wireframe phase and headed straight for the high fidelity mockup phase for some reason from the client. Before heading to the mockup, I did some research on what colors I should use, based on the company's branding. Also I compared it with similar sites.`,
        image5: `${slashtheoryimage5}`,
        caption5: "Colors",
        process6: "Mockup",
        description6: `In making this mockup phase, I didn't get many revisions, only a few layout and asset revisions. After getting approval, I did development on the design I had made using wordpress.`,
        image6: `${slashtheory}`,
        caption6: "Mockup",
      },
      {
        title: "Development",
        description:
          "I did development using wordpress and elementor within a week. You can see it directly on the link below:",
      },
    ],
  },
  {
    id: 3,
    tipe: "WEBSITE",
    link: "https://www.pmicorp.id/",
    client: "PT Putra Mandiri Informatika",
    summary:
      "PT. Putra Mandiri Informatika focuses on distributing hardware such as cash registers and payment instruments (EDC).",
    image: `${pmiweb}`,
    year: "2023",
    preview: {
      title: "Company website, PT Putra Mandiri Informatika ",
      description: `PT. Putra Mandiri Informatika is a distributor of Point of Sales devices and products, providing operational solutions for business development through IoT. In 2023, I have the opportunity to redesign the company's website with a fresh and modern look, including a mobile-friendly design. The website will consist of a total of 34 pages, available in two versions: blue and orange. Most of the pages will showcase products for sale, including sales tools like POS machines.`,
      image: `${pmiweb1}`,
      caption: "PT Putra Mandiri Informatika (PMI) Website",
      caption2: "Two design themes with a touch of orange and blue.",
    },
    content: [
      {
        title: "Problem",
        description:
          "PT. Putra Mandiri Informatika, which has been established since 2017 in Cengkareng, Jakarta, Indonesia, has been steadily growing with increasing hardware sales each year, covering shipments to all regions of Indonesia. To honor our loyal customers and make it easier for them to access PMI product information, a redesign of the PMI website is needed, as it was still relatively simple at that time. As a UI/UX Designer, I was tasked with the job of redesigning this website.",
        image: `${pmiweb2}`,
      },
      {
        title: "Users & Audiences",
        description: `It is crucial to identify the various user groups and audiences who will interact with the website. These users and audiences can be categorized as follows:`,
        list: [
          "Customers: PT. Putra Mandiri Informatika serves a diverse range of customers, including businesses and individuals who are looking for Point of Sales devices and related hardware. These customers may have different needs, such as browsing products, obtaining pricing information, or contacting customer support.",
          `Business Owners: Small to large business owners who are interested in upgrading their POS systems or purchasing EDC devices for their establishments. They seek information on the reliability and suitability of PMI's products for their specific business needs.`,
          `IT Professionals: IT specialists responsible for selecting and implementing hardware solutions within their organizations. They require detailed technical information, specifications, and compatibility details for seamless integration.`,
          `Potential Partners: Companies or individuals interested in partnering with PT. Putra Mandiri Informatika for distribution or collaboration. They need to access relevant business-related information and contact details.`,
          `General Visitors: Individuals who may stumble upon the website out of curiosity or by chance. They may not have specific intentions but should find the website user-friendly and informative.`,
          `Existing Customers: The website should also cater to existing customers who may seek support, updates, or additional products.`,
        ],
        description2: `Understanding these diverse user groups and their specific needs is essential to ensure that the redesigned website effectively addresses their requirements and provides a positive user experience.`,
      },
      {
        title: "Roles & Responsibilities",
        description: `In the PT. Putra Mandiri Informatika website redesign project, roles and responsibilities need to be clearly defined to ensure the smoothness and success of the project. Here is a breakdown of the key roles and responsibilities involved in this project:`,
        list: [
          "UI/UX Designer (Myself): Responsible for directing the design of a responsive and engaging user interface and experience. This involves determining the navigation structure, color choices, and other visual aspects that will meet the diverse user needs.",
          `Web Development Team: The web development team will be responsible for implementing the designed features. They must ensure that the website functions properly, is responsive, and compatible with various devices and browsers.`,
          `Content Team: The content team will manage the content to be displayed on the website. This includes generating and editing text, images, and other multimedia content required for product information, customer support, and other communications.`,
          `Project Management Team: Responsible for coordinating all aspects of the project, overseeing the schedule, budget, and risks. They will ensure that the project proceeds according to the plan and achieves the established goals.`,
          `Stakeholders and Relevant Parties: Stakeholders and relevant parties, including company management and other departments involved in the project, will provide input, approval, and necessary guidance throughout all project stages.`,
        ],
        description2: `The importance of a clear understanding of the roles and responsibilities of each party is to ensure that the project runs smoothly and efficiently. With good collaboration among all parties involved, it is expected that this website redesign project will be successful and meet the expectations of customers and users.`,
      },
      {
        title: "Scope and Constraints",
        description: "Scope :",
        description2: `The scope of this project encompasses the complete redesign of PT. Putra Mandiri Informatika's website. This includes reimagining the user interface and experience to create an engaging and user-friendly platform. The website will consist of approximately 34 pages, available in two color variations: blue and orange. It will showcase the company's products, particularly sales tools like POS machines, and provide essential information for various user groups.

        The scope also involves ensuring the website is responsive and compatible with various devices and browsers. It will be designed with a mobile-friendly layout to cater to users accessing the site from smartphones and tablets.`,
        description3: "Constraints:",
        list3: [
          "Time Constraints: The project has a set timeline, and adherence to it is crucial to meet the desired launch date.",
          `Technical Constraints: The website's redesign must work within the existing technical infrastructure and limitations.`,
          `Content Constraints: Content creation and management are subject to resource availability and timelines.`,
          "Compatibility Constraints: Ensuring compatibility with a wide range of devices and browsers may pose challenges.",
          `Approval Constraints: The project's progress and design choices will require approval from stakeholders and relevant parties.`,
        ],
        description4: `Navigating these constraints effectively is essential to deliver a successful website redesign project that meets the company's objectives and user expectations.`,
      },
      {
        title: "Process",
        process: "Product Knowledge",
        description: `In this phase, I communicate with stakeholders and the company's asset designers to gather information about the style and layout preferences, as well as the content that will be displayed on each page. This is the initial step in designing the website.`,

        process2: "Sitemap",
        description2: `After the initial ideas are formed, the next step is to design the sitemap. This is the overall structure of how pages will be interconnected and organized within the website.`,

        process3: "Wireframe",
        description3: `A wireframe is the initial step in designing the user interface. It is a basic, non-visual representation that outlines the page layout and key elements.`,
        image3: `${pmiweb3}`,
        caption3: "Preview of some of the wireframes that have been created",

        process4: "Design Inspiration",
        description4: `At this stage, the team will seek design inspiration from external sources, such as other websites, current design trends, and other creative ideas that can enrich the final design.`,
        image4: `${pmiweb4}`,
        caption4: "The design inspiration being used",

        process5: "Design System",
        description5: `A design system is a guideline that details design elements such as colors, typography, icons, and other components that will be used throughout the website. It creates consistency in the overall look and feel of the website`,

        process6: "Mockup",
        description6: `A mockup is a complete visual representation of the final website design. It includes all design elements, colors, and layouts that users will see.`,
        image6: `${pmiweb5}`,
        caption6: "Mockup with a blue tone and an orange tone",
      },
      {
        title: "Result",
        description:
          "In the end, the deployed design is the one with a blue tone. PT Putra Mandiri Informatika's company profile can now be accessed through the link below.",
        image: `${pmiweb}`,
        caption: "PT Putra Mandiri Informatika Website",
      },
    ],
  },
  {
    id: 4,
    tipe: "WEBSITE",
    link: "https://muhsinin.erje.or.id/",
    year: "2020",
    client: "Cheetah ERJE",
    summary:
      "Cheetah is a special division of the Nadwah Islamiyah Foundation which was established to collect funds from all muhsinin who wish to donate.",
    image: `${cheetah}`,
    preview: {
      title: "Cheetah, religious social foundation web design for fundraising.",
      description:
        "This project is the first development of the Cheetah Erje landing page website. Cheetah is a special division of the Nadwah Islamiyah Foundation which was established specifically to collect funds from all muhsinin who wish to donate. The funds collected will be distributed to 4 activity clusters under the auspices of the Nadwah Islamiyah foundation, namely the Raudhatul Jannah Pekanbaru Mosque, the Baitussalam Mosque and Islamic Boarding School, the Tree of Merit, and the Tahfidz Akhawat House.",
      image: `${cheetahimage1}`,
      caption: "Cheetah Web Design",
      caption2:
        "One of the clusters (out of 4 clusters) of the Nadwah Islamiyah Foundation, namely the Raudhatul Jannah Islamic Center which was taken by drone",
    },
    content: [
      {
        title: "Problem",
        description:
          'Cheetah has been running offline for several months and many new donors and potential donors have complained about the lack of information about Cheetah Erje and the steps for registering. At the same time, Cheetah Erje also wanted to create digital advertisements to introduce the "Autodebet Muhsinin" program through Facebook Ads and Instagram Ads, so a site was needed as a redirect for the Ads which will be broadcast in the near future. For this reason, the Cheetah team came to the conclusion of creating a Landing Page in blue tones that has complete information regarding the "Autodebit Muhsinin" program.',
      },
      {
        title: "Users & Audiences",
        description: `As I mentioned above, the main purpose of this site is to provide information for donors and potential donors, and it is also used for digital advertising needs to introduce "Cheetah" and Erje Cheetah's "Autodebet Muhsinin" program. So users on this site are donors and potential donors.`,
        image2: `${cheetahimage2}`,
        caption2: "Users & Audiences",
      },
      {
        title: "Roles & Responsibilities",
        list: [
          "Project Manager. I discuss with clients, get donor feedback from them, make project summaries, make project timelines, etc.",
          "Designer. I am also the designer in this project.",
          "Developer. I am also a developer on this project.",
        ],
        description2:
          "In other words, this project is a personal project that is done alone.",
      },
      {
        title: "Scope and Constraints",
        description:
          "This is a website development project where a website is created from scratch. The Cheetah Erje team does not have a draft of the website content structure, does not collect assets, and I create the structure and design from scratch, so it requires more time and more intense discussion regarding the content structure. I also have to wait to get the latest photo assets from the ongoing activity cluster. So I developed the website structure from the information I received during the discussion. Luckily I got illustrations from friends in the illustrator community in Indonesia. The section list that I designed is:",
        list: [
          "Above the fold section",
          "About us section",
          "Introduction to the program section",
          "Documentation section",
          "Form section",
        ],
        description2: "And the features that I developed are :",
        list2: [
          "Send data from the form that has been filled in on the website to the Cheetah Erje admin email for follow-up.",
          'Create an "Above the fold" video background.',
        ],
      },
      {
        title: "Process",
        process: "Gathering requirements",
        description:
          "Since my client and I are in the same city, Pekanbaru, we decided to start the project by meeting at a Cheetah Erje office. Talk about the problem, objectives, scope and budget. These are the notes I took after the meeting :",
        list: [
          "They want a clean, uncluttered UI that is easy to read and navigate",
          "Blue is the primary color and white is the background",
          "Key words of design inspiration: design donation, design foundation, autodebit.",
        ],
        image: `${cheetahimage3}`,
        caption: "Meeting Cheetah Erje",

        process2: "Sitemap",
        description2: `The first step I took when we had a deal was to create a sitemap so that everyone could see the overall structure of the website's sections. This sitemap is very useful to see how big it is in scope and also as my guide when designing pages. When the sitemap was complete, I sent it to them for approval before moving on to the next step, the wireframe.`,

        process3: "Website for Inspiration",
        description3: `I don't get inspiration from clients so all my inspiration is looking for myself for the look and feel. The inspiration I'm looking for is a website that uses a white background, is clean, and uses the main color blue. And this is the website I found.`,
        image3: `${cheetahimage4}`,
        caption3: "Sitemap",

        process4: "Wireframe",
        description4: `Wireframe Once the sitemap is approved, I move on to the wireframe process. In this wireframe, I'm using the content as well as the layout I'm proposing to present, so they know what the page is going to look like. I find this wireframe process very important so both me and the client can focus on the content first. They agreed with most of the above pages, with some minor revisions. The first is the hero section, initially I explained to put an image in the background in this section, but they want one of their activity clusters to be displayed in the form of a video as a background. They also wanted the induction section to use illustrations instead of pictures.`,
        image4: `${cheetahimage5}`,
        caption4: "Wireframe",

        process5: "Define Design Colors",
        description5: `Before heading to the mockup, I did some research on what colors I should use, based on what branding and company. Also I compared it with similar websites.`,
        image5: `${cheetahimage6}`,
        caption5: "Colors",

        process6: "Mockup",
        description6: `After some feedback about the wireframes in the figma files and their approval, I moved on to the mockup phase. I ended up using most of the layouts from wireframes which means they agreed with my design proposal. Fill in the images, create some design elements to emphasize the site's meaning, add color, and enhance the layout.`,
        image6: `${cheetahimage7}`,
        caption6: "Mockup",
      },
      {
        title: "Result",
        description:
          "With some feedback and revisions, the design was finally completed. Then the next stage is the development process.",
        image: `${cheetah}`,
        caption: "Mockup",
      },
      {
        title: "Development",
        description:
          "There are several features that are worked on at this stage, namely:",
        list: [
          "Create a video background in the hero section.",
          "Create a form feature that will send data directly to the Cheetah Erje admin email",
        ],
        image: `${cheetahimage8}`,
        caption: "Form after developing",
        description2:
          "This process takes 3 days of development until the site is ready to go and now you can see it in action.",
      },
    ],
  },
];

const workExperiences = [
  {
    id: 1,
    company: "PT Putra Mandiri Informatika",
    position: "U/UX Designer",
    interval: "Aug/21 - Present",
    responsibilities: [
      "Design and develop the Autopos POS application in the form of integrated mobile, dashboard, and QR orders.",
      "Conduct end-to-end tests on newly updated applications.",
      "Manage tasks in Asana, give and receive input from the team.",
      "Conduct tests on various Sunmi and Newland devices.",
      "Designing PT. Putra Mandiri Informatika website.",
      "Collaborate with the Developer team every week.",
      "Working on several other applications such as AMS device management, Ticketing Apps, Digital Payments.",
    ],
    logo: `${pmi}`,
    tools: [`${figma}`, `${affinity}`, `${affinityphoto}`, `${asana}`],
  },
  {
    id: 2,
    company: "PT Banglele Indonesia Maju",
    position: "Graphic Designer",
    interval: "Jan/21 - Aug/22",
    responsibilities: [
      "Design Instagram content needs such as feeds and reels.",
      "Design printing needs such as banners, posters, flyers, and brochures.",
      "Design presentation needs.",
      "Design business proposals and annual work reports.",
      "Designing a website using Figma, Figjam.",
      "Editing corporate video content with Davinci Resolve.",
      "Doing website development with WordPress and Elementor.",
    ],
    logo: `${banglele}`,
    tools: [
      `${figma}`,
      `${affinity}`,
      `${affinityphoto}`,
      `${davinci}`,
      `${elementor}`,
      `${wordpress}`,
    ],
  },
  {
    id: 3,
    company: "Erje TV",
    position: "Graphic Designer",
    interval: "Mar/20 - Aug/22",
    responsibilities: [
      "Design Instagram content needs such as feeds and reels.",
      "Design printing needs such as banners, posters, flyers, brochures.",
      "Design presentation needs.",
      "Design business proposals and annual work reports.",
      "Designing a website using figma, figjam.",
      "Doing website development with WordPress and Elementor.",
    ],
    logo: `${erje}`,
    tools: [
      `${figma}`,
      `${affinity}`,
      `${affinityphoto}`,
      `${elementor}`,
      `${wordpress}`,
    ],
  },
];

const logoForSale = [
  {
    name: "C Carrot Logo",
    image: ccarrot,
    price: 250,
    available: false,
    link: "https://www.logoground.com/logo.php?id=448190",
  },
  {
    name: "A Tech Logo",
    image: allencio,
    price: 250,
    available: true,
    link: "",
  },
  {
    name: "Bird Line Logo",
    image: aveshome,
    price: 200,
    available: true,
    link: "https://www.logoground.com/logo.php?id=282134",
  },
  {
    name: "Baby And Phone Logo",
    image: babycall,
    price: 200,
    available: true,
    link: "https://www.logoground.com/logo.php?id=457414",
  },
  {
    name: "Bear Soldier Logo",
    image: bearsoldier,
    price: 200,
    available: true,
    link: "",
  },
  {
    name: "BP Logo",
    image: bitpostal,
    price: 200,
    available: true,
    link: "",
  },
  {
    name: "Cat Love Logo",
    image: catlove,
    price: 200,
    available: true,
    link: "",
  },
  {
    name: "Bull Power Logo",
    image: bulloff,
    price: 200,
    available: true,
    link: "",
  },
  {
    name: "Lion H Logo",
    image: coatofarms,
    price: 200,
    available: true,
    link: "https://www.logoground.com/logo.php?id=450458",
  },
  {
    name: "D Diving Logo",
    image: ddiving,
    price: 100,
    available: true,
    link: "",
  },
  {
    name: "Dog Resque",
    image: dogresque,
    price: 200,
    available: true,
    link: "",
  },
];

export {
  skillDesign,
  skills,
  skillsTwo,
  projects,
  workExperiences,
  logoForSale,
};
