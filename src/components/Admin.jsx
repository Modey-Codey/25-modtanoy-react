import React, { useState } from 'react';

const Admin = ({ users, addUser, deleteUser }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, lastName, position };
    addUser(newUser);
    setName('');
    setLastName('');
    setPosition('');
  };

  const columns = ["Name", "Last Name", "Position", "Action"];

  return (
    <div className='flex flex-col items-center p-6'>
      <h2 className='font-bold text-xl mb-4'>Create User Here</h2>
      <form className='w-full max-w-md mb-6' onSubmit={handleSubmit}>
        <div className='flex flex-col mb-4'>
          <input
            className='border border-gray-300 p-2 rounded mb-2'
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='border border-gray-300 p-2 rounded mb-2'
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            className='border border-gray-300 p-2 rounded mb-2'
            type="text"
            placeholder='Position'
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
          <button className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300'>
            Save
          </button>
        </div>
      </form>

      <div className='w-full max-w-3xl'>
        <table className='min-w-full border border-gray-300'>
          <thead>
            <tr className='bg-gray-100'>
              {columns.map((column, index) => (
                <th key={index} className='border border-gray-300 px-4 py-2 text-left'>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className='hover:bg-gray-50 transition duration-300'>
                <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.lastName}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.position}</td>
                <td className='border border-gray-300 px-4 py-2 text-red-500 text-center cursor-pointer hover:text-red-700 transition duration-300' onClick={() => deleteUser(index)}>
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
