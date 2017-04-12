import React, {Component} from 'react';
import {Comment, ToggleBar} from '../presentation';
import firebase from 'firebase';
import { Base64 } from 'js-base64';

class Widget extends Component {
  constructor() {
    super();
    this.state = {
      showComments: false,
      commentsArray: [],
      firebase: null
    }
  }

  componentDidMount() {
    const fbApp = firebase.initializeApp({
      apiKey: "AIzaSyAVs1tote0KLaOt5CBLpGqGY3MGnrb8dqQ",
      authDomain: "chat-app-7fc5f.firebaseapp.com",
      databaseURL: "https://chat-app-7fc5f.firebaseio.com",
      projectId: "chat-app-7fc5f",
      storageBucket: "chat-app-7fc5f.appspot.com",
      messagingSenderId: "464213058821"
    });

    this.setState({
      firebase: fbApp
    });

    const path = Base64.encode(window.location.href)+'/comments';

    fbApp.database().ref(path).on('value', (chatapp) => {
      if (chatapp == null)
        return;

      const data = chatapp.val();
      // console.log("Comments Updated: " + JSON.stringify(data));
      this.setState({
        commentsArray: data.reverse()
    });
    });
}

submitComment(event){
  if(event.keyCode != 13)
      return;


  // console.log(`submitComment: ${event.target.value}`);

  const comment = {
    text: event.target.value,
    timestamp: Date.now()
  }
  // console.log(comment)

  let comments = Object.assign([], this.state.commentsArray)

  const path = Base64.encode(window.location.href)+'/comments/' + comments.length;

  this.state.firebase.database().ref(path).set(comment);

  event.target.value = '';

}

toggleComments() {
  console.log(this.state.showComments)
  this.setState({
    showComments: !this.state.showComments
  });
}

render(){
  if (this.state.showComments == true){
    return (
      <div style={style.comments}>
        <div>
          <input onKeyDown={this.submitComment.bind(this)} style={style.input} type="text" placeholder="Enter Comment" />
        </div>
        {
          this.state.commentsArray.map((comment, index) => {
            return <Comment key={comment.timestamp}{...comment}/>
          })
        }

        <ToggleBar onToggle={this.toggleComments.bind(this)}/>
      </div>
    )}
    return (
      <ToggleBar onToggle={this.toggleComments.bind(this)}/>
    )
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
  },
  input: {
    width: 100+'%',
    height: 32,
    border: 'none',
    padding: 6
  }
}


export default Widget;
