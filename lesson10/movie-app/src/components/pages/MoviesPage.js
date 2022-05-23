import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MoviesList from "../MoviesList";
import { fetchMovies, deleteMovie } from "../../actions/movieActions";

export class MoviesPage extends Component {
  // static propTypes = {

  //   movies: PropTypes.array.isRequired
  // };
  componentDidMount() {
    
    this.props.fetchMovies();
  }
  render() {


    console.log(this.props);


    return (
      <div>
        
          <h1 style={{color:"blue"}}>Movies</h1><hr/>
          <MoviesList movieReducer={this.props.state.movieReducer} deleteMovie={this.props.deleteMovie} />
      
        
      </div>
    );
  }
}
// movieReducer={this.props}
const mapStateToProps = (state) => ({
 state
})

const mapDispatchToProps = { fetchMovies, deleteMovie };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
