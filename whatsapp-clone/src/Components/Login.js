import React from 'react'
import "../Components/Login.css"
import { Button } from "@mui/material"
import {signInWithPopup } from "firebase/auth"

import {auth , provider} from "../firebase/Firebase"
import { useNavigate } from 'react-router-dom'



function Login() {

  console.log("renders ...from login")

  const navigate = useNavigate()

  function  singInwithGoogle()
  {

    signInWithPopup(auth , provider)   //sign in method with pop up

    .then((response)=>{

      navigate("/room")

      //  sessionStorage.setItem("displayName" , response.user.displayName )

     console.log(response)

    }).then((error)=>{
        
        console.log(error)
    })
                 //here with provide auth ref to verify the google account ....for verification we provide "google auth provider ref" inside signinwithpopup method


  }



  return (
    <div className='login_container'>

      <img src='Images/2.png' alt='whatsapp_logo' />


      <div className='child_container'>

        <h4>Sign in to whatsApp</h4>

        <Button  onClick={singInwithGoogle}>Proceed</Button>

      </div>


    </div>
  )
}

export default Login
