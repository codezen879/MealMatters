import React, { useEffect, useState } from 'react'
import './donerDashBoard.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const DonerDashBoard = () => {
  let [data, setData] = useState([]);
    const getTasks = async () => {
      try {
        
        const response = await axios.get(`http://localhost:8000/api/v1/food/getAllDonations`);
        console.log(response)
        setData(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.log(error.message);
      }
    };
  useEffect(()=>{
    getTasks()
  }, [])
  return (
        <div className="Econtainer">
          <div className="tabs">
            <Link to='/activedonation'>
            <button >Active </button></Link>
            <Link to='/accepted'>
            <button>Accepted </button></Link>
            <Link to='/misseddonation'>
            <button  className='bg-[#150664]'>Missed </button></Link>
            <Link to='/historydonation'>
            <button>Review </button></Link>
          </div>
          <div className="tableContainer">
          <table className='border-black'>
        <thead>
          <tr>
            <th>SrNo:</th>
            <th>Donation  Id</th>
            <th>Food Type</th>
            <th>Food Name</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((item, index) => (
  <tr key={index}> {/* Added key prop to avoid React warning */}
    <td>{index + 1}</td>
    <td>{item._id}</td> {/* Replace item.taskId with the actual field name */}
    <td>{item.foodType}</td> {/* Replace item.managerId with the actual field name */}
    <td>{item.foodDetails}</td> {/* Replace item.team with the actual field name */}
    <td>{item.quantity}</td> {/* Replace item.description with the actual field name */}
    <td>{item.expirationDate}</td> {/* Replace item.hoursAlloted with the actual field name */}
    <td>{item.status}</td> {/* Replace item.percentageAssigned with the actual field name */}
    {/* Replace item.startDate with the actual field name */}
  </tr>
))}

        </tbody>
      </table>
          </div>
      
    </div>
  )
}

export default DonerDashBoard