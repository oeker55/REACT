import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import { useState } from 'react';


function App() {
  const divStyle = {width:"50%", float:"left", height:"100vh" }
  const bgColor  ={backgroundColor:"#e8cebf"}
  const [isActive, setİsActive]=useState(true)
  
  return (<div> 
      <button style={{marginLeft : "44%"}}   onClick={()=>{ setİsActive(!isActive) }}>ClassComp </button>
        <div className="App">
      {isActive === true ? <div style={divStyle}><FunctionalComponent/></div>  : null  

      }
      
      
      <div style={{...divStyle,...bgColor}}><ClassComponent/></div>
        
    </div>
  </div>

  );
}

export default App;
