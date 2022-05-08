import React, { Component } from "react";

export default class UserList extends Component {
  state = { users: [], isLoading: true };
//   constructor() {
//     super();
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) =>
//         setTimeout(() => {
//           this.setState({ users: data, isLoading: false });
//         }, 2000)
//       );
//   }
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) =>
//       setTimeout(() => {
//         this.setState({ users: data, isLoading: false });
//       }, 2000)
//     );
      
//   }

  render() {
    const { users, isLoading=true } = this.state;
    console.log(this.state);
    const getList=()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) =>
        setTimeout(() => {
            this.setState({ users: data, isLoading: false });
        }, 2000)
        );
     
        
        


    }
    const view =users.map((item) => (
      isLoading === true ? <div key={item.id}>
        {item.id}.{item.name} {item.surname}
      </div> : console.log("loading")
    )
  )
    return (
      <div>
          <button onClick={getList}>GET LİST</button>
        <h3>UserList</h3>
        {view}
      </div>
    );
  }
}
