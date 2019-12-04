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
            {"title":"INFOSESSION #1",
            "date":"September 3",
            "time":"8PM",
            "dress":"Campus Casual",
            "location":"219 Dwinelle",},
            {"title":"INFOSESSION #2",
            "date":"September 4",
            "time":"8PM",
            "dress":"Campus Casual",
            "location":"200 Wheeler",},
            {"title":"CASE WORKSHOP",
            "date":"September 5",
            "time":"8PM",
            "dress":"Campus Casual",
            "location":"60 Barrows",
            "inviteOnly":false},
            {"title":"APP. DUE",
            "date":"September 6",
            "time":"8PM",
            "dress":"",
            "location":"phoenix.berkeley.edu/join",
            "inviteOnly":false},
            {"title":"INDIVIDUAL INTERVIEWS",
            "date":"September 8",
            "time":"",
            "dress":"Business Formal",
            "location":"",
            "inviteOnly":true},
            {"title":"SOCIAL ROUND",
            "date":"September 9",
            "time":"",
            "dress":"Campus Casual",
            "location":"",
            "inviteOnly":true},
            {"title":"GROUP INTERVIEWS",
            "date":"September 10",
            "time":"",
            "dress":"Business Formal",
            "location":"",
            "inviteOnly":true},
          ]}
        />
      </div>
      <header className="mt-5">WHY PHOENIX?</header>
      <BlockTexts
        className="mt"
        texts={[
            {"header": "", "body": ["At Phoenix, we offer rigorous professional development workshops for members to prepare for future careers. Our new analysts are guided through a diligent training program, learning to become the future leaders of the organization as well as beyond. However, we also believe that every student needs to take a breath from the stress of university. Our dedicated committee plans exciting socials for members to foster everlasting friendships. Near the end of semesters, our club throws a celebratory banquet for all the hard work completed by our teams. Last semester, we had the opportunity to celebrate on a yacht as we sailed across the Golden Gate Bridge."]},
            {"header": "", "body": ["Riding the bay’s small waves with friends is one thing; with family, another. In Phoenix Consulting, every member is both a mentor and a mentee, creating a unique sense of community where all are invested in each other’s success. Our close-knit family embraces each other’s successes and mistakes. We do not cower to our failures; we admit, learn, and succeed. During recruitment season, everyone prepares together, whether that’s editing resumes, preparing cases, or simply being there for each other during stressful times. None of us are perfect, but every member has a story, something that makes them truly special and full of potential. We want to hear your story and help write your chapter at Phoenix."]},
        ]}
      />
    </div>
  );
}

export default Join;
