import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from './first';
import f1 from './images/order1.jpg'

class Items extends Component {
    state = { Item : [
            {sno:1,item:"SHIRTS",price:9999,avl:10},
            {sno:2,item:"PANTS",price:8499,avl:100},
            {sno:3,item:"JACKETS",price:3999,avl:200},
            {sno:4,item:"T-SHIRT",price:4999,avl:100},
            {sno:5,item:"SHORTS",price:4499,avl:200},
            {sno:6,item:"SHOES",price:3999,avl:15},
            {sno:7,item:"PERFUMES",price:1999,avl:25},
            {sno:8,item:"SUTIS",price:3999,avl:15},
        ] ,a:this.props.a} 
    render() { 
        return (
            <>
           <Link to={-1} className='wo'style={{textDecoration:'none'}}><center><h1 className='kixway' >KIXWAY</h1></center></Link>
            <marquee><h2 style={{color:"black"}}>FLAT 20%OFF</h2></marquee>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>AVAILABLE</th>
                        <th>QUANTITY</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                {this.state.Item.map(d=>
                <>
                 <tbody>
                    <Page sno={d.sno} item={d.item} price={d.price} avl={d.avl}/> 
                 </tbody>
                </>
                )}
                
            </table>
            <h2>{this.state.a}</h2>
            <Link to={'/fin'}><center><img src={f1} height='100' width='100'className='las'></img></center></Link>
          
            </>
        );
    }
}
 
export default Items ;