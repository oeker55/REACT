import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decreaseCounter, increaseCounter } from '../actions/counterAction'


export const CounterApp = (props) => {
  
  console.log(props)
  return (
    <div>CounterApp <br/>
     
      <button onClick={props.increaseCounter}>+</button>{"  "}

      count : {props.count}{"  "}
      <button onClick={props.decreaseCounter}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => ({count:state.count})

const mapDispatchToProps =(dispatch)=> {
  return bindActionCreators({increaseCounter, decreaseCounter},dispatch)
  }

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)