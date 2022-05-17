import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser, postsFetcher, postsFetcherMiddleware } from "../actions/userActions";


export class User extends Component {
 
  render() {
    const onAdd = () => {
      this.props.addUser("özgür eker");
    };
    const onGetPosts = () => {
      this.props.postsFetcher();
    };
    const onGetUsers=() => {
      this.props.postsFetcherMiddleware()
      
    }

    

    return (
      <div>
        User : <br/>
        <button onClick={onAdd}>addUser</button><hr/>
       FETCHİNG POSTS<br/>
        <button onClick={onGetPosts}>Get Posts</button> <hr/>
       FETCHİNG POSTS PROMİSE MİDDLEWARE <br/>
       <button onClick={onGetUsers}>Get Users with Promise Middleware </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = { addUser, postsFetcher, postsFetcherMiddleware };

export default connect(mapStateToProps, mapDispatchToProps)(User);
