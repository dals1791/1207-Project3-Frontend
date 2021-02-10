import React from "react";

const Team = () => {
  return (
    <div className="team-component">
      <div className="team-header">
      <h1> Our Team </h1>
      </div>

      <div className="team-member-card1">
        <div className="avatar"></div>
        <div className="name-header1">
        <h4>Anny</h4>
        </div>
        <div className="paragraph-team1">
          <p>Blah blah blah something about this awesome team member.</p>
          </div>
      </div>
      <div className="team-member-card2">
      <div className="avatar"></div>
      <div className="name-header2">
        <h4>Sean</h4>
      </div>
      <div className="paragraph-team2">
          <p>blah blah blah something about this awesome team member.</p>
          </div>
      </div>
          <div className="team-member-card3">
          <div className="avatar"></div>
          <div className="name-header3">
        <h4>Steven</h4>
        </div>
        <div className="paragraph-team3">
          <p>blah blah blah something about this awesome team member.</p>
          </div>
      </div>
    </div>
  );
};

export default Team;
