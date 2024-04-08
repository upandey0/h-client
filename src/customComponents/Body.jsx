import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'


const Body = () => {
  return (
    <div className='flex  justify-center items-center flex-grow h-full text-[#1f29e0]'>
        <div className='flex  flex-col'>
            <motion.div animate={{ x:  `2vw`, y : '1vh' }} transition={{ delay: 1 }}>
                <h1 className='text-3xl text-center'>We Need To Know You!!</h1>
            </motion.div>
            
            <motion.div animate={{ x:  `2vw`, y : '1vh' }} transition={{ delay: 1 }}>
                <h2 className='text-2xl text-center'>Please Signup or Signin</h2>
            </motion.div>
        </div>
    </div>
)
 
};

export default Body;
