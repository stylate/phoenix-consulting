import React from 'react';
import classNames from 'classnames';
import '../layout/SingleBlockText.css';

const SingleBlockText = (props) => {
  const { header, body, image } = props;
  return (
    <div className={classNames(props.className, "SingleBlockText")}>
      <div className="SingleBlockText__header">{header}</div>
      {image
        ? <div className="SingleBlockText__container">
            <div className="SingleBlockText__body SingleBlockText__body-mr">
              {body.map((paragraph) => {
                return <p>{paragraph}</p>
              })}
            </div>
            <img className="SingleBlockText__image" src={image[Object.keys(image)[0]]} alt="image" />
          </div>
        : <div className="SingleBlockText__body">
            {body.map((paragraph) => {
              return <p>{paragraph}</p>
            })}
          </div>
      }
    </div>
  )
}

export default SingleBlockText;
