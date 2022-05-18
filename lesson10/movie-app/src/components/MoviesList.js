import React from 'react'

export default function MoviesList({movieReducer}) {
    console.log("movieList :",movieReducer)
    const emptyMessage =<p>There are no movie yet... </p>
    const movielist = <div>{movieReducer}</div>
  return (
    <div>MoviesList
        {movieReducer.length === 0 ? emptyMessage : movielist}
    </div>
  )
}
