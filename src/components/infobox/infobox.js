import React from 'react'
import './infobox.css'
export default class Infobox extends React.Component {
  render(){
    return (
    <div>
      <p> {this.props.text} </p>
      <img src={this.props.image}/>
    </div>
    )
  }
}
