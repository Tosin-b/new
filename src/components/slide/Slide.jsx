import React from "react";
import "./Slide.scss";

const Slide = ({ children }) => {
  console.log(children)
  return (
    <div className="slide">
      <div className="container">{children}</div>
    </div>
  );
};

export default Slide;

// <div>
// <img src="https://res.cloudinary.com/dwvqxn9fy/image/upload/v1689351522/samples/balloons.jpg" />
// <p className="legend">Legend 1</p>
// </div>
// <div>
// <img src="https://res.cloudinary.com/dwvqxn9fy/image/upload/v1689351522/samples/balloons.jpg" />
// <p className="legend">Legend 2</p>
// </div>
// <div>
// <img src="https://res.cloudinary.com/dwvqxn9fy/image/upload/v1689351522/samples/balloons.jpg" />
// <p className="legend">Legend 3</p>
// </div>
