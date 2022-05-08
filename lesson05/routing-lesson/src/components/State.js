import React from 'react'
import { Outlet,useParams } from 'react-router-dom'


export default function State() {
    let params  = useParams()
  return (
    <div>State{params.userId}
        <Outlet/>
    </div>
  )
}
