import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import f1 from './images/men1.jpg';
import f2 from './images/men2.jpg';
import f3 from './images/men3.jpg';
import f4 from './images/men4.jpg';
import f5 from './images/image5.jpg';
import f6 from './images/men6.jpg';
import f7 from './images/men7.jpg';
import f8 from './images/men8.jpg';
import f9 from './images/men9.jpg';



export const Men =()=>{
    return(
        <>
        <Link to={-1} style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link>
       
        <div class="card-group">
  <div class="card">
    <img src={f1} class="card-img-top" alt="..." height='500' width='500'/>
    <div class="card-body">
      <h5 class="card-title">T-SHIRTS</h5>
      <p class="card-text"> Made of a stretchy, light, and expensive fabric and are easy to clean.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">BOOTS</h5>
      <p class="card-text">The upper is made of leather, the steel toe cap is made of steel, and the bottom outsoles are made of rubber. </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f3} class="card-img-top" alt="..." height='500' width='500'/>
    <div class="card-body">
      <h5 class="card-title">JACKETS</h5>
      <p class="card-text">Purely made of cotton</p>
      <p class="card-text"><small class="text-muted">Last updated 5 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={f4} class="card-img-top" alt="..." height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Suits</h5>
      <p class="card-text">A Luxirious good for Military Elite and High Political Class</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f5} class="card-img-top" alt="..."  height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Gym Wear</h5>
      <p class="card-text">Stretchy,breathable,moisture-wicking fabric keeps you cool and dry as your heart rate climbs</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f6} class="card-img-top" alt="..." height='500' width='400'/>
    <div class="card-body">
      <h5 class="card-title">Jeans</h5>
      <p class="card-text">New arrivals every week. Explore the new season jeans </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={f7} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Cooler</h5>
      <p class="card-text">Wear your sunglasses on walks round the city</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f8} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Shirts</h5>
      <p class="card-text">Shirts are a stalwart item in a man’s wardrobe</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={f9} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Perfumes</h5>
      <p class="card-text">Takes you to heaven.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </>
    )
}