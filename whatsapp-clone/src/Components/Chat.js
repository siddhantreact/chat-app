import { Avatar, IconButton } from '@mui/material'

import { AttachFile, InsertEmoticon, Mic, MoreVertOutlined, Search, Send, Verified } from "@mui/icons-material"
import React, { useEffect, useMemo, useState } from 'react'
import "../Styles/Chat.css"
import { useParams } from 'react-router-dom'
import { RoomsData } from './RoomsData'
import Message from './Message'

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase/Firebase"

import { db } from "../firebase/Firebase"

import { collection, doc, getDocs, onSnapshot, getDoc, query, Query, addDoc, serverTimestamp } from "firebase/firestore"


import { useCollectionData } from "react-firebase-hooks/firestore"
import { FirebaseError } from 'firebase/app'
import { Firestore } from "firebase/firestore"


import EmojiPicker from "emoji-picker-react"

import { Popup } from "reactjs-popup"

import "reactjs-popup/dist/index.css"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"






function Chat(props) {



  const storage = getStorage()

  const { id } = useParams()


  console.log("renders ...from Chat")

  ///--------------------------------------->


  const [room, setRoom] = useState([])

  const [message, setMessage] = useState([])

  const [imageUrl, setImageUrl] = useState("")




  const collectionRef = collection(db, "rooms")

  const collectionMesgRef = collection(db, "messages")



  //==========================================================================>



  const query = collection(db, `rooms/${id}/messages`)

  const [docs, loading, error] = useCollectionData(query)




  // =========================================================================>








  useMemo(() => {




    async function getData() {

      const roomsData = await getDocs(collectionRef)
      const messageData = await getDocs(collectionMesgRef)

      setRoom(roomsData.docs.map((doc) => {


        return {

          name: doc.data().name,

          id: doc.id

        }
      }

      ))

    }

    getData()



  }, [id])



  //---------------------------------------------------------------->
  //add text to server

  //  setdoc need a id at which we set doc

  //  addDoc creates a random id at given collection






  const user = auth.currentUser






  async function sendTypedTextToServer() {


    const docRef = collection(db, `rooms/${id}/messages`)

    await addDoc(docRef, {

      from: user.displayName,
      message: message,
      timeStamp: serverTimestamp(),
      photoUrl: imageUrl



    })





     setImageUrl("")



  }


  //---------------------------------------------------------------->






  // const selectedChat = RoomsData.find((e) => {

  //   return e.id == id

  // })



  // ---------------------------->newly added code


  const selectedChat = room.find((e) => {

    return e.id == id    //id from url

  })




  return (


    <div className='chat_main_container'>

      <div className='chat_header'>




        <div className='chat_header_options1'>


          <IconButton><Avatar /></IconButton>







          {selectedChat ?

            <div>

              <h4>{selectedChat.name}</h4>
              <h5>last seen at...</h5>


            </div> : <div>

              <h4></h4>
              <h5></h5>


            </div>

          }


























        </div>


        <div className='chat_header_options'>

          {/* <IconButton><Search /></IconButton> */}





          <Popup trigger={<IconButton><AttachFile /></IconButton>}>

            <input type={"file"} className="upload" onChange={

              (e) => {

                const data = e.target.files[0]

                var storageRef = ref(storage, e.target.files[0].name)

                var uploadTask = uploadBytesResumable(storageRef, e.target.files[0])



                if (uploadTask) {
                  uploadTask.on("state_changed", (snapshot) => {

                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                      console.log(downloadURL)
                      setImageUrl(downloadURL)

                    })
                  }
                  )
                }

             
              }
            } />






          </Popup>


          {/* <IconButton><MoreVertOutlined /></IconButton> */}


        </div>

      </div>


      <div className='chat_message_area'>

        {/* <img className='chat_message_image' src='Images/1.jpeg' /> */}




        {/* message body,,,, */}

        {/* ===========================================> */}
        {/* code for messages */}






        {

          docs?.map((e) => {


            return (
              <>
                {/* <div className='chat_message '>

              <p>{e.message}</p>
              <h6 className='chat_message_time_stamp'>12:55pm</h6>

             </div> */}

                <Message message={e.message} key={e.id} timeStamp={e.timeStamp} from={e.from} imageUrl={e.photoUrl} />


              </>
            )




          })



        }



      </div>


      <div className='chat_footer'>

        <div className='chat_footer_container'>



          {/* ===================================================================> */}
          {/* smiley */}





          <Popup  trigger={<InsertEmoticon />}>


            <EmojiPicker  onEmojiClick={(e) => {
              console.log(e.emoji)

              setMessage(e.emoji)
            }

            } />

          </Popup>







          {/* ===================================================================> */}

          <div className='chat_footer_icons_right'>

            <input className='chat_footer_text_area' type={"text"} value={message} onChange={

              (event) => {
                var textMessage = event.target.value

                setMessage(textMessage)

              }} ></input>


            {/* <IconButton><Mic /></IconButton> */}

            <IconButton onClick={() => {
              ///typed text---->
              // console.log(message)

              setMessage("")

              sendTypedTextToServer()

            }} ><Send /></IconButton>

          </div>
        </div>




      </div>

    </div>


  )
}

export default Chat
