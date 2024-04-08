import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AppRouter from './AppRouter';
import NotLoggedIn from './customComponents/NotLoggedIn';
import SignInForm from './customComponents/Login';
import SignUpForm from './customComponents/Signup';
import { useSelector, useDispatch } from 'react-redux';
import Body from './customComponents/Body';
import useFetchUserOnRefresh from './hooks/useFetchUserOnRefresh'

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  
  
  

  return (
    <>
      <Routes>
        <Route path="/" element={<AppRouter><NotLoggedIn /></AppRouter>} />
        <Route path="/signin" element={<AppRouter><SignInForm /></AppRouter>} />
        <Route path="/signup" element={<AppRouter><SignUpForm /></AppRouter>} />
        <Route
          path="/user"
          element={<AppRouter><Body /></AppRouter>}
        />
      </Routes>
    </>
  );
}

export default App;