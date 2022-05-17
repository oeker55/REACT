import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userUpdate,getUser } from '../actions/ActionUser'
//WARNING! To be deprecated in React v17. Use componentDidMount instead.

export class User extends Component {
  state={name:" ", surname:" ",userlist:[]}
 

  render() {
   
    
      
  
  
  
    // console.log(this.state)
    // console.log(this.props)
    const onUpdate=()=>{
      
          this.props.userUpdate(this.state.name, this.state.surname);
      }
    
      const  onGet=()=>{
        this.props.getUser()
        setTimeout(() => {
          this.setState({userlist:this.props.users})
          
        },2500);
        
       
      
       
        
      }
 
      
   
      
      // console.log(this.state.userlist)
      return (
        <div>
         
        User-Name:{this.props.name} <br/>
      User-Surname:{this.props.surname}
      <br/>
     name: <input  onChange={(event)=>{this.setState({name:event.target.value})}}></input><br/>
     surname: <input  onChange={(event)=>{this.setState({surname:event.target.value})}}></input> <br/>
<button onClick={onUpdate}>add user</button>
<hr/>
<button onClick={onGet}>Get User List From API</button> <br/>
{this.props.users}
{this.state.userlist.map( (item,index) => {
  return(<li key={index} style={{color:"red", listStyleType:"none"}}>{item}</li>)
  }
  )}

{this.props.errorMessage}<br/>





      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  // console.log(state)
  // console.log(props)
  return state
}
const mapDispatchToProps = {userUpdate, getUser}

export default connect(mapStateToProps, mapDispatchToProps)(User)