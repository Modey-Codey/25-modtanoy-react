import React, { useState } from 'react';
import Navbar from './Navbar';
import Admin from './Admin';
import User from './User';

const Home = () => {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showAdminTable, setShowAdminTable] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const addUser = (user) => {
    setUsersData([...usersData, user]);
  };

  const deleteUser = (index) => {
    setUsersData(usersData.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center h-[calc(100vh-64px)]'>
        <h1 className='text-3xl text-center font-bold mt-4'>Generation Thailand React - Assessment</h1>
        <div className='flex justify-evenly mt-10 w-full max-w-3xl'>
          <button
            onClick={() => { setShowUserTable(true); setShowAdminTable(false); }}
            className='border border-black p-4 hover:bg-gray-100 transition duration-300'
          >
            User Home Sector
          </button>
          <button
            onClick={() => { setShowUserTable(false); setShowAdminTable(true); }}
            className='border border-black p-4 hover:bg-gray-100 transition duration-300'
          >
            Admin Home Sector
          </button>
        </div>
        <div className='mt-10 w-full max-w-3xl'>
          {showUserTable && <User users={usersData} />}
          {showAdminTable && <Admin users={usersData} addUser={addUser} deleteUser={deleteUser} />}
        </div>
      </div>
    </>
  );
};

export default Home;
