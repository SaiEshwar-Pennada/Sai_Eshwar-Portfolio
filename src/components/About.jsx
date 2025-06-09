import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { my_photo,Resume } from '../assets'
import { styles } from '../styles'
import { services } from '../constants'
import {SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div options={{ max: 45, scale: 1, speed: 450 }} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} tracking-widest text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg`}>
          Overview.
        </h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify transition-all duration-500 hover:shadow-2xl"
        >
          I’m a motivated and detail-oriented engineering graduate with hands-on experience in technical support and software application services. I have a decent foundation in programming languages such as Python, JavaScript, HTML, CSS, and React.js, and enjoy applying these skills to solve practical problems and build efficient solutions.
          <br /><br />
          I’m familiar with tools and technologies like Google Colab, Visual Studio, Power BI, and the MS Office Suite, as well as working with databases including MySQL and SQL Server. I also possess foundational knowledge of version control systems like Git and Git Bash, and I’m continuously working to strengthen my technical toolkit.
          <br /><br />
          In addition to my technical abilities, I bring strong soft skills such as problem-solving, adaptability, effective communication, team collaboration, and time management. I'm enthusiastic about exploring new opportunities that challenge me to grow, expand my skill set, and contribute meaningfully to a company’s success through technology-driven innovation.
        </motion.p>
      
        <Tilt className="w-[300px] h-[300px] rounded-[24px] bg-gradient-to-br from-blue-400/30 via-purple-300/20 to-pink-200/20 p-[3px] shadow-2xl transition-all duration-500"
          options={{ max: 18, scale: 1.04, speed: 350 }}
        >
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: 2,
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              transition: { duration: 0.4, type: "spring" }
            }}
            className="w-full h-full rounded-[20px] overflow-hidden bg-white/80 transition-all duration-500"
          >
            <img
              src={my_photo}
              alt="P.Sai Eshwar"
              className="w-full h-full object-cover rounded-[20px] transition-all duration-500 hover:scale-105 hover:brightness-105"
              style={{ boxShadow: "0 4px 24px 0 rgba(80, 80, 180, 0.15)" }}
            />
          </motion.div>
        </Tilt>
      </div>
      <div className="flex flex-col items-start gap-4 mt-6">
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saieshwar-pennada-5281b123a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-lg hover:bg-[#0077b5]/90 transition-all duration-300 ring-2 ring-transparent hover:ring-[#0077b5]"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#0077b5] to-[#00c6fb] shadow-md group-hover:bg-white transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#0077b5]">
              <svg width="20" height="20" fill="white" className="transition-all duration-300 group-hover:fill-[#0077b5]" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/>
              </svg>
            </span>
            <span className="font-semibold text-[#0077b5] group-hover:text-white transition-all duration-300 text-base">LinkedIn</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/SaiEshwar-Pennada"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-lg hover:bg-[#333]/90 transition-all duration-300 ring-2 ring-transparent hover:ring-[#333]"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#333] to-[#555] shadow-md group-hover:bg-white transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#333]">
              <svg width="20" height="20" fill="white" className="transition-all duration-300 group-hover:fill-[#333]" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </span>
            <span className="font-semibold text-[#333] group-hover:text-white transition-all duration-300 text-base">GitHub</span>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/saieshwar.pennada.54/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white shadow-lg hover:bg-[#1877f3]/90 transition-all duration-300 ring-2 ring-transparent hover:ring-[#1877f3]"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-[#1877f3] to-[#42a5f5] shadow-md group-hover:bg-white transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#1877f3]">
              <svg width="20" height="20" fill="white" className="transition-all duration-300 group-hover:fill-[#1877f3]" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
              </svg>
            </span>
            <span className="font-semibold text-[#1877f3] group-hover:text-white transition-all duration-300 text-base">Facebook</span>
          </a>
        </div>
        {/* Download Resume Button */}
        <a 
          href={Resume}
          download
          className="mt-4 flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-bold shadow-xl hover:from-purple-500 hover:to-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-300 active:scale-95"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mr-2" viewBox="0 0 24 24">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
          Download Resume
        </a>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")