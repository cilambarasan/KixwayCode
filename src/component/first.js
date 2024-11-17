import React, { Component } from 'react';
import Items from './sec';
class Page extends Component {
    state = { count : 0 ,avl : this.props.avl,sno : this.props.sno,item : this.props.item,price:this.props.price,tot:0} 
    render() { 
        return (
            <>
            
               <tr>
                <td>{this.state.sno}</td>
                <td>{this.state.item}</td>
                <td>{this.state.price}</td>
                <td>{this.state.avl}</td>
                <td>
                <button className='btn btn-success m-2' disabled={this.state.avl===0} onClick={()=>this.setState({count : this.state.count+1,avl : this.state.avl-1})}> + </button>
                <span className={this.getColour()}>{this.state.count}</span>
                <button className='btn btn-success m-2' disabled={this.state.count===0} onClick={()=>this.setState({count : this.state.count-1,avl : this.state.avl+1})}> - </button>
                </td>
                <td>{this.state.count*this.state.price}</td>
               </tr>
               
           
               
            </>
        );
       
    }
    a=0;
    getColour()
    {
         let str="badge m-2 bg-";
         str += this.state.count=== 0 ? "danger" : this.state.count < 0? "warning": "secondary";
         return str;
    }
}
 
export default Page;