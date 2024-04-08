import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, } from "@/components/ui/sheet"
import { RiMenuFoldLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '@/features/userSlice';

const NavigationBar = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.isAuthenticated)
  const handleLogout = async ()=>{
    dispatch(fetchUser({ isAuthenticated: false, user: {}, teams: {}, social: [] }));
    try{

      const res = await fetch('http://localhost:8080/api/user/logout', {
        method: "GET",
        credentials: 'include'
      })

    } catch(e){
      console.log(e.message)
    }

  }
  return (
    <div className='flex w-full bg-[#477cd1] text-white '>
      <motion.div className=' m-2 text-2xl md: basis-1/2 flex-start sm:text-xl basis-3/4 '>
        <Link to='/' ><h1 className='m-1 hover:pointer'>Social🌍</h1></Link>
      </motion.div>
      <div className=' hidden md:flex justify-end md:basis-1/2 text-black m-1 flex-grow'>
        {!isLoggedIn ? (
          <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
            <Link to='/signup' className="px-4 py-2 inline-block">Signup</Link>
          </motion.li>) :
          (
            <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
              <Link to='/team' className="px-4 py-2 inline-block">Team</Link>
            </motion.li>
          )
        }
        {!isLoggedIn ? (
          <motion.li whileHover={{ scale: 1.08 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
            <Link to='/signin' className="px-4 py-2 inline-block">Signin</Link>
          </motion.li>) :
          (
            <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
              <Link to='/' className="px-4 py-2 inline-block" onClick={handleLogout}>logout</Link>
            </motion.li>)
        }
      </div>
      <div className=' m-1 md:hidden flex justify-center'>
        <Sheet className=' bg-[#80ade3]'>
          <SheetTrigger><RiMenuFoldLine /></SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center">
              {
                !isLoggedIn ? (
                  <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
                    <Link to='/signup' className="px-4 py-2 inline-block">Signup</Link>
                  </motion.li>) :
                  (
                    <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
                      <Link to='/team' className="px-4 py-2 inline-block">Team</Link>
                    </motion.li>
                  )
              }              {
                !isLoggedIn ? (
                  <motion.li whileHover={{ scale: 1.08 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
                    <Link to='/signin' className="px-4 py-2 inline-block">Signin</Link>
                  </motion.li>) :
                  (
                    <motion.li whileHover={{ scale: 1.1 }} className="m-2 md:m-3 hover:bg-[#808080] cursor-pointer list-none">
                      <Link to='/' className="px-4 py-2 inline-block" onClick={handleLogout}>logout</Link>
                    </motion.li>)
              }
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default NavigationBar