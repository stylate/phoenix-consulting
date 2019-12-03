import React from 'react';
import classNames from 'classnames';
import '../layout/BlockTexts.css';
import SingleBlockText from './SingleBlockText';

const BlockTexts = (props) => {
  const { texts } = props;
  return (
    <div className={classNames(props.className, "BlockTexts")}>
      <div className="BlockTexts__background"/>
      {texts.map((text) => (
        <SingleBlockText
          className="BlockTexts__block"
          header={text.header}
          body={text.body}
          images={text.images}
        />
      ))}
    </div>
  )
}

export default BlockTexts;
