"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image from "next/image";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/next-js.png";
import javascriptIcon from "@/assets/icons/javascript.png";
import pythonIcon from "@/assets/icons/python.png";
import html5Icon from "@/assets/icons/html5.png";
import css3Icon from "@/assets/icons/css3.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import bootstrapIcon from "@/assets/icons/bootstrap.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import dockerIcon from "@/assets/icons/docker.png";
import gitIcon from "@/assets/icons/git.png";
import ubuntuIcon from "@/assets/icons/ubuntu.svg";
import fedoraIcon from "@/assets/icons/fedora.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import BraveIcon from "@/assets/icons/braveBrowser.png";
import alacrittyIcon from "@/assets/icons/alacritty.png";
import premiereProIcon from "@/assets/icons/premierepro.png";
import figmaIcon from "@/assets/icons/figma.png";
import canvaIcon from "@/assets/icons/canva.png";
import githubIcon from "@/assets/icons/github.png";

import ihasIcon from '../assets/projectImages/project-gif/ihas-logo.gif'
import mob4uIcon from '../assets/projectImages/project-gif/mob-logo.gif'
import todoIcon from '../assets/projectImages/project-gif/todo-logo.gif'
import smartevIcon from '../assets/projectImages/project-gif/ev-logo.gif'

import ihas from '../assets/projectImages/ihas-project.png'
import mob4u from '../assets/projectImages/mob4u.png'
import todo from '../assets/projectImages/todoctivity-project.png'
import smartev from '../assets/projectImages/ev-project.jpg'
import MotionCard from "@/components/motion-card";

type Skill = {
  name: string;
  icon: string;
};

type Experience = {
  companyName: string;
  designation: string;
  duration: string;
  city: string;
  skills: string[];
};

type Project = {
  projectName: string;
  duration: string;
  skills: string[];
  gif: any,
  image: any,
  description: string,
  liveDemoUrl: string,
  githubUrl: string
};

type Education = {
  universityName: string;
  study: string;
  marks: string;
  place: string;
  duration: string;
};

