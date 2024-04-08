import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './UserCards';
import useFetchUserOnRefresh from '../hooks/useFetchUserOnRefresh';
import Body from './Body';
import { motion } from 'framer-motion';

const NotLoggedIn = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  useFetchUserOnRefresh();
  const dispatch = useDispatch();

  const fetchPerson = async () => {
    try {
      const personData = await fetch(`http://localhost:8080/api/social?page=${page}`, {
        method: "GET",
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const persons = await personData.json();
      console.log('Fetched data:', persons.person);
      setData(persons.person);
      setTotalPages(persons.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching person data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-200 to-indigo-300 h-screen overflow-y-auto">
      <div className="container mx-auto py-8 h-full flex flex-col justify-between">
        <div className="flex flex-wrap justify-center gap-4">
          {!isAuthenticated && isLoading ? (
            <Body />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Array.isArray(data) && data.map((person, index) => (
                <div key={index} className="h-full">
                  <Card
                    isAuthenticated={isAuthenticated}
                    first_name={person.first_name}
                    last_name={person.last_name}
                    email={person.email}
                    phone={person.phone}
                    avatar={person.avatar}
                    available={person.available}
                    gender={person.gender}
                    domain={person.domain}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex justify-between mt-4'>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mx-4"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mx-4"
            onClick={handleNextPage}
            disabled={page === totalPages}
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedIn;