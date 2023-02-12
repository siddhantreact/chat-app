import React, { useContext, useEffect } from 'react'
import { Avatar, IconButton } from "@mui/material"
import "../Styles/ChatRoom.css"

import { contextTransfer } from '../App'

function ChatRoom(props) {

    console.log("renders ...from Chatroom")
      
  
     
      



    return (
        <div className='chatroom_main_container'>

            <div className='chatroom_info_container'>






                <IconButton><Avatar /></IconButton>
               



                <div className='sidebar_chatroom_info'>
                
                     <h4>{props.name}</h4>
                    <h5>start message...</h5>

                </div>

            </div>

        </div>
    )
}

export default ChatRoom
