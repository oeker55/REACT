import React, { Component } from 'react'
import { connect } from 'react-redux'
import { UpdateUser,CreateUser, ReadUser, DeleteUser } from '../actions/userAction'



export class User extends Component {
  render() {
      const onUpdate=()=>{
          this.props.UpdateUser("özgür")
         

        //   this.props.dispatch(UpdateUser(name))
      }
      console.log("User Comp.Props ::",this.props)
    return (
      <div>User:{this.props.userReducer}
      <button onClick={onUpdate}>Change the Name</button>
      </div>
    )
  }
}

const mapStateToProps = state =>{return state}
const mapDispatchToProps = {

   UpdateUser, CreateUser, ReadUser, DeleteUser
} 
export default connect(mapStateToProps, mapDispatchToProps)(User)