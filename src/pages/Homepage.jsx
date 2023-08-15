import React,{useState} from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Home from '../components/home/Home'
import classes from './Homepage.module.css'
const HomePage = () => {
    const [sidebar, handleSidebarState] = useState(false);
  return (
    <>
      <Header handleSidebarState={handleSidebarState}/>
      <div className={classes.main_container}>
        <Sidebar sidebar={sidebar}/>
          <Home/>
      </div>
    </>
  )
}

export default HomePage