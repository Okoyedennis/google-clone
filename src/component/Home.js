import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
        <div className="home__languageContainer">
          <p>Google offered in:</p>
          <a href="https://www.google.com/search?q=hausa&oq=haus&aqs=chrome.1.69i57j0i67i131i433j0i67l3.5776j0j9&sourceid=chrome&ie=UTF-8">
            Hausa
          </a>
          <a href="https://www.google.com/search?q=igbo&oq=igbo&aqs=chrome..69i57j0i67l3.1920j0j9&sourceid=chrome&ie=UTF-8">
            Igbo
          </a>
          <a href="https://www.google.com/search?q=ede+yoruba&oq=ede+y&aqs=chrome.1.69i57j0l4j69i60l3.7668j0j7&sourceid=chrome&ie=UTF-8">
            Ede Yoruba
          </a>
          <a href="https://www.google.com/search?q=nigerian+pidgin&oq=nigerian+pidgin&aqs=chrome..69i57j0l3.10807j0j9&sourceid=chrome&ie=UTF-8">
            Nigerian Pidgin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
