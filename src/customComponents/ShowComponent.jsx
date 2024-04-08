import React from 'react'
import NotLoggedIn from './NotLoggedIn';
import Body from './Body';
import { useSelector } from 'react-redux';

const ShowComponent = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    console.log(isAuthenticated)
    
  return (
    <>
         {isAuthenticated ? <Body /> : <NotLoggedIn />}
    </>
  )
}

export default ShowComponent
