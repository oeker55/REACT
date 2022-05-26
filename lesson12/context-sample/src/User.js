import React from 'react'
import { useContext, } from 'react'
import { userContext } from './context/userContext'

export default function User({user}) {
const appData = useContext(userContext)
console.log(appData)
  const inputOnChange =(e)=>{

     appData.changeColor(user.id, e.target.value)   
    }
    console.log(user)
  return (
    <div style={{backgroundColor:user.color}}>
        User.js
    <p> {user.id}</p>
    <h3>{user.name}    {user.surname}</h3>
    <p> {user.color}</p>
    <label>Renk : </label><input  onChange={inputOnChange} ></input>
    

    </div>
  )
}
