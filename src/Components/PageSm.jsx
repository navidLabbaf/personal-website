import React from "react";
import "./PageLg.css";
import { SocialMedia, SidebarData } from "./SidebarData";
import navid from "./mobile2.png";
import navidblue from "./navidblue.png";

function PageSm() {
  return (
    <React.Fragment>
      <div className="container m-0" style={containerBlue}>
        <div className="row">
          <div className="col-12">
            <div style={{ height: "1%" }}></div>
            <img style={navidImgStyle} src={navid} alt="navid" />
            <Context />
          </div>
        </div>
      </div>
      <div className="container m-0" style={containerYellow}>
        <div className="row">
          <div className="col-12 text-center">
            <img style={navidBlueStyle} src={navidblue} alt="navid" />
          </div>
          <div
            className="text-center position-absolute"
            style={{ paddingTop: "32vh" }}
          >
            <Menu />
          </div>
        </div>
        <div className="row jusify-content-center">
          <div>
            <div className="text-center">{<Social />}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
const containerBlue = {
  height: "83vh",
  overflowY: "hidden !important",
  backgroundColor: "#0b2138",
};

const navidImgStyle = {
  position: "absolute",
  width: "90%",
  height: "80%",
  left: "10%",
};
const containerYellow = {
  backgroundColor: "#fbca04",
};
const navidBlueStyle = {
  paddingTop: "5vh",
  width: "90%",
};

const socialLinkStyle = {
  textDecoration: "none",
  color: "#0b2138",
};
const menuLinkStyle = {
  textDecoration: "none",
  color: "#fbca04",
};
const socialListStyle = {
  listStyle: "none",
  textDecoration: "none",
  padding: "20px",
};
const menuListStyle = {
  listStyle: "none",
  textDecoration: "none",
};
const contentTextStyle = {
  position: "absolute",
  left: "25%",
  top: "10%",
};

function Context() {
  return (
    <div style={contentTextStyle}>
      <h4>
        I'm NAVID
        <br />A Curious Student
        <br />
        <br />
        AI/ML <br />
        Researcher
        <br />& RF Engineer
      </h4>
    </div>
  );
}

function Social() {
  return (
    <div>
      {SocialMedia.map((item, index) => {
        return (
          <div
            key={index}
            className={"list-inline-item " + item.cName}
            style={socialListStyle}
          >
            <a href={item.path} style={socialLinkStyle}>
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
}

function Menu() {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return (
          <div key={index} className={item.cName} style={menuListStyle}>
            <div style={{padding:"5px"}}>
              <a href={item.path} style={menuLinkStyle}>
                {item.title}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PageSm;
