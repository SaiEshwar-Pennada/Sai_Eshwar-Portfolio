import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { motion } from "framer-motion"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-8 sm:gap-10 py-6">
      {technologies.map((technology, idx) => (
        <motion.div
          key={technology.name}
          className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          animate={{
            y: [0, -12, 0, 12, 0], // up, center, down, center
          }}
          transition={{
            duration: 2 + (idx % 3) * 0.5, // staggered duration for variety
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 0.12,
          }}
        >
          <div className="scale-100 group-hover:scale-110 transition-transform duration-300">
            <BallCanvas icon={technology.icon} />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"")