/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "sina's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Sina Salimipour Portfolio",
    type: "website",
    url: "https://sinagun.github.io/sinagun.github.io",
  },
};

//Home Page
const greeting = {
  title: "Sina Salimipour",
  logo_name: "Sina Salimipour",
  nickname: "Sinagun",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1yewhwl8Fw_eP_fYVUBfL0NmBKaTD-q_9/view?usp=sharing",
  portfolio_repository: "https://github.com/sinagun",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sinagun",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sinagun",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sina-salimipour-577030216/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sinagunps4@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/sinasalimipour",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];










const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //   ],
    // },
    {
      title: "Network Security Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Network Security Engineer with a demonstrated history of working in the information technology industry",
        "⚡ Developing highly scalable routing and firewall solutions for various network use cases",
        "⚡ Creating application backend in linux and windows",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "cisco",
          fontAwesomeClassname: "simple-icons:cisco",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "flat-color-icons:linux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "kali linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            color: "#2C8EBB",
          },
        },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Secondary Skills",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience working on multiple office applications",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying Docker containers",
        "⚡ Designing and Editing video and photo",
      ],
      softwareSkills: [
        {
          skillName: "word",
          fontAwesomeClassname: "vscode-icons:file-type-word2",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "powerpoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint2",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel2",
          style: {
            color: "#0089D6",
          },
        },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        {
          skillName: "Adobe AfterEffects",
          fontAwesomeClassname: "file-icons:adobe-aftereffects",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "file-icons:adobe-photoshop",
          style: {
            color: "#001d34",
          },
        },
        {
          skillName: "Adobe Premiere",
          fontAwesomeClassname: "file-icons:adobe-premiere",
          style: {
            color: "#000058",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#fffff",
      },
      profileLink: "https://github.com/sinagun",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/sinagunps4",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/sinasalimipour",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "https://codeforces.com/profile/sinagunps4",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@sinasalimipour",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/sinasalimipour",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Azadi high school",
      subtitle: "computer science degree",
      logo_path: "uni-1.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019-2022",
      descriptions: [
        "⚡ I have studied basic computer science subjects like Binary, Algorithms, OS , etc.",
        "⚡ I have studied basic and advance Network engineering subjects like TCP/IP, VLAN, IPv4,IPv6, OSI  etc.",
        "⚡ Apart from this, I have done courses on Data Science , HTML/CSS , JavaScript and Python .",
      ],
      website_link: "https://sinagun.github.io/webpage-sinaonly-schoolAzadi/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Responsive Web Design",
      subtitle: "freecodecamp.org",
      logo_path: "freecode1.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc320a93d7-8542-45f7-9673-98e40b313fd8/responsive-web-design",
      alt_name: "freecodecamp.org",
      color_code: "#ffffffff",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle: "freecodecamp.org",
      logo_path: "freecode.png",
      certificate_link: "https://www.freecodecamp.org/certification/fcc320a93d7-8542-45f7-9673-98e40b313fd8/javascript-algorithms-and-data-structures",
      alt_name: "deeplearning.ai",
      color_code: "#0a0a21",
    },
    {
      title: "intermediate python",
      subtitle: "Sololearn",
      logo_path: "solo.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#00000",
    },
    {
      title: "Python CORE",
      subtitle: "Sololearn",
      logo_path: "solo.png",
      certificate_link:
        "#",
      alt_name: "Microsoft",
      color_code: "#00000",
    },
    {
      title: "HTML",
      subtitle: "Sololearn",
      logo_path: "solo.png",
      certificate_link:
        "#",
      alt_name: "Microsoft",
      color_code: "#00000",
    },
    {
      title: "Windows 10 for Education",
      subtitle: "Microsoft Educator Center",
      logo_path: "mslogo.png",
      certificate_link:
        "https://education.microsoft.com/en-us/profile/achievement/22209083/certificate?timezoneOffset=270",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "Fundamentals of digital marketing",
      subtitle: "Google Digital Garage",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ox6_cqVyvAtIgI7oCfZ9yn0RtALY1BN6/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Python for beginners",
      subtitle: "Sololearn",
      logo_path: "solo.png",
      certificate_link: "https://www.sololearn.com/certificates/course/en/25104531/1172/landscape/png",
      alt_name: "deeplearning.ai",
      color_code: "#00000",
    },
    {
      title: "Scientific Computing with Python",
      subtitle: "freecodecamp.org",
      logo_path: "freecode1.png",
      certificate_link: "https://www.freecodecamp.org/certification/fcc320a93d7-8542-45f7-9673-98e40b313fd8/scientific-computing-with-python-v7",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};










// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as Developer, Designer. I have also worked with some well established companies. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "IT Supervisor",
          company: "Sakhtmankala",
          company_url: "https://www.sakhtemankala.com",
          logo_path: "skala.png",
          duration: "Aug 2021 - Jan 2022",
          location: "iran, Tehran",
          description:
            "Sakhtmankala is the Start up from iran a copy of The Home Depot but iranian version I managed IT department and help desk ",
          color: "#fc1f20",
        },
        {
          title: "Web Master / Web Designer",
          company: "School Azadi",
          company_url: "https://azadeschool3.ir/",
          logo_path: "school.png",
          duration: "June 2020 - June 2021",
          location: "iran, Tehran",
          description:
            "Managed website and the database , Increased traffic to a webpage by 200% ",
          color: "#0879bf",
        },
        {
          title: "Typer / Translator",
          company: "typeiran",
          company_url: "http://typeiran.com/",
          logo_path: "karinir.png",
          duration: "June 2019 - June 2020",
          location: "iran, Tehran",
          description:
            "Helped with typing and Editing and the page layout of various types of texts related to articles,dissertations and Conducting content collection and researchprojects from the Internet and writing articles",
          color: "#9b1578",
        },
       
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "freeCodeCamp's Translation Effort",
          company: "freecodecamp.org ",
          company_url: "https://www.freecodecamp.org/",
          logo_path: "freecode.png",
          duration: "June 2021 - now",
          location: "online open source Volunteerships",
          description: "Helped save freecodecamp.org our 1000$ in translation",
          color: "#4285F4",
        },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// // Projects Page
// const projectsHeader = {
//   title: "Projects",
//   description:
//     "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
//   avatar_image_path: "projects_image.svg",
// };

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Opensource Development and html,css,js.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Iran /  state , Tehran, Taheri St. Valiasr St. Mellat Park",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/LZvpSCDKyGnXoUwz9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+98 9365041380",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  // projectsHeader,
  // publicationsHeader,
  contactPageData,
};
