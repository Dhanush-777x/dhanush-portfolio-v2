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
import radixIcon from '@/assets/icons/radix-ui.png';
import shadcnuiIcon from "@/assets/icons/shadcn-ui.png";
import bootstrapIcon from "@/assets/icons/bootstrap.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressjsIcon from "@/assets/icons/express-js.png";
import mysqlIcon from "@/assets/icons/mysql.png";
import SqliteIcon from '@/assets/icons/SQLite.png'
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
import zshIcon from '@/assets/icons/zsh.png'
import canvaIcon from "@/assets/icons/canva.png";
import filmoraIcon from '@/assets/icons/filmora.png'
import githubIcon from "@/assets/icons/github.png";
import framerMotionIcon from '@/assets/icons/framer.svg'

import ihasIcon from '../assets/projectImages/project-gif/ihas-logo.gif'
import mob4uIcon from '../assets/projectImages/project-gif/mob-logo.gif'
import todoIcon from '../assets/projectImages/project-gif/todo-logo.gif'
import smartevIcon from '../assets/projectImages/project-gif/ev-logo.gif'
import portfoliov1Icon from '../assets/projectImages/project-gif/website.gif'

import ihas from '../assets/projectImages/ihas-project.png'
import mob4u from '../assets/projectImages/mob4u.png'
import portfoliov1 from '../assets/projectImages/portfolioV1.png'
import todo from '../assets/projectImages/todoctivity-project.png'
import smartev from '../assets/projectImages/ev-project.jpg'
import MotionCard from "@/components/motion-card";
import MotionText from "@/components/motion-text";

import { TimelineAnimation } from '../components/timeline-animation';


type Skill = {
  name: string;
  icon: string;
};

