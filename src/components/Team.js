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
          <p>Anny is a full stack developer from Brooklyn New York who loves to hike, but unfortunately do not own a car to do so often. For this project she handled creating the pie chart and rendering data in transactions page. Also assisted in styling for mobile, desktop and tablet.</p>
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
          <p>Sean is a software engineer residing in Austin, Texas. He has two cats and loves skiing, the outdoors, and soccer. During the creation of Bugtpad, Sean worked on setting up the backend routes using Express, Mongoose, and Mongodb as well the frontend React routes and forms.</p>
          </div>
      </div>
          <div className="team-member-card3">
          <div className="avatar"></div>
          <div className="name-header3">
        <h4>Steven</h4>
        </div>
        <div className="paragraph-team3">
          <p>Steven is born and raised in the Bronx. Steve is a full-stack developer, aspiring to specialize in front-end design. He likes to ride motorcycles during the summer and he also practices stenography, specializing in closed-captioning.
Steve hates strawberry milk and loves chocolate milk.</p>
          </div>
          <div className="paragraph-team3-after">
          <p>Steven is born and raised in the Bronx. Steve is a full-stack developer, aspiring to specialize in front-end design. He likes to ride motorcycles during the summer and he also practices stenography, specializing in closed-captioning.
          Steve hates strawberry milk and loves chocolate milk.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Team;
