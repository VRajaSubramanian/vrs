import { navLinks } from '@/Data/Data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi"
import {motion} from 'framer-motion';

const Navbar = () => {
  const pathName = usePathname()
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const isActive = (path: string) => {
    return pathName === path ? "text-Red" : "text-Black";
  }

  const menuVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 40,
      transition: {
        type: "tween",
        duration: 0.5
      }
    }
  }
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.1
      }
    }
  }
  return (
    <header className='fixed w-full top-0 left-0 z-20 bg-white'>
      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${showMenu ? "hidden" : ""}`}>
        <div className='flex justify-between items-center h-16 '>
          <Link href="/" className='text-2xl text-Black font-bold'>
            V.R.S Electrical Works<span className='text-Red text-[36px]'>.</span>
          </Link>
          <div className='hidden md:flex items-center space-x-6 justify-center'>{
            navLinks.map(navLink => (
              <Link href={navLink.path}
                key={navLink.path}
                className={`text-sm uppercase font-medium ${isActive(navLink.path)}`}
              >
                {navLink.label}
              </Link>
            ))
          }
          </div>
          <div className='flex md:hidden items-center'>
            <HiOutlineMenuAlt3 className='text-Black cursor-pointer w-6 h-6'
              onClick={() => setShowMenu(!showMenu)} />
          </div>
        </div>
        {showMenu && (
          <div className='flex flex-col md:hidden'>
            {navLinks.map(navLink => (
              <Link href={navLink.path} key={navLink.path} className={`text-sm uppercase font-medium ${isActive(navLink.path)}`}>
                {navLink.label}
              </Link>
            ))}
            <div className='flex items-center justify-end'>
              <HiX className='text-Black cursor-pointer w-6 h-6' onClick={() => setShowMenu(false)} />
            </div>
          </div>
        )}
      </nav>
      <motion.div 
      variants={menuVariants}
      initial="hidden"
      animate={showMenu? "visible" :"hidden"}
      className='bg-WhiteGray fixed top-0 w-16 right-0 h-16 rounded-full'>
      </motion.div>
      <motion.nav 
      variants={navLinkVariants}
      animate={showMenu ?"visible":"hidden"}
      className='h-screen md:hidden flex flex-col justify-center'>
        {
          navLinks.map(navLink => (
            <Link href={navLink.path}
              key={navLink.label}
              className={`px-3 py-4 flex justify-center text-2xl  font-medium ${isActive(navLink.path)}`}
              onClick={(prev) => setShowMenu(!prev)}>
              {navLink.label}
            </Link>
          ))
        }
        <HiX className='absolute text-Black top-11 right-5 w-6 h-6 cursor-pointer' onClick={(prev) => setShowMenu(!prev)} />
      </motion.nav>
    </header>
  )
}

export default Navbar
