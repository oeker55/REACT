import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MovieCard from './MovieCard'
import {RingLoader} from "react-spinners"


export default class MoviesList extends Component {
  render() {
    console.log(this.props)
  
   
      

    const movielist = this.props.movieReducer.movies
    const errorMessage = this.props.movieReducer.error
    const emptyMessage =<p> There are no movie yet..</p>

    const wiev = errorMessage ? errorMessage : movielist.length === 0 ? emptyMessage :
    <Grid>
    <Grid.Row columns={4}>
       {movielist.map((movie)=>{
       return (
    <Grid.Column key ={movie.id} style= {{marginBottom:"15px"}} >
    <MovieCard  movie={movie} deleteMovie={this.props.deleteMovie}/>
    </Grid.Column>)
  })
    }

  </Grid.Row>
  </Grid>
    
     

    console.log(this.props.movieReducer.fetching)
   
    
    return (
      <div>
        <RingLoader size={200} loading={this.props.movieReducer.fetching} />
   {wiev}
  
      </div>
    )
  }
}
