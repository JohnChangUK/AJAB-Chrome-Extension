import React, {Component} from 'react';

export default (props) => {

  const comment = props;

  return (
    <div style={ {padding:12, borderBottom: '1px dotted #ddd'} }>
    {comment.text}
    {console.log(`inside comment: ${comment.text}`)}
    </div>
  )

}
