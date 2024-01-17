import React, { useState } from 'react'
import axios from 'axios';
function Create() {
    const [data,setdata] = useState({
        name:"",email:"",password:""
    })

    const handleChange=(e)=>{
setdata({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit =async(e)=>{

        try {
            e.preventDefault()
            // console.log("cllk")
            
            const {res} = await axios.post(`http://localhost:5500/api/v1/alluserss`,data)
            alert("data added successfully")
           console.log(res)
        } catch (error) {
            
        }
    }
  return (
    <div>

        <form>
            <input type='text' placeholder='Enter Name'  name='name' value={data.name} onChange={handleChange}/><br />
            <input type='email' placeholder='Enter Email'  name='email' value={data.email} onChange={handleChange}/><br />
            <input type='password' placeholder='Enter Password' name='password' value={data.password} onChange={handleChange}/><br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Create