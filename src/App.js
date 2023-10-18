import React, { useState } from 'react'
import data from './data'
const App = () => {
  const [search,setSearch]=useState('')
  console.log(search)
  return (
    <div>
      <h1 className='text-center text-danger'>List of Users</h1>
      <form className='d-flex justify-content-center align-items-center'>
        <input type="search"  
        className='form-control  ml-3' placeholder='Search user'
          onChange={(e)=>{setSearch(e.target.value)}}
      />
      </form>
      <table className='table table-dark table-bordered lh-3'>
      <thead className='fs-4'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Ip adress</th>
          </tr>
        </thead>
      {data.filter((item)=>{
        return search.toLowerCase()==='' ? item : item.first_name.toLowerCase().includes(search)
      }).map((item)=>(
        <tbody>
        <tr key={item.id} className='table-light lh-lg'>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>{item.gender}</td>
          <td>{item.ip_address}</td>
        </tr>
        </tbody>
      ))}
       </table>
    </div>
  )
}

export default App