// User card grid layout component
import React from 'react';
import '../styles/UserCardGrid.css';

const UserCardGrid = ({ users, isLoading }) => {
  return (
    <div className='fetched-data' >
      {isLoading ? (
        <div className='loading-spinner'></div>
      ) : (
        <div className="user-card-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} width={200} height={200}/> 
              <div className='title'> <div className='full-name'>{user.first_name} {user.last_name}</div>
              <div className='email'>{user.email}</div></div>
             
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserCardGrid;