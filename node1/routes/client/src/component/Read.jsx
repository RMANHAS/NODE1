import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Read() {
    const [users,setUsers] = useState()
    useEffect(()=>{
(async()=>{
    const {data} =await axios.get(`http://localhost:5500/api/v1/showdata`)
    console.log(data.users)
    setUsers(data?.users)
})()
    },[])
  return (
    <div>
        <h1>
            List of users
        </h1>
       {users?.length >0 ? (
        users.map((user)=>(
            <li>{user.name} {user.email} {user.phone}</li>
        ))
       ):(
        <>
        <h6>no user found</h6>
        </>
       )}

 
{/* {
    // users.map((user)=>(user.email))
}
  */}
    </div>
  )
}

export default Read