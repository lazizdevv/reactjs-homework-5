import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

export const UsersDetail = () => {
  const obj = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${obj.id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      
  }, []);

  return (
    <div className="container my-40">
      <div className="user-detail border flex flex-col w-full md:w-[500px] ml-auto mr-auto  flex-wrap gap-2 justify-center text-center">
      <h2 className=" border  font-bold text-xl p-4 bg-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer ">Name: {user.name}</h2>
      <h2 className=" border  font-bold text-xl p-4 bg-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">User Name: {user.username}</h2>
      <h2 className=" border  font-bold text-xl p-4 bg-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">Email: {user.email}</h2>
      <h2 className=" border  font-bold text-xl p-4 bg-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer">Phone: {user.phone}</h2>
    </div>
    </div>
    
  );
};

