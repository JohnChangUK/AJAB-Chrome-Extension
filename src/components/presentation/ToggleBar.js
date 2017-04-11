import React, {Component} from 'react';

export default (props) => {
  return (
    <div style={ style.container }>
      AJAB ToggleBar Chrome Extension
    </div>
  );
}

const style = {
  container: {
    color: '#fff',
    width: 320,
    position: 'fixed',
    bottom: 0,
    right: 0,
    background: '#000',
    padding: 6
  }
}
