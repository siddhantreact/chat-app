import React from 'react'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'
import "./Home.css"

function Home(props) {
  return (
    <div className='main_container'>

    <Sidebar/>
    
    <Chat id={props.data}/>
      

      
    </div>
  )
}

export default Home

///chat section layout changes...!!!