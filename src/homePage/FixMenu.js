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

  menuHomePage() {
    let container = document.querySelector(".container");
    let controlQosh = document.querySelector(".controlQosh");

    container.classList.add("containerDisplayNone");
    controlQosh.classList.remove("containerDisplayNone");
  }

  render() {
    return (
      <>
        <div className="fixedRight">
          <i className="adjust icon" id="stylee" onClick={this.tema}></i>
          <i
            className="align justify icon ustigaBos"
            id="stylee "
            onClick={this.menuHomePage}
          ></i>
        </div>

        <div className="controlQosh containerDisplayNone">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </>
    );
  }
}

export default FixMenu;
