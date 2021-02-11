import React from "react";

const Team = () => {
  return (
    <div className="team-component">
      <div className="team-header">
      <h1> Our Team </h1>
      </div>
      <div className="our-team-header">
        <h2 className="team-header-desktop">Our Team</h2>
      </div>
      <div className="flex-team-member-card">
      <div className="team-member-card1">
        <div className="avatar"></div>
        <div className="name-header1">
        <h4>Anny</h4>
        </div>
        <div className="paragraph-team1">
          <p>Front-End/Back-End for user pages.</p>
          </div>
          <div className="paragraph-team1-after">
          <p>Hobbies: Drawing, loves to hike, be out in nature, unfortunately do not have a car so cannot do so that often. 
            .</p>
          </div>

      </div>
      <div className="team-member-card2">
      <div className="avatar"></div>
      <div className="name-header2">
        <h4>Sean</h4>
      </div>
      <div className="paragraph-team2">
          <p>Back-End set-up, configuration and assisted with front-end pages and routes.</p>
          </div>
          <div className="paragraph-team2-after">
          <p>Sean is a fellow student from the General Assembly Software Engineering Immersive. He has two cats.</p>
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
          <div className="paragraph-team3-after">
          <p>blah blah blah something about this awesome team member.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Team;
