import { Routes,Route } from "react-router-dom"
import AddUser from "../components/AddUser"
import Expenses from "../components/Expenses"
import Incomes from "../components/Incomes"
import List from "../components/List"
import PersonDetail from "../components/PersonDetail"
import State from "../components/State"



export default function routes() {
  return (
      <Routes>
    <Route path="/ActiveLink" element={<h1>Nav Link </h1>}/>
    <Route index element={<h1>Ana Sayfa</h1>}/>
    <Route path="Link1" element={<AddUser/>}/>
    <Route path="Link2" element={<List/>}/>
    <Route path="*" element={<h1>There is nothing there !!!<br/><b>404 not found</b></h1>}/>
    <Route path="PersonDetail/:personId" element={<PersonDetail/>}/>

    <Route path="/State" element={<State/>} >
        <Route path=":userId" element={<State/>}/>
        <Route path="Incomes" element={<Incomes/>}></Route>
        <Route path="Expenses" element={<Expenses/>}></Route>
    </Route>
    < Route path="/Book/*" element={<div>Book</div>}/>
  </Routes>
   
  )
}
