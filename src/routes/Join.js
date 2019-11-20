import React from 'react';
import classNames from 'classnames';
import RecruitmentTimeline from '../components/RecruitmentTimeline';
import '../layout/Join.css';

const Join = (props) => {
  return (
    <div className={classNames(props.className, "Join")}>
      <div className="header">RECRUITMENT TIMELINE</div>
      <div className="Join__key">
        <div className="Join__key__square"/>
        <div className="Join__key__text">invite only</div>
      </div>
      <RecruitmentTimeline
        className="mt-3"
        info={[
          {"title":"TITLE",
          "date":"DATE",
          "time":"TIME",
          "dress":"DRESS",
          "location":"LOCATION",},
          {"title":"TITLE",
          "date":"DATE",
          "time":"TIME",
          "dress":"DRESS",
          "location":"LOCATION",},
          {"title":"TITLE",
          "date":"DATE",
          "time":"TIME",
          "dress":"DRESS",
          "location":"LOCATION",
          "inviteOnly":true},
        ]}
      />
    </div>
  );
}

export default Join;
