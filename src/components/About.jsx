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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I’m a motivated and detail-oriented engineering graduate with hands-on experience in technical support and software application services. I have a decent foundation in programming languages such as Python, JavaScript, HTML, CSS, and React.js, and enjoy applying these skills to solve practical problems and build efficient solutions.

I’m familiar with tools and technologies like Google Colab, Visual Studio, Power BI, and the MS Office Suite, as well as working with databases including MySQL and SQL Server. I also possess foundational knowledge of version control systems like Git and Git Bash, and I’m continuously working to strengthen my technical toolkit.

In addition to my technical abilities, I bring strong soft skills such as problem-solving, adaptability, effective communication, team collaboration, and time management. I'm enthusiastic about exploring new opportunities that challenge me to grow, expand my skill set, and contribute meaningfully to a company’s success through technology-driven innovation.
        </motion.p>

        <Tilt
          className="w-[300px] h-[300px] overflow-hidden rounded-[20px]"
          options={{ max: 25, scale: 1.05, speed: 400 }}
        >
          <motion.div
            whileHover={{ rotateY: 10, rotateX: 10 }}
            className="w-full h-full"
          >
            <img src={my_photo} alt="P.Sai Eshwar" className="w-full h-full object-cover rounded-[65px]" />
          </motion.div>
        </Tilt>
      </div>
      <div className="mt-10 flex justify-center">
        <a 
          href={Resume}
          download 
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:translate-y-1 transition-all duration-300"
        >
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