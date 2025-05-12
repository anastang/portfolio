// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#041014, #ECC326, #059C12, #62059C, #ff7f7f, #ecf0f1",
  firstName: "Anastan",
  middleName: "",
  lastName: "Gnanapragasam",
  message: " Management Engineering Student @ University of Waterloo ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/anastang",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/anastang/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../../src/assets/img/headshot.jpg"),
  imageSize: 375,
  message:
    "I’m Anastan Gnanapragasam, a Management Engineering student at the University of Waterloo with an option in Artificial Intelligence. I’ve worked across data engineering, software, and analytical roles, where I’ve focused on building reliable data pipelines, building resilient, high-performance systems, and applying AI to solve real-world problems. I’m especially interested in the intersection of scalable infrastructure and intelligent systems — how well-designed data platforms can power faster decisions, better products, and smarter automation. Outside of work, I’m passionate about soccer and film, and I’m always looking to learn something new, both technically and creatively.",
  // resume: "https://docs.google.com/document/d/e/2PACX-1vS3H4djip2oc5zVUhn3RXhwIXQ_sD9mpCUsFeYTQCp0iVDSD-fNF2eqRJxsb5Vjm7AkC0uaH9EyYTvv/pub",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "anastang", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["mindflux", "private-data-rag-pipeline", "satellite-image-classification", "uwstudysync", "storm-tracker", "devcoin", "PlayByGPT"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../../src/assets/img/headshot.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../../src/assets/img/headshot.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 50 },
//     { name: "SQL", value: 45 },
//     { name: "Data Structures", value: 60 },
//     { name: "Bootstrap", value: 65 },
//     { name: "JavaScript", value: 75 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 80 },
//     { name: "Express.js", value: 70 },
//     { name: "Node.js", value: 65 },
//     { name: "API's", value: 65 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 95 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 95 },
//     { name: "Adaptability", value: 100 },
//     { name: "Problem Solving", value: 85 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Lets Connect!",
  message:
    "I'm currently looking for Fall 2025 opportunities! I'd love to chat with you, so feel free to connect and reach out to me at",
  email: "agnanapr@uwaterloo.ca"
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Lead Teacher & Department Chair',// Here Add Company Name
      date: 'Jan 2020 – Present',
    },
    {
      role: 'Teacher',
      date: 'Aug 2018 – January 2020',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, leadership, getInTouch, experiences };
