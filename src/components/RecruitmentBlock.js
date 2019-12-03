import React from 'react';
import classNames from 'classnames';
import '../layout/RecruitmentBlock.css';
import icon from '../assets/recruitmenticon.svg';

const RecruitmentBlock = (props) => {
  return (
    <div className={classNames(props.className, "RecruitmentBlock")}>
      <img
        className={"RecruitmentBlock__icon " + (!props.inviteOnly && "RecruitmentBlock__open")}
        src={icon}
        alt="recruitment-icon"
      />
      <div className="RecruitmentBlock__title">{props.title}</div>
      <div className="RecruitmentBlock__date">
        {props.date}
        <span className="RecruitmentBlock__normal"> at </span>
        {props.time}
      </div>
      <div className="RecruitmentBlock__location">
        {props.dress} &#183; {props.location}
      </div>
    </div>
  );
}

export default RecruitmentBlock;
