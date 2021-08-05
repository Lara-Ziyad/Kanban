import React, { Component } from 'react'
//  import PropTypes from "prop-types";
import { Alert, Container, Row, Col} from "react-bootstrap";



class Input extends Component {

state = {newItem:""}

  


handelAddNewInput = (event) => {

this.setState ({
  newItem: event.target.value
});
}

handelSubmit = (event) => {

event.preventDefault ();
this.props.handelAddItem (this.state.newItem);
this.setState ({
  newItem:""
});

}


render() {

   

    return (
      

        <div >
          
          <form onSubmit={this.handelSubmit} class="form-inline">
           <input value={this.state.newItem} onChange={this.handelAddNewInput.bind(this)} class="form-control col-8" type="text" placeholder="Enter new Task..." ></input>
           <div class="input-group-append col-4">
                <button  onClick={this.handelSubmit}  class="btn btn-outline-secondary" type="button">Enter</button>
            </div>
        </form>
 
       </div>
        )} }

export default Input  ;