export default function SkillsProjectsEducation() {
  const [activeTab, setActiveTab] = useState<string>("skills");

  const skillsData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: reactIcon },
        { name: "Next.js", icon: nextjsIcon },
        { name: "JavaScript", icon: javascriptIcon },
        { name: "HTML5", icon: html5Icon },
        { name: "CSS3", icon: css3Icon },
        { name: "Tailwind CSS", icon: tailwindcssIcon },
        { name: "Bootstrap", icon: bootstrapIcon },
        { name: "shadcn/ui", icon: shadcnuiIcon }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Express.js", icon: expressjsIcon },
        { name: "Node.js", icon: nodejsIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "MongoDB", icon: mongodbIcon }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Git", icon: gitIcon },
        { name: "GitHub", icon: githubIcon },
        { name: "Docker", icon: dockerIcon },
        { name: "Ubuntu", icon: ubuntuIcon }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", icon: javascriptIcon },
        { name: "Python", icon: pythonIcon }
      ]
    },
    {
      title: "Tools & Environment",
      skills: [
        { name: "Fedora", icon: fedoraIcon },
        { name: "VS Code", icon: vscodeIcon },
        { name: "Brave", icon: BraveIcon },
        { name: "Alacritty", icon: alacrittyIcon },
        { name: "Figma", icon: figmaIcon }
      ]
    },
    {
      title: "Visual",
      skills: [
        { name: "Premiere Pro", icon: premiereProIcon },
        { name: "Canva", icon: canvaIcon }
      ]
    }
  ];

  const experienceData: Experience[] = [
    {
      companyName: "Gorilla Technology",
      designation: "Summer Intern",
      duration: "May 2024 - Jul 2024",
      city: "Chennai, India",
      skills: ["OpenWRT", "Node.js", "JWT", "Nginx"]
    },
    {
      companyName: "MATIC",
      designation: "Frontend Developer",
      duration: "Dec 2023 - Feb 2023",
      city: "Chennai, India",
      skills: ["HTML5", "CSS3", "Javascript", "Bootstrap"]
    },
    {
      companyName: "Tata Communications Limited",
      designation: "Summer Intern",
      duration: "Jun 2023 - Jul 2023",
      city: "Chennai, India",
      skills: ["Angular", "Bootstrap", "Flask", "MySQL"]
    }
  ];

  const projectsData: Project[] = [
    {
      projectName: "Integrated Health Accessible System",
      duration: "2024",
      skills: ["React.js","Tailwind CSS", "Node.js", "Express.js"],
      gif: ihasIcon,
      image: ihas,
      description: "Integrated Health Accessible System (IHAS) is a comprehensive website designed to provide seamless access to various health services and resources.",
      liveDemoUrl: "https://live-demo-link-a.com",
      githubUrl: "https://github.com/user/project-a"
    },
    {
      projectName: "Todoctivity",
      duration: "2023",
      skills: ["HTML5", "CSS3", "Javascript"],
      gif: todoIcon,
      image: todo,
      description: "Todoctivity is a productivity-focused website that combines a to-do list manager with a Pomodoro timer to help users stay organized and focused.",
      liveDemoUrl: "https://live-demo-link-b.com",
      githubUrl: "https://github.com/user/project-b"
    },
    {
      projectName: "Mobile Suggestion System",
      duration: "2023",
      skills: ["HTML5", "CSS3", "Javascript"],
      gif: mob4uIcon,
      image: mob4u,
      description: "Mob4u is your go-to destination for personalized mobile phone recommendations tailored to your specific needs and preferences. Whether you prioritize a powerful processor, top-notch camera capabilities, overall user experience, or other features.",
      liveDemoUrl: "https://live-demo-link-b.com",
      githubUrl: "https://github.com/user/project-b"
    },
    {
      projectName: "Smart EV Charging Station with ESP 32",
      duration: "2023",
      skills: ["esp32", "GSM Module", "Two way relay", "Voltage Regulator", "Aurdino IDE"],
      gif: smartevIcon,
      image: smartev,
      description: "Smart EV Charging Station with ESP32 is a cutting-edge project designed to revolutionize the electric vehicle(EV) charging experience. By leveraging the power of ESP32 microcontrollers and IoT technology, this system offers intelligent and efficient charging solutions..",
      liveDemoUrl: "https://live-demo-link-b.com",
      githubUrl: "https://github.com/user/project-b"
    }
  ];
  

  const educationData: Education[] = [
    {
      universityName: "Shiv Nadar University Chennai",
      study: "B.Tech in Computer Science (IoT)",
      marks: "8.67 CGPA",
      place: "Chennai, India",
      duration: "2021 - Present"
    },
    {
      universityName: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
      study: "PCMB",
      marks: "92.6%",
      place: "Hosur, India",
      duration: "2019 - 2021"
    },
    {
      universityName: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
      study: "HSC",
      marks: "96.2%",
      place: "Hosur, India",
      duration: "2018 - 2019"
    }
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section id="profile" className="w-full flex flex-col items-center text-center scroll-mt-32">
      <div className="tabs flex flex-col sm:flex-row gap-4 lg:gap-24 mb-8">
        <button
          className={`tab-button ${
            activeTab === "skills" ? "bg-black text-white" : "bg-gray-100"
          } py-2 px-4 rounded-full shadow-md transition-colors duration-300`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </button>
        <button
          className={`tab-button ${
            activeTab === "experience" ? "bg-black text-white" : "bg-gray-100"
          } py-2 px-4 rounded-full shadow-md transition-colors duration-300`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </button>
        <button
          className={`tab-button ${
            activeTab === "projects" ? "bg-black text-white" : "bg-gray-100"
          } py-2 px-4 rounded-full shadow-md transition-colors duration-300`}
          onClick={() => handleTabClick("projects")}
        >
          Projects
        </button>
        <button
          className={`tab-button ${
            activeTab === "education" ? "bg-black text-white" : "bg-gray-100"
          } py-2 px-4 rounded-full shadow-md transition-colors duration-300`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </button>
      </div>

      {activeTab === "skills" && (
        <div className="w-full">
          <div className="flex flex-wrap justify-center">
            {skillsData.map((item, index) => (
              <MotionDiv key={index}>
                <div className="mb-6 md:px-2">
                  <h3>{item.title}</h3>
                  <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                    {item.skills.map((skill) => (
                      <SkillCard key={skill.name} {...skill} />
                    ))}
                  </MotionList>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      )}

      {activeTab === "experience" && (
        <div className="w-full">
          <MotionDiv>
            <h2 className="mb-4">Experience</h2>
          </MotionDiv>
          <MotionCard className="flex flex-col items-center">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </MotionCard>
      </div>
      )}

{activeTab === "projects" && (
        <div className="w-full">
          <MotionDiv>
            <h2 className="mb-4">Projects</h2>
          </MotionDiv>
          <div className="flex flex-wrap justify-center gap-8">
            {projectsData.map((project, index) => (
              <MotionDiv key={index}>
                <ProjectCard {...project} />
              </MotionDiv>
            ))}
          </div>
        </div>
      )}

      {activeTab === "education" && (
        <div className="w-full">
          <MotionDiv>
            <h2 className="mb-4">Education</h2>
          </MotionDiv>
          <MotionCard className="flex flex-col items-center">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </MotionCard>
        </div>
      )}
    </section>
  );
}

function SkillCard({ icon, name }: Skill) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ companyName, designation, duration, city, skills }: Experience) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 sm:left-1"></div>
      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-black rounded-full border border-white sm:-left-0.5"></div>
      <div className="ml-8 text-left bg-white border border-gray-200 rounded-xl shadow-lg w-80 sm:w-80 lg:w-[70vh] px-10 py-5 mb-10">
        <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
        <p className="text-sm text-gray-500 mb-1">{designation}</p>
        <p className="text-sm text-gray-500 mb-1">{city}</p>
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
        <div className="flex flex-wrap gap-2 justify-left">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white bg-opacity-30 border border-white border-opacity-40 rounded-full px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-lg shadow-md hover:shadow-lg"
          >
            {skill}
          </span>
        ))}

      </div>
      </div>
    </div>
  );
}


