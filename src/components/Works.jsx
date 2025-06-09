import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
      options={{
        max: 35,
        scale: 1.04,
        speed: 600,
      }}
      className="relative bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80 p-[2.5px] rounded-3xl w-full sm:w-[340px] shadow-2xl hover:shadow-[0_8px_40px_0_rgba(80,80,180,0.25)] transition-shadow duration-500 group"
    >
      <motion.div
        variants={fadeIn("up", "spring", index * 0.2, 0.85)}
        className="bg-tertiary rounded-3xl p-4 h-full flex flex-col transition-all duration-500 group-hover:scale-[1.025] group-hover:bg-white/10"
      >
        <div className="relative w-full h-[170px] sm:h-[210px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-gradient-to-tr from-[#333] to-[#555] w-9 h-9 sm:w-11 sm:h-11 rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 hover:ring-2 hover:ring-[#333] transition-all duration-300"
              title="View Source Code"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-6 flex-1 flex flex-col">
          <h3 className="text-white font-extrabold text-[20px] sm:text-[22px] md:text-[24px] tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed group-hover:text-white/90 transition-all duration-500 text-justify">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[11px] sm:text-[13px] md:text-[14px] px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white font-semibold shadow-sm transition-all duration-300 hover:from-blue-600/60 hover:to-purple-600/60`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.p
        variants={textVariant()}
        className={`${styles.sectionSubText} tracking-widest text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}
      >
        My work
      </motion.p>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHeadText} mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg`}
      >
        Projects.
      </motion.h2>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className={`w-full flex ${isMobile ? 'flex-col items-center' : ''}`}
      >
        <p
          className={`mt-3 text-secondary text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-[24px] sm:leading-[30px] ${isMobile ? 'text-center' : 'text-justify'} bg-white/5 rounded-xl px-6 py-4 shadow-lg border border-blue-400/10 backdrop-blur-md transition-all duration-500 hover:shadow-2xl`}
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className={`mt-10 sm:mt-20 flex flex-wrap gap-4 sm:gap-6 md:gap-7 ${isMobile ? 'justify-center' : ''}`}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");