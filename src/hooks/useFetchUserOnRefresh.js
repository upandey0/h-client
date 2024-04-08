
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../features/userSlice';

const useFetchUserOnRefresh = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user/getuser', {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();
        console.group(data)
        // Dispatch fetchUser action to store user info in the store
        dispatch(fetchUser({isAuthenticated : true, user : data.user}));
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, [dispatch]); // Dependency array ensures this effect runs only once on mount

  return null; // You can return null or any other value as this hook doesn't render anything
};

export default useFetchUserOnRefresh;
