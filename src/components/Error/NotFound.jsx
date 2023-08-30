import React from 'react'
import offline from '../../assets/offline.png'
import classes from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate=useNavigate();
  return (
    <div className={classes.notfound}>
        <img src={offline} alt="You are offline" />
        <h2>You are Offline</h2>
        <button onClick={()=>{navigate('/')}}>Retry</button>
    </div>
  )
}

export default NotFound