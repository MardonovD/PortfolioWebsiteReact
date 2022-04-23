import React from "react";
import img1 from "../img/images.jpg";

class RightHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="imageRight">
        <img src={img1} alt="rasm bor uka " />
      </div>
    );
  }
}

export default RightHomePage;
