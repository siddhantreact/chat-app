import React from 'react'
import "../Styles/Home.css"
import Sidebar from './Sidebar'

import Chat from './Chat'

function Home(props) {
    return (
        <div className='home_container'>

            <div className='home_sideBar_container'>
    
              

                <Sidebar/>

            </div>

            <div className='home_task_container  grid_three_column'>

               

            <Chat id={props.data}/>

            </div>



        </div>
    )
}

export default Home
