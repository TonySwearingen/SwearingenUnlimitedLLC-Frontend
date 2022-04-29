import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import NavBar from './NavBar';
import { useAuth0 } from "@auth0/auth0-react";

function Home() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isUser,setIsUser] = useState([]);

  useEffect(() => {
  if (isAuthenticated){
    fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.nickname,
        manager: false
      }),
    })
      .then((res) => res.json())
      .then((data) => setIsUser(data))
    
  }}, [user])


  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated} />
      <Profile isAuthenticated={isAuthenticated} user={user} />
    </div>
  )
}

export default Home;
