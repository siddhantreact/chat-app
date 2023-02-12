import React, { useEffect, useState } from 'react'
import "../Styles/Sidebar.css"
import { Avatar } from "@mui/material"
import { DonutLargeOutlined, ChatOutlined, MoreVertOutlined, Search } from "@mui/icons-material"
import { IconButton } from "@mui/material"

import { Link } from "react-router-dom"

import ChatRoom from './ChatRoom'




import { RoomsData } from './RoomsData'

import { db } from "../firebase/Firebase"

import { collection, addDoc, getDocs } from "firebase/firestore"



// --------------------------------------------------------------->


// 1. need auto id in url when new user created



function Sidebar() {



    const collectionRef = collection(db, "rooms")

    const [roomsfrmServer, setRoomfromServer] = useState([])


    { console.log(roomsfrmServer) }



    useEffect(() => {





        async function getData() {



            const roomDatafrmSrv = await getDocs(collectionRef)


            setRoomfromServer(


                roomDatafrmSrv.docs.map((doc) => {

                    return {

                        name: doc.data().name,

                        id: doc.id
                    }


                })

            )






        }


        getData()

    }, [])











    function addNewMember() {

        const memberName = prompt("enter to add new chat")

        console.log("renders ...from side bar")

        
        addDoc(collectionRef, {

            id: Math.floor(Math.random() * 10000),

            name: memberName


        })





    }








    return (

        <div className='sidebar_main_container'>

            <div className='sidebar_header'>

                <IconButton><Avatar /></IconButton>


                <div className='sidebar_options'>

                    <IconButton> <DonutLargeOutlined /></IconButton>
                    <IconButton><ChatOutlined /></IconButton>

                    <IconButton><MoreVertOutlined /></IconButton>

                </div>

            </div>


            <div className='sidebar_search'>


                <div className='sidebar_search_container'>

                    <IconButton> <Search /></IconButton>

                    <input placeholder='Search or start new Chat' className='search_bar' type={"text"} ></input>

                </div>


            </div>




            <div className='sidebar_chatinfo'>

                <h2 onClick={addNewMember}>Add new Chat</h2>

                {/* ==============================================> */}


                {/* 
                {


                    RoomsData.map((e) => {



                        return <Link  key={e.id}   style={{textDecoration:"none"}}  to={`/room/${e.id}`}><ChatRoom key={e.id} name={e.name} id={e.id}/></Link>
                    })

                } */}







                {/* ------------------>newly added */}

                      {/* ====>  previous code*/}



            </div>


            <div className='chat_rooms_info'>

                {



                    roomsfrmServer.map((e) => {

                        return <Link key={e.id} style={{ textDecoration: "none" }} to={`/room/${e.id}`}><ChatRoom key={e.id} name={e.name} id={e.id} /></Link>

                       


                    })


                }


            </div>







        </div>


    )
}

export default Sidebar










// {



//     roomsfrmServer.map((e) => {

//         return <Link key={e.id} style={{ textDecoration: "none" }} to={`/room/${e.id}`}><ChatRoom key={e.id} name={e.name} id={e.id} /></Link>

//         {/* console.log(` ${id} ${name} `) */ }


//     })




// }