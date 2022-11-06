import React, { Component } from 'react';

class Conversation extends Component {
  //should recieve the prop "convo"
  goback =()=>{
    this.props.goback()
  }
  render() {
    return (
      <div >
        {this.props.convo.map(message=>
        <div>
          {message.sender=="self" ? <span>Me:</span>: <span>{this.props.sender} :</span>}
          <span>{message.text}</span>
        </div>)}
        <button className='back' onClick={this.goback}>Go Back</button>
      </div>
    );
  }
}

export default Conversation;
