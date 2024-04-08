import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ first_name, email, domain, avatar, available, last_name, gender, isAuthenticated }) => {
  const isAvailable = true; // Replace with your actual value

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-gradient-to-tr from-purple-500 to-indigo-700 shadow-lg rounded-lg overflow-hidden mx-auto md:max-w-lg lg:max-w-xl relative"
    >
      <div className="relative z-10">
        <motion.img
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1 }}
          className="h-48 md:h-64 w-full object-cover rounded-full"
          src={avatar}
          alt="Avatar"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-1/2 flex items-end justify-between px-4 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white font-bold text-lg md:text-2xl"
          >
            {first_name} {last_name}
          </motion.div>
          {available && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
              disabled = {!isAuthenticated}
            >
              Add to Team
            </motion.button>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="px-6 py-4 md:px-8 md:py-6 bg-white/80 backdrop-filter backdrop-blur-sm"
      >
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-gray-600 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M22 6l-10 7L2 6" />
          </svg>
          <span className="text-gray-600">{email}</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            className="h-6 w-6 text-gray-600 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s-4-4-4-8a4 4 0 0 1 8 0c0 4-4 8-4 8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-gray-600">{gender}</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            className="h-6 w-6 text-gray-600 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            <path d="M13 11h7" />
          </svg>
          <span className="text-gray-600">{domain}</span>
        </div>
        <div className="flex items-center mt-2">
          <svg
            className="h-6 w-6 text-gray-600 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            {isAvailable ? (
              <path d="M8 12h8" />
            ) : (
              <path d="M8 12l8-8" />
            )}
          </svg>
          <span
            className={`${available ? 'text-green-500' : 'text-red-500'
              } font-medium`}
          >
            {available ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;