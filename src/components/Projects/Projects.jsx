import { FaHtml5, FaGithub as GitHubIcon } from "react-icons/fa";
import { FiExternalLink as ExternalLinkIcon } from "react-icons/fi";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import Image1 from "../../assets/Images/jpeg-optimizer_Macbook-Air-echobazar-ecommerce.vercel.app.png";
import Image2 from "../../assets/Images/jpeg-optimizer_Macbook-Air-thegreenremedies.com.png";
import Image3 from "../../assets/Images/jpeg-optimizer_Macbook-Air-tech-hackathon.netlify.app.png";
import Image4 from "../../assets/Images/jpeg-optimizer_Macbook-Air-clearlink1.netlify.app.png";
import { RiNodejsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";

const projectData = [
  {
    id: 1,
    image: Image1,
    title: "Ecobazar",
    summary:
      "A fully functional e-commerce web application with advanced features like real" +
      "-time product filtering, secure payment integration, user authentication with role based access, and responsive design.",
    technologies: [
      {
        name: "MongoDB",
        icon: <DiMongodb color="#47A248" size={26} />,
      },
      {
        name: "Express",
        icon: <SiExpress color="#333333" size={26} />,
      },
      {
        name: "React",
        icon: <IoLogoReact color="#61DAFB" size={26} />,
      },
      {
        name: "Node.js",
        icon: <RiNodejsFill color="#339933" size={26} />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill color="#06B6D4" size={26} />,
      },
    ],
    links: {
      github: "https://github.com/Sammyarc/Echobazar",
      live: "https://echobazar-ecommerce.vercel.app/",
    },
  },
  {
    id: 2,
    image: Image2,
    title: "Green Remedies",
    summary:
      "Tasked with the development of the frontend of green remedies web application alongside other frontend developers.",
    technologies: [
      {
        name: "React",
        icon: <IoLogoReact color="#61DAFB" size={26} />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill color="#06B6D4" size={26} />,
      },
    ],
    links: {
      github: "https://github.com/Sammyarc/Green-Remedy2",
      live: "https://thegreenremedies.com/",
    },
  },
  {
    id: 3,
    image: Image3,
    title: "Shopify Onboarding Screen",
    summary:
      "As a hackathon task, we were asked to recreate the shopify onboarding webpage with accessibility features for both screen readers and keyboard users. We also included different animations based on user input.",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={26} color="#E34F26" />,
      },
      {
        name: "CSS3",
        icon: <IoLogoCss3 size={26} color="#1572B6" />,
      },
      {
        name: "Javascript",
        icon: <IoLogoJavascript size={26} color="#F7DF1E" />,
      },
    ],
    links: {
      github: "https://github.com/Sammyarc/Crushing-tech-hackathon",
      live: "https://tech-hackathon.netlify.app/",
    },
  },
  {
    id: 4,
    image: Image4,
    title: "Video Conferencing App",
    summary:
      "Developed a landing page for an AI enhanced video conferencing application",
    technologies: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={26} color="#E34F26" />,
      },
      {
        name: "CSS3",
        icon: <IoLogoCss3 size={26} color="#1572B6" />,
      },
      {
        name: "Javascript",
        icon: <IoLogoJavascript size={26} color="#F7DF1E" />,
      },
    ],
    links: {
      github: "https://github.com/Sammyarc/ClearLink",
      live: "https://clearlink1.netlify.app/",
    },
  },
];

const Projects = () => {
  return (
    <section className="px-4 mx-auto mt-[25vw] md:mt-[12vw] md:px-[5vw]">
      <div className="mb-12">
        <h2 className="text-[7.5vw] text-left font-bold mb-4 font-Poppins text-white md:text-[3vw] md:text-center">
          Featured Projects
        </h2>
        <p className="text-white text-left font-Poppins text-[4vw] w-[90vw] leading-normal mx-auto md:text-[1.2vw] md:w-[70vw] md:text-center">
          A curated collection of projects that showcase my skills in building
          full-stack web applications, solving complex problems, and creating
          intuitive user experiences.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 px-2 md:px-4 md:grid-cols-3">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative border rounded-lg p-4 md:px-[1vw] md:py-[2vw]"
          >
            {/* Project Image with Overlay */}
            <div className="rounded-lg">
              <img
                src={project.image}
                alt={`${project.title} - Project Thumbnail`}
                className="w-full h-[50vw] object-cover md:h-[15vw]"
              />
            </div>

            {/* Project Title */}
            <h2 className="text-[6vw] text-white font-Poppins font-bold mt-4 md:text-[1.5vw]">
              {project.title}
            </h2>

            {/* Project Summary */}
            <p className="text-gray-400 font-Poppins text-[4vw] mt-2 md:text-[1vw]">
              {project.summary}
            </p>

            {/* Technologies Used */}
            <div className="flex items-center gap-4 mt-4">
              {project.technologies.map((tech, index) => (
                <div key={index} className="flex space-x-2 items-center">
                  <span title={tech.name} className="w-8 h-8">
                    {tech.icon}
                  </span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex justify-between mt-6">
              <div className="flex gap-4">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent font-Poppins flex items-center gap-2 text-[4vw] md:text-[1.1vw]"
                >
                  <GitHubIcon className="w-5 h-5 text-green-400" />
                  GitHub
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent font-Poppins flex items-center gap-2 text-[4vw] md:text-[1.1vw]"
                >
                  <ExternalLinkIcon className="w-5 h-5 text-green-400" />
                  Live View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
