import React from "react";
import RenderAll from "./RenderAll";
import UserLogin from "./components/UserLogin/UserLogin";

const App = () => {
  const url = "https://project3-backend-1207.herokuapp.com";
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);

  const getSingleUser = (user) => {
    fetch(url + "/users/" + user.userName + "/" + user.password)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          return setUser(data), setLoggedIn(true);
        } else {
          console.log("Not a user, try again");
        }
      });
  };

  const loaded = () => {
    return <RenderAll url={url} user={user} />;
  };
  const loading = () => {
    return <UserLogin getSingleUser={getSingleUser} />;
  };
  return loggedIn ? loaded() : loading();
};

export default App;
