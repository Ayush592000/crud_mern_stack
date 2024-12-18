import React, { useState } from 'react'
import NavBar from './NavBar'

const Create = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: ''
  })
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
    console.log(userData)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age } = userData;
    if (!name || !email || !age) {
      return alert("name,email and password are required")
    }
    try {
      const url = "http://localhost:4000/user/signin";
      const response = await fetch(url, {
        "method": "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const result = response.json();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <NavBar />
      <h3 className='d-flex mt-3 justify-content-center align-items-center'>Create User</h3>
      <div className='w-100 d-flex justify-content-center align-items-center'>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" onChange={handleChange} className="form-control" name='name' value={userData.name} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" onChange={handleChange} className="form-control" name='email' value={userData.email} />
          </div>
          <div className="mb-3">
            <label className="form-label">age</label>
            <input type="number" onChange={handleChange} name='age' className="form-control" id="age"
              value={userData.age}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
