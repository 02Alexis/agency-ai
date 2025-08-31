import { motion } from "motion/react"
import { teamData } from "../assets/assets"
import Title from "./Title"

const Teams = () => {
  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}

    className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white">
        <Title title="Conocer al equipo." des="Un equipo apasionado de expertos digitales dedicados al éxito de su marca." />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamData.map((team, index) => (
                <motion.div 
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.4, delay: index * 0.1}}
                viewport={{once: true}}

                key={index} className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-whte dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
                    <img src={team.image} className="w-12 h-12 rounded-full" alt="" />
                    <div className="flex-1">
                        <h3 className="font-bold text-sm">{team.name}</h3>
                        <p className="text-xs opacity-60">{team.position}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Teams