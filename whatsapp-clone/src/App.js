


import "../src/App.css"
import Home from "../src/Components/Home";
import Login from "./Components/Login";


import {Routes , Route,} from "react-router-dom"
import { createContext } from "react";
import Test from "./Components/Test";


var contextTransfer =  createContext()

function App() {



    

 

   return (



   
    


    <div className='App'>

     <div className="app_body">

         

   




         <Routes>


            <Route exact path="/"  element={<Login/>}/> 
            <Route exact path="/room" element={<Home  />} /> 
            <Route exact path="/room/:id" element={<Home  />} /> 


            {/* <Route exact path={"/test/:fname/:lname"} element={<Test/>}/> */}

            <Route exact path={"/test"} element={<Test/>}/> 


         </Routes>

 






     </div>


    </div>

  );
}

export default App;

export {contextTransfer}
