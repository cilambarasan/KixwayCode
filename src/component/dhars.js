import React, { Component } from 'react';

import { useNavigate } from 'react-router-dom';
import f1 from './images/3.png';
import './dhars.css';

export const Hello = () => {
        const navigate  = useNavigate();
        return (
            <>
               <img className='img' src={f1} alt=""  width="800" height="700" />
                <div className="hello">
        
                    <fieldset><h4  className='field'>SIGN UP HERE!</h4></fieldset>
                    <form>
                             <legend className='kix'>KIXWAY</legend>
                            <input type="TEXT" placeholder="ENTER USERNAME" name="name" id="name" required /><br></br><br></br>
                            <input type="password" placeholder="ENTER PASSWORD" name="pass" id="pass" required /><br></br><br></br>
                            <input type="password" placeholder="CONFIRM PASSWORD" name="pass" id="pass" required /><br></br><br></br>
                            <input type="email" placeholder="ENTER EMAIL" name="pass" id="pass" required /><br></br><br></br>
                     </form>
                 </div>
                 <div className='cen'>
                <center> <button className='sub' onClick={()=>navigate('/')}>CREATE</button></center> <br></br><br></br>
                </div>
                <div className='back'> <button  onClick={()=>navigate(-1)}>back</button></div>
            
                
            </>
        );
    }

 
export default Hello;