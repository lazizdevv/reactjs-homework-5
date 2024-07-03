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
    <div className="container">
      <h1 className='text-center text-2xl font-bold bg-gray-500 text-white p-4'>User List:</h1>
      <div className="user-list">
        {users.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
              <div className="user-card  flex  justify-around flex-wrap bg-gray-300">
              <h2 className="user-name   text-xl font-extrabold text-center p-3 bg-gray-300 w-full border hover:bg-slate-400 hover:text-white">{user.name}</h2>
            </div>
            
          </Link>
        ))}
      </div>
    </div>
  );
};
