import React from "react";

class FixMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  tema() {
    let container = document.querySelector(".container");
    let lorem = document.querySelector(".lorem");
    let description = document.querySelector(".description");
    let contactMePortfolio = document.querySelector(".contactMePortfolio");
    let myPortfolioLinkDark = document.querySelector(".myPortfolioLink");
    let dos = document.querySelector(".name__heading-1");
    // qorongu temaga utganda gi xolat..
    container.classList.toggle("rang");
    //
    lorem.classList.toggle("toogleOq");
    //
    description.classList.toggle("toogleOq");
    //
    myPortfolioLinkDark.classList.toggle("myPortfolio");
    //
    contactMePortfolio.classList.toggle("contactPortfolioBlack");
    dos.classList.toggle("toogleOq");
  }

  render() {
    return (
      <div className="fixedRight">
        <i className="adjust icon" id="stylee" onClick={this.tema}></i>
        <i className="align justify icon" id="stylee"></i>
      </div>
    );
  }
}

export default FixMenu;
