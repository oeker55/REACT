
import '../App.css';
import AddPerson from './AddPerson';
import UserList from './UserList';
import WithAxios from './WithAxios';

function App() {
  return (
    <div className="App">
      <UserList/>
      <WithAxios/>
      <AddPerson/>
     
    </div>
  );
}

export default App;
