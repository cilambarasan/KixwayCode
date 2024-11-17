import React, { Component } from 'react';
import './component/dhars.css';
import { Link } from 'react-router-dom';
import f1 from './component/images/b1.jpg';
import f2 from './component/images/bi2.jpg';
import f3 from './component/images/b3.jpg';
import f4 from './component/images/b4.jpg';
import f5 from './component/images/b5.jpg';
import f6 from './component/images/b6.jpg';
import f7 from './component/images/b7.jpg';
import f8 from './component/images/b8.jpg';
import f9 from './component/images/b9.jpg';
export const Brand=()=>
{
    return(
        <>
          <Link to={-1} className='wo'style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link>
        <div className='b1'>
            <h4>TOP APPAREL BRANDS</h4>
              <p style={{fontFamily:'cursive'}}> Arrow<br></br>
                U.S. Polo Assn.<br></br>
                Calvin Klein<br></br>
                Tommy Hilfiger<br></br>
                Flying Machine<br></br>
                Aeropostale<br></br>
                Colt<br></br>
                Ruggers<br></br>
                Anahi</p>
        </div>
        <div className='b2'>
        <h4>TOP BEAUTY BRANDS</h4>
              <p style={{fontFamily:'cursive'}}> Sephora Collection<br></br>
                Pixi<br></br>
                Benefit Cosmetic<br></br>
                CLINIQUE<br></br>
                Elizabeth Arden<br></br>
                TOM FORD<br></br>
                Anastasia Beverly Hill<br></br>
                Estee Lauder<br></br>
                HUDA BEAUTY<br></br>
                Make Up For Ever<br></br>
                Bobbi Brown<br></br>
                FOREO<br></br>
                Guerlain</p> 
        </div>
        <div className='b3'>
        <h4>TOP FOOTWEAR BRANDS</h4>
               <p style={{fontFamily:'cursive'}}>Cole Haan
                Tommy Hilfiger<br></br>
                Calvin Klein<br></br>
                U.S. Polo Assn.<br></br>
                Arrow<br></br>
                Flying Machine<br></br>
                Stride<br></br>
                Guess</p>
        </div>
        <div className='b4'>
        <h4>ALL BRANDS</h4>
               <p style={{fontFamily:'cursive'}}>
                 U.S. Polo Assn.<br></br>
                Calvin Klein<br></br>
                Tommy Hilfiger<br></br>
                Flying Machine<br></br>
                Aeropostale<br></br>
                Arrow<br></br>
                AD by Arvind<br></br>
                SHFFL<br></br>
                Donuts<br></br>
                SUGR<br></br>
                Ruggers<br></br>
                Karigari<br></br>
                Anahi</p> 
        </div>
        <div className='bri'>
        <img src={f1} alt='' width='100' height='100' className='bi1'/>
        <img src={f2} alt='' width='100' height='100' className='bi2'/>
        <img src={f3} alt='' width='100' height='100' className='bi3'/>
        <img src={f4} alt='' width='100' height='100' className='bi4'/>
        <img src={f5} alt='' width='70' height='70' className='bi5'/>
        <img src={f6} alt='' width='100' height='100' className='bi6'/>
        <img src={f7} alt='' width='100' height='100' className='bi7'/>
        <img src={f8} alt='' width='100' height='100' className='bi8'/>
        <img src={f9} alt='' width='100' height='100' className='bi9'/>
        </div>
        
        </>
    )
}