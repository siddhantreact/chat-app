import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


import EmojiPicker from "emoji-picker-react"

import { Popup } from "reactjs-popup"

import "reactjs-popup/dist/index.css"
import { InsertEmoticon } from "@mui/icons-material"


import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"

import "../Styles/Test.css"



function Test() {



  //  const {fname ,lname} = useParams()

  console.log("renders ...from test")


  const storage = getStorage()





  return (
    <div>
      {/* check....    {fname}{lname} */}





      {/* <input type={"file"} onChange={(e) => {


        const storageRef = ref(storage, e.target.files[0].name)

        const uploadTask = uploadBytesResumable(storageRef, e.target.files[0])


        uploadTask.on("state_changed", (snapshot) => {

          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

            console.log(downloadURL)

          })
        }


        )

      }} /> */}






      {/* <img src='https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-c36fc.appspot.com/o/images.png?alt=media&token=f8d5536d-d447-44c6-ab6c-8bcfa1e5bfcd'/> */}





      {/* =========================================================> */}






      <div className='container grid  '>

        <div className=' gridOneContainer '>

            <h2>video calling....</h2>

        </div>


        <div className=' gridTwoContainer'>

          <img src='Images/2.png' />
          <img src='Images/2.png' />

        </div>
   


      </div>










    </div>
  )
}

export default Test
