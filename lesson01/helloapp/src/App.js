import logo from "./logo.svg";
import "./App.css";
import BlogComp from "./components/Blog.js";
import NewComp1 from "./components/NewComp1";
import NewComp2 from "./components/NewComp2";
import NewComp3 from "./components/NewComp3";
import NewComp4 from "./components/NewComp4";
function App() {
  return (
    <div className="App">
      <h1>TEST</h1>
      <BlogComp  />
      <BlogComp />
      <BlogComp />
      <NewComp1 />
      <NewComp1 />
      <NewComp2 />
      <NewComp3 />
      <NewComp4 />
      <NewComp2 />
      <NewComp2 />
    </div>
    )
 
}

export default App;
