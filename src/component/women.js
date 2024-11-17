import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import f1 from './images/w1.jpg';
import f2 from './images/w2.jpg';
import f3 from './images/w3.jpg';
import f4 from './images/w4.jpg';
import f5 from './images/w5.jpg';
import f6 from './images/w6.jpg';
import f7 from './images/w7.jpg';
import f8 from './images/w8.jpg';
import f9 from './images/w9.jpg';

import './dhars.css'
export const Women=()=>
{
    
    return(
        <>
         <Link to={-1} className='wo'style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link>
        <div class="card-group">
  <div class="card">
    <img src={f1} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Shirts</h5>
      <p class="card-text">Shirts are a stalwart item in a woman’s wardrobe</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f2} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Kurtas</h5>
      <p class="card-text"> These Kurtas are made of linen, cotton and silk</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f3} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Tops</h5>
      <p class="card-text">The design also includes a belt on the waist to give a fitting look.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={f4} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Jeans</h5>
      <p class="card-text">New arrivals every week. Explore the new season jeans</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f5} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Cosmetics</h5>
      <p class="card-text">Own Manufacturing. Under this business model,</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f6} class="card-img-top" alt="..."height='500' width='300'/>
    <div class="card-body">
      <h5 class="card-title">Winter Wear</h5>
      <p class="card-text">Heat up your cold weather</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={f7} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Handbags</h5>
      <p class="card-text">Premium Quality.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f8} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Heels & Flats</h5>
      <p class="card-text">Cushioned Insole with flexible sole</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f9} class="card-img-top" alt="..."height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Jackets</h5>
      <p class="card-text">Stylish Wear</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

        </>
    )
}