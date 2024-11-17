import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import f1 from './images/ti1.jpg';
import f2 from'./images/ho1.jpg';
import f3 from './images/ho2.jpg';
import f4 from './images/ho3.jpg';
import f5 from './images/cart.jpg';
export const Home=() => {
    const navigate=useNavigate();
    return(
        <>
        
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <span className='HOMEKIX'>KIXWAY</span>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" to={'men'}>MEN</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={'women'}>WOMEN</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <Link class="nav-link " to={'brand'} >
                      Brand
                    </Link> 
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " to={'contact'}>Contact Us</Link>
                  </li>
                </ul>
                <form class="d-flex" role="search" action="login.html">
                  <Link to={'hii'}><img className='cart' src={f5} alt='' width='50' height='50'/></Link>
                  <button onClick={()=>navigate('login')}>LOGIN</button>
                </form>
              </div>
            </div>
          </nav>
            
           <div>
             <center> <img src={f1} alt=""/></center>
             <Link to={'women'} className='hoi1'> <img src={f2} alt='' height='255' width='255'/></Link>
             <Link to={'men'} className='hoi2'><img src={f3} alt='' height='255' width='255'/></Link> 
             <img src={f4} alt='' className='Hom' width='500' height='250' ></img>
             </div>
        </>
    )
}
export default Home;