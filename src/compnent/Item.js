import React, { Component } from 'react'
//  import PropTypes from "prop-types";
import { Alert, Container, Row, Col} from "react-bootstrap";



class Backlog extends Component {
render() {

    // const firsttRow ={ backgroundColor: '#{color}', borderRadius: "5px"}  
    const secondRow ={fontSize: "1.5rem"}
    const {Task, Code,  move, Item, color, index, delet } = this.props;

 

    return ( 

        <div >
          
     <Row style={{ backgroundColor: `#${color}` }} className="justify-content-md-center  mb-2" >
   
     <Col style={{color:"#eeeeee"}} sm={10}  className = "align-self-center">{Task}</Col>
<Col sm={2} lg="2" className="text-center"  style={secondRow }>
<button onClick = {()=>move(Item.id)} class="btn " type="button">{Code}</button></Col>  
 <Col sm={2} lg="2" className="text-center"  style={secondRow }>
<button onClick = {()=>delet(index)} class="btn " type="button">{Code}</button></Col>  
</Row> 
             {/* function  */}
 
       </div>
        )} }

export default Backlog  ;