type Experience = {
  id: number;
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
  id: number;
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
        { name: "Radix UI", icon: radixIcon },
        { name: "Framer Motion", icon: framerMotionIcon },
        { name: "Figma", icon: figmaIcon }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: nodejsIcon },
        { name: "Express.js", icon: expressjsIcon },
        { name: "MySQL", icon: mysqlIcon },
        { name: "SQLite", icon: SqliteIcon },
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
        { name: "Alacritty", icon: alacrittyIcon },
        { name: "Oh My Zsh", icon: zshIcon }
      ]
    },
    {
      title: "Visual",
      skills: [
        { name: "Premiere Pro", icon: premiereProIcon },
        { name: "Canva", icon: canvaIcon },
        { name: "Filmora", icon: filmoraIcon }
      ]
    }
  ];

  const experienceData: Experience[] = [
    {
      id: 0,
      companyName: "Gorilla Technology",
      designation: "Summer Intern",
      duration: "May 2024 - Jul 2024",
      city: "Chennai, India",
      skills: ["OpenWRT", "Node.js", "JWT", "Nginx"]
    },
    {
      id: 1,
      companyName: "MATIC",
      designation: "Frontend Developer",
      duration: "Dec 2023 - Feb 2023",
      city: "Chennai, India",
      skills: ["HTML5", "CSS3", "Javascript", "Bootstrap"]
    },
    {
      id: 2,
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
      liveDemoUrl: "https://ihas-india.netlify.app/",
      githubUrl: "https://github.com/Dhanush-777x/IHAS"
    },
    {
      projectName: "Portfolio V1",
      duration: "2024",
      skills: ["React.js", "Tailwind CSS", "Framer Motion"],
      gif: portfoliov1Icon,
      image: portfoliov1,
      description: "A sleek and modern portfolio showcasing my work, skills, and achievements. Built with the latest web technologies, this dynamic site highlights my projects.",
      liveDemoUrl: "https://dhanushsm-v1.vercel.app/",
      githubUrl: "https://github.com/Dhanush-777x/Personal-Portfolio"
    },
    {
      projectName: "Todoctivity",
      duration: "2023",
      skills: ["HTML5", "CSS3", "Javascript", "Bootstrap"],
      gif: todoIcon,
      image: todo,
      description: "Todoctivity is a productivity-focused website that combines a to-do list manager with a Pomodoro timer to help users stay organized and focused.",
      liveDemoUrl: "https://todoctivity.netlify.app/",
      githubUrl: "https://github.com/Dhanush-777x/todoctivity"
    },
    {
      projectName: "Smart EV Charging Station with ESP 32",
      duration: "2023",
      skills: ["esp32", "GSM Module", "Voltage Regulator", "Aurdino IDE"],
      gif: smartevIcon,
      image: smartev,
      description: "Smart EV Charging Station with ESP32 is a cutting-edge project designed to revolutionize the electric vehicle(EV) charging experience. By leveraging the power of ESP32 microcontrollers and IoT technology.",
      liveDemoUrl: "https://live-demo-link-b.com",
      githubUrl: "https://github.com/user/project-b"
    },
    // {
    //   projectName: "Mobile Suggestion System",
    //   duration: "2023",
    //   skills: ["HTML5", "CSS3", "Javascript"],
    //   gif: mob4uIcon,
    //   image: mob4u,
    //   description: "Mob4u is your go-to destination for personalized mobile phone recommendations tailored to your specific needs and preferences. Whether you prioritize a powerful processor, top-notch camera capabilities, overall user experience, or other features.",
    //   liveDemoUrl: "https://live-demo-link-b.com",
    //   githubUrl: "https://github.com/user/project-b"
    // },
  ];
  

  const educationData: Education[] = [
    {
      id: 0,
      universityName: "Shiv Nadar University Chennai",
      study: "B.Tech in Computer Science (IoT)",
      marks: "8.67 CGPA",
      place: "Chennai, India",
      duration: "2021 - Present"
    },
    {
      id: 1,
      universityName: "Sri Vijay Vidyalaya Matriculation Higher Secondary School",
      study: "PCMB",
      marks: "92.6%",
      place: "Hosur, India",
      duration: "2019 - 2021"
    },
    {
      id: 2,
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
<div className="tabs flex flex-wrap justify-evenly gap-6 lg:flex lg:flex-row lg:gap-24 mb-8">
  <button
    className={`tab-button ${
      activeTab === "skills" ? "bg-black text-white" : "bg-gray-100"
    } py-2 px-4 w-36 rounded-full shadow-md transition-colors duration-300`}
    onClick={() => handleTabClick("skills")}
  >
    Skills
  </button>
  <button
    className={`tab-button ${
      activeTab === "experience" ? "bg-black text-white" : "bg-gray-100"
    } py-2 px-4 w-36 rounded-full shadow-md transition-colors duration-300`}
    onClick={() => handleTabClick("experience")}
  >
    Experience
  </button>
  <button
    className={`tab-button ${
      activeTab === "projects" ? "bg-black text-white" : "bg-gray-100"
    } py-2 px-4 w-36 rounded-full shadow-md transition-colors duration-300`}
    onClick={() => handleTabClick("projects")}
  >
    Projects
  </button>
  <button
    className={`tab-button ${
      activeTab === "education" ? "bg-black text-white" : "bg-gray-100"
    } py-2 px-4 w-36 rounded-full shadow-md transition-colors duration-300`}
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
          <div className="flex flex-wrap justify-center gap-6 lg:gap-2 xl:gap-10 bg-transparent backdrop-blur-lg">
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

function ExperienceCard({ id, companyName, designation, duration, city, skills }: Experience) {
  const totalDelay = id + id * 0.6
  return (
    <TimelineAnimation delay={totalDelay}>
        <h3 className="text-lg font-semibold mb-2">
{companyName}
        </h3>
        <p className="text-sm text-gray-500 mb-1">{designation}</p>
        <p className="text-sm text-gray-500 mb-1">{city}</p>
        <p className="text-sm text-gray-500 mb-2">{duration}</p>
        <MotionList className="flex flex-wrap gap-2 justify-left">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white bg-opacity-30 border border-white border-opacity-40 rounded-full px-3 py-1 text-xs font-medium text-gray-800 backdrop-blur-lg shadow-md hover:shadow-lg"
          >
            {skill}
          </span>
        ))}

      </MotionList>
    </TimelineAnimation>
  );
}




function EducationCard({id, universityName, study, marks, place, duration }: Education) {
  const totalDelay = id + id * 0.6

  return (
    <TimelineAnimation delay={totalDelay}>
      <h3 className="text-lg font-semibold mb-2 text-wrap">{universityName}
      </h3>
      <p className="text-sm text-gray-500 mb-1">{study}</p>
      <p className="text-sm text-gray-500 mb-1">{marks}</p>
      <p className="text-sm text-gray-500 mb-1">{place}</p>
      <p className="text-sm text-gray-500 mb-2">{duration}</p>
    </TimelineAnimation>
  );
}

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
    <div className="bg-white group rounded-xl border-none p-5 text-left shadow-none transition-all duration-200 ease-linear drop-shadow-md hover:drop-shadow-xl w-full h-[620px] max-w-sm relative flex flex-col">
      <div className="flex items-start mb-4 flex-shrink-0">
        <div className="relative">
          <Image
            src={image}
            alt={`${projectName} Image`}
            className="object-cover rounded-xl"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
            quality={80}
            priority
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
              quality={50}
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

