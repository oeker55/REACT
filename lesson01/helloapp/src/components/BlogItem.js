import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class BlogItem extends Component {
 // static propTypes = {second: third}
static propTypes = {name : PropTypes.string.isRequired, age : PropTypes.oneOfType([PropTypes.string,PropTypes.number]), user:PropTypes.shape({id: PropTypes.number, lang: PropTypes.string}) }
 render() {
      let {name, age,user} = this.props;
    return (
      <div>BlogItem
       


      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{user.id}</h1>
      </div>
    )
  }
}
