import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const ShowUser = () => {
  const loadedUser = useLoaderData();
  const [users, setUser] = useState(loadedUser);

  const handleDelete = (id)=>{
    fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE',
    })
    .then(res => res.json())
    .then(data => {
        const reaminingUser = users.filter(user => user._id !== id);
        if(reaminingUser !== id){
            alert('Successfully deleted');
        }
        setUser(reaminingUser);
        
    })
    
  }
  return (
    <div className="min-h-screen grid grid-cols-3 gap-4">
      {users.map((user) => (
        <div
          className="rounded-md p-4 mb-4 mt-4  border-2 border-green-300 h-[7rem]"
          key={user._id}
        >
          <p className="text-[1.2rem]">Name: {user.username}</p>
          <p className="text-[1.2rem]">Email: {user.email}</p>
          <button
            className="bg-red-500 rounded-full text-white px-10"
            onClick={() => {
              handleDelete(user._id);
            }}
          >
            Delete
          </button>
          <Link to={`update/${user._id}`}>
            <button className="bg-green-500 rounded-full text-white px-10">
              Edit
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowUser;
