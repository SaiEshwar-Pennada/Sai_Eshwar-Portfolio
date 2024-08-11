import {
    mobile,
    web,
    backend,
    javascript,
    html,
    css,
    College1,
    College2,
    reactjs,
    /*redux,*/
    python,
    tailwind,
    school,
    msoffice,
    nodejs,
    mongodb,
    git,
    powerbi,
    /*carrent,
    jobit,
    tripguide,*/
    threejs,
    Musik,
    omni_health_explorer,
    youtube_clone,
    Find_my_kraft,
    Ai,
    Img_cov,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Works",
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
      title: "Machine Learning Enthusiast",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Msoffice",
      icon: msoffice,
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
      name: "powerbi",
      icon: powerbi,
    },
  ];
  
  const education = [
    {
      title: "Malla Reddy College of Engineering and Technology",
      company_name: "Electronics and Communication Engineering (ECE)",
      icon: College1,
      iconBg: "#383E56",
      date: "2020 - 2024",
      points: [
        "Completed B.Tech in 2024 from Malla Reddy College of Engineering and Technology, Kompally, Hyderabad",
        "Achieved a CGPA of 7.24 in academics",
        "Gained strong technical and analytical skills through coursework, projects, and practical labs.",
        "Engaged in various extracurricular activities and technical events, showcasing leadership and teamwork skills",
      ],
    },
    {
      title: "Narayana Junior College",
      company_name: "Intermidate (MPC)",
      icon: College2,
      iconBg: "#383E56",
      date: "2018 - 2020",
      points: [
        "Completed Intermediate Education (10+2) in 2020 from Narayana Junior College, Hyderabad",
        "Specialized in MPC (Maths, Physics, Chemistry) stream, achieving a score of 838 marks.",
      ],
    },
    {
      title: "Narayana Concept High School",
      company_name: "10th",
      icon: school,
      iconBg: "#383E56",
      date: "2017 - 2018",
      points:[
        "Completed Secondary Education (10th) in 2018 from Narayana Concept High School, Narayana Guda, Hyderabad.",
        "Achieved a GPA of 8.3 in academics.",
        "Awarded the certificate for winning 3rd prize in school level carrom board game competition",
        "Actively participated in various school events and competitions, showcasing diverse talents and interests",
      ],
    },
    
  ]

  const projects = [
    {
      name: "Omni-Health Explorer",
      description:
        "Web-based platform that is used to predict the multiple diseases like Diabetes, Heart Disease, Kidney Disease, brain tumor, etc., using machine learning models.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "white-text-gradient",
        },

      ],
      image: omni_health_explorer,
      source_code_link: "https://github.com/SaiEshwar-Pennada/Omni_Health_explorer",
    },
    {
      name: "Find My Kraft",
      description:
        "Web application that enables users to search for job openings, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: Find_my_kraft,
      source_code_link: "https://github.com/SaiEshwar-Pennada/Find_my_kraft",
    },
    {
      name: "Musik",
      description:
        "A web application that scans the users emotion using camera and suggests the songs based on the user clusters and also shows the graph of user who have recently listenedrned to that song.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "red-text-gradient",
        },
        {
          name: "Spotify-dashboard",
          color: "green-text-gradient",
        },
      ],
      image: Musik,
      source_code_link: "https://github.com/SaiEshwar-Pennada/muzik",
    },
    {
      name: "Youtube Clone",
      description:
        "An application that replicates YouTube's core functionalities, the YouTube Clone uses RapidAPI to stream and display videos, offering users a seamless experience with features like search, video playback, and category browsing.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Rapidapi",
          color: "purple-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },

      ],
      image: youtube_clone,
      source_code_link: "https://github.com/SaiEshwar-Pennada/Youtube_clone",
    },
    {
      name: "Ai-Personal Assistant",
      description:
        "An application that operates as a desktop bot, the AI Personal Assistant helps automate tasks on your system, such as managing files, setting reminders, and running applications. It enhances productivity by streamlining routine activities directly on your computer.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: Ai,
      source_code_link: "https://github.com/SaiEshwar-Pennada/Ai-persional-assistant",
    },
    {
      name: "Image to Cartoon Converter",
      description:
        "An application that transforms regular images into cartoon-style illustrations, the Image to Cartoon Converter uses advanced image processing techniques to apply cartoon effects, making photos look like hand-drawn artwork.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
      ],
      image: Img_cov,
      source_code_link: "https://github.com/SaiEshwar-Pennada/Image_to_cartoon_converter",
    },
  ];
  
  export { services, technologies, projects,education};