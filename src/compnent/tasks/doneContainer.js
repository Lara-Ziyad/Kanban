import React, { Component } from 'react'
    //  import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import  Done  from "../Item.js";



class DoneContainer extends Component {
    render() {
        const ContainerStyle = {backgroundColor: '#475C7A', padding:"10px 30px 10px 30px", borderRadius: "0px 0px 5px 5px"}         
        const {doneList, move, delet} = this.props;
        return (
            
            <div>
            <Container className= "mt-3 mb-3"  style={ContainerStyle}>
                
            <h3 className= "mb-2 "style ={{color:"#d8e2dc"}} >Done</h3>
       {
doneList.map((newItem, index) => 
   
<Done
 Task = {newItem.task} // may be need to change
Code = "&#8730;"
move = {move}
Item= {newItem}
color = {newItem.color}
delet = {delet}
index = {index}
/>

)}

</Container>
    
    </div>
            )} }
    
    export default DoneContainer ;