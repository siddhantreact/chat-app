import React, { useState } from 'react'
import "../Styles/Message.css"
import { auth } from "../firebase/Firebase"


function Message(props) {

  console.log("renders ...from message")

  let fromMessage = props?.from


  const user = auth.currentUser

  const displayedName = user.displayName


  const Url = props.imageUrl


  { console.log(`..............${Url}`) }



//===============================================================>
//test

const date = new Date()

const hours = date.getHours()
const min = date.getMinutes()

let timeZone = null
let minutes = null
let hrs = null


if(hours > 12)
{
   
timeZone = "PM"

}
else{
    timeZone = "AM"

}


if(min<10)
{
   minutes = ` 0${min} `
}
else{
     
    minutes = min
}



if(hours<10)
{
   hrs = ` 0${hours} `
}
else{
     
    hrs = hours
}



console.log(`${hrs}:${minutes} ${timeZone}`)

var timeData = `${hrs}:${minutes} ${timeZone}`






//=============================================================>

  let time = props.timeStamp

  let serverTimeOnMessage = new Date(

    time?.seconds * 1000 + time?.nanoseconds / 1000000

  )




  if (fromMessage == displayedName) {

    var value = "sender"

  }

  else {

    var value = ""
  }





  return (

    <div className={`  main_container   ${value}   `}  >


      <div className='message_container'>


       { (props.message)? <p className='message'>{props.message}</p> : "" }

       {(Url)?<img className='image' src={Url} alt="image"/> : ""}
     

      </div>

      <div className='message_information'>
        <h6>{props.from}</h6>
        {/* <h6 className='chat_message_time_stamp'>{serverTimeOnMessage.toLocaleTimeString()}</h6> */}
        <h6 className='chat_message_time_stamp'>{timeData}</h6>
      </div>



    </div>


  )
}

export default Message
