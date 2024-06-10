import React from 'react';

const User = ({ users }) => {
  const columns = ["Name", "Last Name", "Position"];

  return (
    <div className='flex flex-col items-center p-6'>
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
              <tr key={index} className=' transition duration-300'>
                <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.lastName}</td>
                <td className='border border-gray-300 px-4 py-2'>{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
