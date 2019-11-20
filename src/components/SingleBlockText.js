import React from 'react';
import classNames from 'classnames';
import '../layout/SingleBlockText.css';

const SingleBlockText = (props) => {
  return (
    <div className={classNames(props.className, "SingleBlockText")}>
      <div className="SingleBlockText__header">{props.header}</div>
      <div className="SingleBlockText__body">{props.body}</div>
    </div>
  )
}

export default SingleBlockText;
