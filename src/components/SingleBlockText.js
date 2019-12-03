import React from 'react';
import classNames from 'classnames';
import '../layout/SingleBlockText.css';

const SingleBlockText = (props) => {
  const { header, body, images } = props;
  // import image from assets
  return (
    <div className={classNames(props.className, "SingleBlockText")}>
      <div className="SingleBlockText__header">{header}</div>
      {images 
        ? <div className="SingleBlockText__body">{body.map((paragraph) => {
          return <p>{paragraph}</p>
        })}</div> 
        : <div className="SingleBlockText__body">{body.map((paragraph) => {
          return <p>{paragraph}</p>
        })}</div>
      }
    </div>
  )
}

export default SingleBlockText;
