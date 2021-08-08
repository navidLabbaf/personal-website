import React, { useState } from "react";
import "./PageLg.css";
import { SocialMedia, SidebarData } from "./SidebarData";
import navid from "./navidclick.png";
import navidyellow from "./navidyellow.png";
import yellowBox from "./yellow.png";

function PageLg() {
  const [click, setClick] = useState(false);
  const showClick = () => {
    setClick(!click);
  };
  return (
    <div style={bodyStyle}>
      <div className="position-absolute" style={yellowBoxStyle}>
        {!click ? (
          <img style={yellowBoxImgStyle} src={yellowBox} alt="yellow" />
        ) : (
          ""
        )}
      </div>
      <div className="position-absolute" style={contentStyle}>
        {!click ? (
          <h4 style={contentTextStyle}>
            I'm NAVID
            <br />A Curious Student
            <br />
            <br />
            AI/ML <br />
            Researcher
            <br />& RF Engineer
          </h4>
        ) : (
          ""
        )}
      </div>
      <div className="position-absolute" style={navidStyle}>
        {!click ? (
          <img
            onClick={showClick}
            className="btn"
            style={navidImgStyle}
            src={navid}
            alt="navid"
          />
        ) : (
          <img style={navidImgStyle} src={navidyellow} alt="navid" />
        )}
      </div>

      <div className="container m-0">
        <div className="row">
          <div className="offset-lg-1 col-md-1" style={menuStyle}>
            <div></div>
            <div>{click ? <Menu /> : ""}</div>
            <div></div>
          </div>
          <div className="offset-sm-4 col-sm-6" style={menuStyle}></div>
        </div>
      </div>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="text-center fixed-bottom">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return (
          <div key={index} className={item.cName} style={menuListStyle}>
            <div style={{ padding: "6px" }}>
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
            <a href={item.path} style={menuLinkStyle}>
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
}

const bodyStyle = {
  backgroundColor: "#0b2138",
  height: "100vh",
  fontFamily: "arial",
};
const menuStyle = {
  display: "grid",
  gridTemplateRows: "16vh 33vh auto",
  color: "white",
};

const menuListStyle = {
  listStyle: "none",
  textDecoration: "none",
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
const navidStyle = {
  left: "50%",
  paddingTop: "12vh",
  transform: "translate(-50%, 0)",
  display: "flex",
  flexDirection: "row",
  paddingLeft: "5vh",
};
const navidImgStyle = {
  height: "80vh",
};
const yellowBoxStyle = {
  left: "50%",
  paddingTop: "12vh",
  transform: "translate(-50%, 0)",
  display: "flex",
  flexDirection: "row",
  paddingRight: "66vh",
};
const yellowBoxImgStyle = {
  height: "60vh",
};
const contentStyle = {
  left: "50%",
  paddingTop: "20vh",
  transform: "translate(-50%, 0)",
  display: "flex",
  flexDirection: "row",
  paddingRight: "70vh",
};
const contentTextStyle = {
  height: "60vh",
};

export default PageLg;
