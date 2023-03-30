import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserCardGrid from './components/UserCardGrid';

const App = () => {
  const [users, setUsers] = useState([]);
  
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetUsers = async () => {
    nextUsers(count);
    setIsLoading(true);
    const response = await fetch(`https://reqres.in/api/users?page=${count}`);
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  }
  const nextUsers=async ()=>{
    setCount((count) => count +1);
  }

  return (
    <div>
      <Navbar handleGetUsers={handleGetUsers} />
      <UserCardGrid users={users} isLoading={isLoading} />
    </div>
  )
}

export default App;