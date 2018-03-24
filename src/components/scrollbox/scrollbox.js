import React from 'react'
import Infobox from '../infobox/infobox'
export default class Scrollbox extends React.Component {

  renderInfo = (text, image) => {
    return(
      <Infobox text={text} image={image}/>
    )
  }
  render(){
    const info1 = this.renderInfo('My pies are cool', 'https://www.fabulousfaces.com/lib/upload/lra1555.jpg')
    const info2 = this.renderInfo('Pi pi', 'https://img.moegirl.org/common/0/0e/PIPI%E7%BE%8E.png')
    return (
      <div>
      {info1}
      {info2}
      </div>
    )
  }
}
