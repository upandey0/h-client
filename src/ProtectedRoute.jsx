import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.isAuthenticated);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate('/signin');
//     }
//   }, [isAuthenticated, navigate]);

//   return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;