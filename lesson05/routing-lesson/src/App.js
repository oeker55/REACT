import { Link,NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser";
import List from "./components/List";
import PersonDetail from "./components/PersonDetail";

function App() {
  const userId=["2","5","8","22","63"]
  return (
    <>
    <div className="App">
    
      <Link to="/">Home Page</Link>
      <Link to="/Link1" style={{ color: "red", display: "block" }}>
        Add User
      </Link>
      <Link style={{ color: "red", display: "block" }} to="/Link2">List</Link>
      {userId.map((id,index)=>(

        <Link key={index} to={`/PersonDetail/${id}`}>User {index+1} <br/> </Link>))
        }
        <NavLink to="/ActiveLink" style={({isActive})=>{return {margin:"1rem", color: isActive ? "green" : "gray"  }} }> Nav Link Sample </NavLink>
          {/* <NavLink className={(isActive)=>{return isActive? "class1": "class2"}} to="/Sample"></NavLink> */}
    
      <Routes>
        <Route path="/ActiveLink" element={<h1>Nav Link </h1>}/>
        <Route index element={<h1>Ana Sayfa</h1>}/>
        <Route path="Link1" element={<AddUser/>}/>
        <Route path="Link2" element={<List/>}/>
        <Route path="*" element={<h1>There is nothing there !!!<br/><b>404 not found</b></h1>}/>
        <Route path="PersonDetail/:personId" element={<PersonDetail/>}/>

        <Route/>
      </Routes>
     
    </div>
    </>
  );
}

export default App;