function EducationCard({ universityName, study, marks, place, duration }: Education) {
  return (
    <div className="relative flex flex-col sm:flex-row items-start">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300 sm:left-1"></div>
      <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 h-4 w-4 bg-black rounded-full border border-white sm:-left-0.5"></div>
      <div className="ml-8 text-left bg-white border border-gray-200 rounded-xl shadow-lg w-80 sm:w-80 lg:w-[70vh] px-10 py-5 mb-10">
        <h3 className="text-lg font-semibold mb-2">{universityName}</h3>
        <p className="text-sm text-gray-500 mb-1">{study}</p>
        <p className="text-sm text-gray-500 mb-1">{marks}</p>
        <p className="text-sm text-gray-500 mb-1">{place}</p>
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
      </div>
    </div>
  );
}

// function ProjectCard({
//   projectName,
//   duration,
//   skills,
//   gif,
//   image,
//   description,
//   liveDemoUrl,
//   githubUrl
// }: Project) {
//   return (
//     <div className="bg-white group rounded-xl border-none p-5 text-left shadow-none transition-all duration-200 ease-linear drop-shadow-md hover:drop-shadow-xl w-full h-[500px] max-w-sm relative">
//       <div className="flex items-start mb-4">
//         <div className="relative">
//           <Image
//             src={image}
//             alt={`${projectName} Image`}
//             className="object-cover rounded-xl"
//             width={500}
//             height={500}
//             style={{ objectFit: 'cover' }}
//             priority
//             quality={50}
//           />
//         </div>
//       </div>
//       <h3 className="text-lg font-semibold mb-2 flex items-center">
//         <div className="relative w-12 h-12 mr-2">
//           <Image
//             src={gif}
//             alt={`${projectName} GIF`}
//             className="object-cover rounded-xl"
//             width={50} 
//             height={50}
//             priority
//           />
//         </div>
//         {projectName}
//       </h3>
//       <p className="text-sm text-gray-500 mb-1 ml-12">{duration}</p>
//       <p className="text-sm text-gray-500 mb-4 ml-12">{description}</p>
//       <div className="flex flex-wrap gap-2 justify-left mb-4 ml-12">
//         {skills.map((skill, index) => (
//           <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
//             {skill}
//           </span>
//         ))}
//       </div>
//       <div className="flex justify-end mt-auto gap-4 px-8">
//         <a
//           href={liveDemoUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border-black text-black flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 w-8 h-8"
//         >
//           <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" />
//         </a>
//         <a
//           href={githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-black text-white flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 w-8 h-8"
//         >
//           <FontAwesomeIcon icon={faGithub} className="text-xl" />
//         </a>
//       </div>
//     </div>
//   );
// }

function ProjectCard({
  projectName,
  duration,
  skills,
  gif,
  image,
  description,
  liveDemoUrl,
  githubUrl
}: Project) {
  return (
    <div className="bg-white group rounded-xl border-none p-5 text-left shadow-none transition-all duration-200 ease-linear drop-shadow-md hover:drop-shadow-xl w-full h-[600px] max-w-sm relative flex flex-col">
      <div className="flex items-start mb-4 flex-shrink-0">
        <div className="relative">
          <Image
            src={image}
            alt={`${projectName} Image`}
            className="object-cover rounded-xl"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
            priority
            quality={50}
          />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <div className="relative w-12 h-12 mr-2">
            <Image
              src={gif}
              alt={`${projectName} GIF`}
              className="object-cover rounded-xl"
              width={50} 
              height={50}
              priority
            />
          </div>
          {projectName}
        </h3>
        <p className="text-sm text-gray-500 mb-1 ml-12">{duration}</p>
        <p className="text-sm text-gray-500 mb-4 ml-12">{description}</p>
        <div className="flex flex-wrap gap-2 justify-left mb-4 ml-12">
          {skills.map((skill, index) => (
            <span key={index} className="bg-white rounded-full px-3 py-1 text-xs font-medium shadow-md">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-auto">
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-black text-black flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 w-8 h-8"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xl" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white flex justify-center items-center rounded-full shadow-md transition-transform transform hover:scale-105 w-8 h-8"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
      </div>
    </div>
  );
}

