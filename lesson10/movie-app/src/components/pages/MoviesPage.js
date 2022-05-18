import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes  from "prop-types";
import MoviesList from "../MoviesList";


export class MoviesPage extends Component {

  static propTypes = {

    movieReducer: PropTypes.array.isRequired
  } 
    render() {
        console.log(this.props)
    return (
      <div>
        <h1>Movies Page
          <MoviesList movieReducer={this.props.movieReducer}/>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ( {movieReducer:state.movieReducer});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
