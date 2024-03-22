import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
// import SideBar from './components/sidebar/SideBar';
const Protected = (props) => {
  const {Component}=props;
  const navigate=useNavigate();
  useEffect(()=>{
        let donorID=localStorage.getItem('donorID');
    console.log(donorID)
    if(!donorID)navigate('/login')
  }) 

  return (
    <div>
      <Component/>
      </div>
  )
}

export default Protected