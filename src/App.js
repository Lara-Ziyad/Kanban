
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


import BacklogContainer from "./compnent/tasks/backlogContainer.js";
import WaitingContainer from "./compnent/tasks/waitingConyainer";
import WorkingContainer from "./compnent/tasks/workingContainer";
//  import WorkingContainer from "./compnent/working/workingContainer";
import DoneContainer  from "./compnent/tasks/doneContainer.js";
//    import photo from "./images/img.jpeg";
import {Container, Col, Row} from "react-bootstrap";
import Input from "./compnent/input"


 

class App extends Component {

  

  state = {
         Tasks :[
                { id:"1",
                  task: "visit my mom",
                  position: 1,
                  color: "FCBB6D",
                  done: true },

                  { id:"2",
                  task: "check on layla",
                  position: 1,
                  color: "FCBB6D", 
                  done: true },

                  { id:"3",
                  task: "go to market",
                  position: 1,
                 color: "FCBB6D",
                 done: true },

                  { id:"4",
                  task: "lorem",
                  position: 1,
                 color: "FCBB6D",
                 done: true }
                ]
          }

               moveFun = (status) => {
                // let backlog, waiting, working, done ;
              let newwaitingItem = this.state.Tasks.map((task) => {
               
                  if (task.id === status && task.position===1) {
                    task.position= task.position + 1;
                    task.color = "685D79";
                    return task;}
                    else if (task.id === status && task.position===2) {
                      task.position= task.position + 1;
                      task.color = "AB6C82";
                      return task;}
                      else if (task.id === status && task.position===3) {
                        task.position= task.position + 1;
                        task.color = "D8737F ";
                        return task;}

                    else return task;

                  });
                      this.setState({
                        Tasks: newwaitingItem,
                      });
                 };

                 addItem = (newItem) => {

                 const Item = {

                      id: this.state.Tasks.length+1,
                      task: newItem ,
                      position: 1,
                    color: "FCBB6D" }

                      console.log(Item);
                      this .setState ({
                        Tasks: [... this.state.Tasks, Item]

                      })
  
                 };

                 deletItem =(taskIndex) => {
                   const newTasks = [...this.state.Tasks];
                   newTasks.splice (taskIndex,1)

                   this.setState({
                    Tasks : newTasks
                  });
                   }
                    



                 

      
         render() {
         
          // let backlog, waiting, working, done ;

  const tobacklog = this.state.Tasks.filter(e1 => e1.position == 1 );
  const towaiting = this.state.Tasks.filter(e2 => e2.position == 2);
  const toworking = this.state.Tasks.filter(e3 => e3.position== 3);
  const todone = this.state.Tasks.filter(e4 => e4.position == 4);


          return (
            
            <div >

<div style = {{backgroundColor:"#5e6472", borderRadius:"5px"}} className = "pt-1 mt-4 ">

<Input handelAddItem = {this.addItem}/>


<Row> 

  <Col> <BacklogContainer  BacklogList = {tobacklog} move = {this.moveFun} delet = {this.deletItem} /></Col>
  <Col>  <WaitingContainer waitingList = {towaiting} move = {this.moveFun}/></Col>
  <Col>  <WorkingContainer workingList = {toworking} move = {this.moveFun}/>  </Col>
  <Col> <DoneContainer doneList = {todone} move = {this.moveFun}/> </Col>
</Row> 

</div>




          </div>) }}

    export default App