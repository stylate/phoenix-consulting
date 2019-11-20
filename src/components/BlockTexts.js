import React from 'react';
import classNames from 'classnames';
import '../layout/BlockTexts.css';
import SingleBlockText from './SingleBlockText';

const BlockTexts = (props) => {
  return (
    <div className={classNames(props.className, "BlockTexts")}>
      <div className="BlockTexts__background"/>
      {props.texts.map((text) => (
        <SingleBlockText
          className="BlockTexts__block"
          header={text.header}
          body={text.body}
        />
      ))}
    </div>
  )
}

export default BlockTexts;
