import React from "react";

class LeftHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="containerRight">
        <h1 className="name__heading-1">
          Dos<span className="ton">ton</span>
        </h1>
        <div className="description">
          <div className="iAmDoston">
            <h1 className="nameD">I'm Doston Mardonov</h1>
            <h2 className="heading__2-love">I love Coding..</h2>
          </div>
          <p className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus iste harum commodi. Sed ea tenetur maiores
          </p>
          <div className="links">
            <a href="#" className="myPortfolioLink">
              My Portfolio
            </a>
            <a href="#" className="contactMePortfolio">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftHomePage;
