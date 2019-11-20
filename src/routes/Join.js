import React from 'react';
import classNames from 'classnames';
import RecruitmentTimeline from '../components/RecruitmentTimeline';
import BlockTexts from '../components/BlockTexts';
import '../layout/Join.css';

const Join = (props) => {
  return (
    <div className={classNames(props.className, "Join")}>
      <header>RECRUITMENT TIMELINE</header>
      <div className="Join__margin">
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
      <header className="mt-5">WHY PHOENIX?</header>
      <BlockTexts
        className="mt"
        texts={[
            {"header": "my header", "body": "my body"},
            {"header": "my header", "body": "my body"},
            {"header": "my header", "body": "my body"},
            {"header": "my header", "body": "my body"},
        ]}
      />
    </div>
  );
}

export default Join;
