import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "framer-motion";

const Navbar = ({theme, setTheme}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div 
    initial={{y: -50, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.6, ease: 'easeInOut'}}
    className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
        <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className="w-32 sm:w-40" alt="" />

        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

            <img src={assets.close_icon}className="w-5 absolute top-4 right-4 cursor-pointer sm:hidden" onClick={() => setSidebarOpen(false)}  alt="" />

            <a onClick={() => setSidebarOpen(false)} href="#" className="sm:hover:border-b">Inicio</a>
            <a onClick={() => setSidebarOpen(false)} href="#services" className="sm:hover:border-b">Servicios</a>
            <a onClick={() => setSidebarOpen(false)} href="#our_work" className="sm:hover:border-b">Nuestro Trabajo</a>
            <a onClick={() => setSidebarOpen(false)} href="#contact" className="sm:hover:border-b">Contacto</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />

            <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} className="w-8 cursor-pointer sm:hidden" onClick={() => setSidebarOpen(true)} alt="" />

            <a href="#contac-us"className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all" >Contactar <img src={assets.arrow_icon} width={14} alt="" /></a>
        </div>
    </motion.div>
  )
}

export default Navbar