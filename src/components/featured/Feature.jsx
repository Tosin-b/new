import React from "react";
import "./Featured.scss";
const Feature = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect  <i>freelance</i> services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "Building a mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo desgin</button>
            <button>Web design</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
