import React from 'react'; 

import UserCard from './UserCard'; 

function Listusers({users}) {
  return (
   
    <div>

      {users.map((user)=>( <UserCard key={user.id} user={user}/> ))}
    
   </div>
 
  )
}

export default Listusers;