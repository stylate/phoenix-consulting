import React from 'react';
import MemberImg from './MemberImg.js';
import Members from './Members.json';

const memberGrid = {
  width: "1000px",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "40px"
}

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      members: Members
    };
  }

  render() {
    const memberMap = this.state.members.map((member) =>
          <MemberImg key={member.id} obj={member}/>
      );
    return (
      <div>
      <header>TEAM</header>
      <div style={memberGrid}>
        {memberMap}
      </div>
      </div>
    )
  }
}

export default Team;
