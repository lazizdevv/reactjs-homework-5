import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className="container my-10">
      <h1 className='text-center text-2xl font-bold bg-gray-300 p-4'>User List:</h1>
      <div className="user-list">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
              <div className="user-card  flex  justify-around flex-wrap ">
              <h2 className="user-name border border-gray-400 text-xl font-extrabold text-center p-3 bg-gray-200 w-full hover:bg-gray-400 hover:text-white">{user.name}</h2>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};
