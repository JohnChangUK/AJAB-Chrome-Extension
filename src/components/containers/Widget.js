import React, {Component} from 'react';
import {ToggleBar} from '../presentation';

class Widget extends Component {
  constructor() {
    super();
  }


submitComment(event){
  if(event.keyCode != 13)
      return;


  console.log(`submitComment: ${event.target.value}`);

  const comment = {
    text: event.target.value,
    timestamp: Date.now()
  }
  event.target.value = '';
}

render(){
  // return (
  //   <div style={style.comments}>
  //     <div>
  //       <input onKeyDown={this.submitComment.bind(this)} type="text" placeholder="Enter Comment" />
  //     </div>
  //   </div>
  // )
  return (<ToggleBar />)
  }

}
const style = {
  comments: {
    zIndex: 100,
    height: 650,
    width: 320,
    position: 'fixed',
    bottom: 0,
    right: 0,
    background: '#f1f9f5'
  }
}


export default Widget;
