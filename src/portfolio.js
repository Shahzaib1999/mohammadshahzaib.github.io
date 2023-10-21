/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohammad Shahzaib",
  title: "Hi all, I'm Shahzaib",
  subTitle: emoji(
    "A passionate MERN Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / Nodejs / Nestjs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1Uha2zf1nzzKVkGaYDCP5GaNmcexMfg9o/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shahzaib1999",
  linkedin: "https://www.linkedin.com/in/mohammad-shahzaib-3ba469180/",
  gmail: "mohdshahzaib24@gmail.com",
  // facebook: "https://www.facebook.com/MohammadShahzaib1999",
  stackoverflow: "https://stackoverflow.com/users/10406318/mohammad-shahzaib",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY MERN STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Crafting Scalable Solutions for Modern Web and Mobile Apps"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nextjs",
      icon: require("./assets/images/nextjsLogo1.png")
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Nest.js",
      icon: require("./assets/images/nestjsLogo.png")
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      icon: require("./assets/images/mongodbLogo1.png")
    },
    // {
    //   skillName: "aws",
    //   fontAwesomeClassname: "fab fa-aws"
    // },
    {
      skillName: "Firebase",
      icon: require("./assets/images/firebaseLogo2.png")
    }
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virtual University",
      logo: require("./assets/images/vuLogo2.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2020 - August 2024"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Government Islamia Science College",
      logo: require("./assets/images/islamiaLogo.png"),
      subHeader: "Intermediate",
      duration: "2016 - 2019"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Digital Leap",
      companylogo: require("./assets/images/digitalleapLogo.png"),
      date: "May 2021 – Sep 2023",
      desc: "Develop, maintain, and secure web and mobile applications. Created reusable components, manage databases, and excel in microservices architecture. Proficient troubleshooter and innovator"
      // Developing and maintaining robust web applications by leveraging both front-end and back-end development skills. I have created and managed reusable components to streamline project development. Additionally, I have designed and maintained databases for efficient data management and implemented secure authentication mechanisms and role-based access control for enhanced application security. My expertise extends to microservices architecture, where I break down complex systems into independently deployable services. I excel in troubleshooting intricate technical issues and providing innovative solutions.
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "React Developer",
      company: "MiniBig Tech",
      companylogo: require("./assets/images/minibigLogo.png"),
      date: "Oct 2020 – Apr 2021",
      desc: "Developed robust applications with optimal performance, responsive web interfaces, managed state using Redux, and ensured cross-browser compatibility, incorporating server-side rendering (SSR) and static site generation (SSG) for optimal performance."
      // Proficient in creating and maintaining responsive, user-friendly web interfaces. Developed robust, scalable web applications with Next.js, incorporating server-side rendering (SSR) and static site generation (SSG) for optimal performance. Achieved fast loading times and ensured smooth user experiences through frontend code and asset optimization. Utilized state hooks and state management libraries like Redux for effective application state management. Ensured cross-browser compatibility and seamless integration with backend APIs for data retrieval and manipulation on the client.
    },
    {
      role: "Junior Developer",
      company: "Times Enterprise",
      companylogo: require("./assets/images/timesLogo.png"),
      date: "Jun 2019 – Sep 2020",
      desc: "Adhere to best coding practices, producing clean, efficient, and well-structured code. Prioritize cross-browser compatibility and deliver seamless user experiences. Developed Progressive Web Apps (PWAs) that provide native-like experiences, including offline functionality."
    },
    {
      role: "Internship / Junior Developer",
      company: "Panacloud",
      companylogo: require("./assets/images/panacloudLogo.png"),
      date: "Sep 2018 – May 2019",
      desc: "Active participation in identifying and resolving codebase bugs. Strengthened problem-solving abilities through hands-on experience with real-world development challenges. Engaged in collaborative code reviews with team members, fostering skill enhancement and valuable learning from constructive feedback."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/otoLogo.webp"),
      projectName: "OTO",
      projectDesc: "Where freelance is automated",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://oto.work/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/servemeLogo.webp"),
      projectName: "Serve-Me",
      projectDesc: "Find the best service providers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://serve-me-pr-89.herokuapp.com/"
        }
      ]
    },
    {
      image: require("./assets/images/funcfinderLogo.webp"),
      projectName: "FuncFinder",
      projectDesc: "New Way To Party",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://funcfinder.com/"
        },
        {
          name: "View App",
          url: "https://apps.apple.com/us/app/funcfinder-new-way-to-party/id1567003821"
        }
      ]
    },
    {
      image: require("./assets/images/mitpLogo.webp"),
      projectName: "MITP",
      projectDesc: "Put their Money where their Mouth is",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://moneyinthepot.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/courseraLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/NUAG3DPCN2QT"
        }
      ]
    },
    {
      title: "Front-End Web UI Frameworks and Tools",
      // subtitle:
      //   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/courseraLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/WE52WLTQUHDU"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      // subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification  ", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-558979121",
  email_address: "mohdshahzaib24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
