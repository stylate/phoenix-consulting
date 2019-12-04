import React from 'react';
import classNames from 'classnames';
import '../layout/RecruitmentTimeline.css';
import RecruitmentBlock from './RecruitmentBlock';

const RecruitmentTimeline = (props) => {
  return (
    <div className={classNames(props.className, "RecruitmentTimeline")}>
      {props.info.map((info) => (
        <RecruitmentBlock
          className="RecruitmentTimeline__block"
          title={info.title}
          date={info.date}
          time={info.time}
          dress={info.dress}
          location={info.location}
          inviteOnly={info.inviteOnly}
        />
      ))}
    </div>
  );
}

export default RecruitmentTimeline;
