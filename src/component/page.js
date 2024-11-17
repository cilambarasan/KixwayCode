import {  Route,Routes } from "react-router-dom";
import Hello from "./dhars";
import Home from "./home";
import Items from "./sec";
import {Log}  from "./login";
import { Forgot } from "./forgot";
import { Men } from "./men";
import { Women } from "./women";
import { Contact } from "./contact";
import { Brand } from "../brand";
import { Final } from "./fin";

function Hii(){
    return(
        <>

           <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="hii" element={<Items/>}/>
              <Route path="signup" element={<Hello/>}/>
              <Route path="login" element={<Log/>}/>
              <Route path="forgot" element={<Forgot/>}/>
              <Route path="men" element={<Men/>}/>
              <Route path="women" element={<Women/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="brand" element={<Brand/>}/>
              <Route path='fin' element={<Final/>}/>
            </Routes>
        </>
    )
}
export default Hii;