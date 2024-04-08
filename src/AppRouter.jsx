import React from 'react'
import NavigationBar from '@/customComponents/NavigationBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AppRouter = ({ children }) => {
  const isAuth = useSelector((state) => state.isAuthenticated);
  // console.log(isAuth);
  return (
    <>
      <div className="flex  flex-col overflow-x-hidden">
        <div className="flex w-screen">
          <NavigationBar />
        </div>
        <div className="flex flex-col flex-grow ">
          {children}
        </div>
        
      </div>
    </>
  )
}

export default AppRouter