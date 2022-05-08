import React from 'react'
import { useParams } from 'react-router-dom'

export default function PersonDetail() {
    const params= useParams()

  return (
    <div>PersonDetail
        User---{params.personId}

    </div>
  )
}
// import React, { Component } from 'react'

// export default class PersonDetail extends Component {
//   render() {
//     let params = window.location.pathname.split("/")
//     params = params[params.length-1]
//     // veya ------> let params=window.location.pathname.split("/").pop()
    
//     console.log(params)
//     return (
//       <div>PersonDetail---{params.personId}</div>
//     )
//   }
// }

