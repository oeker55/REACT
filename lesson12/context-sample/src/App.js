
import './App.css';
import {useState} from "react"
import UserList from './UserList';
import { userContext } from './context/userContext';

function App() {
  const data=[
    {id: 1,name:"özgür",surname:"eker",color:"red" },
    {id: 2,name:"öznur",surname:"eker",color:"yellow" },
    {id: 3,name:"sabire",surname:"eker",color:"gray" },
    {id: 4,name:"hikmet",surname:"eker",color:"green" }
  ]
  const changeColor = (id,color)=>{
setUsers(
  users.map(item=>(item.id === id ? {...item, color: color}: item))
)
  }
  const [users,setUsers]= useState(data)
  return (
    <userContext.Provider value={{changeColor, users}}>

 <div className="App">
      <UserList/>
  
    </div>

    </userContext.Provider>
  
   
  );
}

export default App;
