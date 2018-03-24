import React from 'react'
import './banner.css'

export default class Banner extends React.Component {
  render(){
    return (
      <div id='fuckfarts' className='bannerContainer'>
        <h1> {this.props.appName} </h1>
      </div>
    )
  }
}
