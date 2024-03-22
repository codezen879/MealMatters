import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Home from './pages/Home';

// import SideBar from './components/sidebar/SideBar';
const LogProtected = (props) => {
  const {Component}=props;
  const navigate=useNavigate();
  useEffect(()=>{
        let donorID=localStorage.getItem('donorID');
    console.log(donorID)
    if(donorID)navigate('/home')
  }) 

  return (
    <div>
      <Component/>
      </div>
  )
}

export default LogProtected