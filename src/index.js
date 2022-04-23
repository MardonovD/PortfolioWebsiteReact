import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LeftHomePage from "./homePage/LeftHomePage.js";
import RightHomePage from "./homePage/RightHomePage.js";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <LeftHomePage />
        <RightHomePage />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector("#root"));
