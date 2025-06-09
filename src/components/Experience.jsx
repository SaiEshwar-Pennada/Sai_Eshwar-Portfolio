import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { experience } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'linear-gradient(135deg, #232631 60%, #2e225a 100%)',
      color: '#fff',
      boxShadow: '0 8px 32px 0 rgba(80,80,180,0.18)',
      borderRadius: '18px',
      border: '1.5px solid #3b3b5c',
      padding: '24px 24px 18px 24px',
      transition: 'box-shadow 0.4s',
    }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={
      <span className="text-[15px] font-semibold text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        {experience.date}
      </span>
    }
    iconStyle={{
      background: 'linear-gradient(135deg, #fff 60%, #e0e7ff 100%)',
      color: '#1f1f38',
      boxShadow: '0 4px 16px 0 rgba(80,80,180,0.12)',
      border: '2px solid #a5b4fc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={experience.icon} alt={experience.company_name} className="w-[70%] h-[70%] object-contain drop-shadow-md" />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[22px] sm:text-[24px] font-bold tracking-wide mb-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow'>
        {experience.title}
      </h3>
      <p
        className='text-secondary text-[15px] sm:text-[16px] font-semibold mb-2'
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className='mt-4 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={point}
          className='text-white/90 text-[14px] pl-1 tracking-wide transition-all duration-300 hover:text-blue-300'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} tracking-widest text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`}>
          Professional
        </p>
        <h2 className={`${styles.sectionHeadText} mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg`}>
          Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experience.map((experience, index) => (
            <ExperienceCard key={`education-${index}`} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")