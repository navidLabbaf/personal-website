import React from "react";
import { SocialMedia, SidebarData } from "./SidebarData";
import "./Experiences.css";

function Experiences() {
  return (
    <React.Fragment>
      <div className="d-none d-lg-block">
        <LargeScreen />
      </div>
      <div className="d-block d-lg-none">
        <SmallScreen />
      </div>
    </React.Fragment>
  );
}

function SmallScreen() {
  return (
    <div style={{ backgroundColor: "#fbca04" }}>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="text-center  fixed-top">
            <div style={{ backgroundColor: "#fbca04" }}>
              <Menu inline={true} />
            </div>
            <div className="text-center" style={{ padding: "20px" }}></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="offset-1 col-10"
            style={{
              color: "#0b2138",
              paddingTop: "40%",
            }}
          >
            <ExperiencesContent />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="text-center">
            <div className="text-center" style={{ padding: "8px" }}></div>
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeScreen() {
  return (
    <React.Fragment>
      <div style={bodyStyle}>
        <div className="container m-0">
          <div className="row">
            <div className="offset-lg-1 col-md-1" style={menuStyle}>
              <div></div>
              <div>
                <Menu />
              </div>
              <div></div>
            </div>
            <div
              className="offset-md-1 offset-lg-1  col-md-9 col-lg-9"
              style={experiencesContentStyle}
            >
              <div></div>
              <div>
                <div className="d-none d-lg-block">
                  <ExperiencesContent scrl1={false} scrl2={true} />
                </div>
                <div className="d-block d-lg-none">
                  <ExperiencesContent scrl1={true} scrl2={true} />
                </div>
              </div>
              <div></div>
            </div>
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
    </React.Fragment>
  );
}

function Menu(props) {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return (
          <div
            key={index}
            className={props.inline ? listInlineItem : "" + item.cName}
            style={menuListStyle}
          >
            <div style={{ padding: "6px" }}>
              <a
                href={item.path}
                style={
                  item.path === "/experiences"
                    ? { textDecoration: "none", color: "#927807" }
                    : menuLinkStyle
                }
              >
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
            className={listInlineItem + item.cName}
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

function ExperiencesContent(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-12">
            <div className="scrl2" style={props.scrl1 ? scrollStyle : {}}>
              <h3 className="d-block d-sm-none">Experiences</h3>
              <p>
                <br />
                <h4 style={dec}>
                  Teaching Assistant
                  <br />
                </h4>
                <p>Zanjan University</p>
                <p>
                  2016 Zanjan<span style={dec}>,</span> Zanjan
                </p>
                <p>
                  <ul>
                    <li>
                      Course title<span style={dec}>: Digital Design</span>{" "}
                      <br />
                    </li>
                    <li>
                      SoftWare and Programming Language
                      <span style={dec}>: VHDL</span>
                      and{" "}
                      <span style={dec}>
                        {" "}
                        Verilog <span style={dec}>-</span> FPGA
                        <span style={dec}>,</span> Quartus
                      </span>
                    </li>
                  </ul>
                </p>
              </p>
              <p>
                Shahid Sattari Aeronautical University Of Science And
                Technologyy
              </p>
              <p>
                2020 Tehran<span style={dec}>,</span> Tehran
              </p>
              <p>
                <ul>
                  <li>
                    {" "}
                    Course title
                    <span style={dec}>:</span> Advanced{" "}
                    <span style={dec}>Antennas</span> and{" "}
                    <span style={dec}>Radio Wave Propagation</span>{" "}
                  </li>
                  <li>
                    {" "}
                    SoftWare and Programming Language
                    <span style={dec}>
                      : CST<span style={dec}>,</span>
                    </span>
                    <br />
                    <span style={dec}> HFSS</span> and{" "}
                    <span style={dec}>
                      ADS <span style={dec}>-</span> MATLAB
                    </span>
                    <br />
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="offset-lg-0 col-lg-6 offset-md-2 col-md-4 col-12">
            <div className="scrl2" style={props.scrl2 ? scrollStyle : {}}>
              <p>
                <br />
                <h4 style={dec}>
                  Work And Internship
                  <br />
                </h4>
                <p style={{ dec }}>Internship TAKTA CO</p>
                <p>2017 Karaj-Alborz</p>
                <p>
                  <ul>
                    <li>
                      Developing technical solutions to complex technical
                      challenges in the areas of{" "}
                      <span style={dec}>Electromagnetics</span>
                    </li>
                    <li>
                      Measuring different <span style={dec}>RF</span> parameters
                    </li>
                  </ul>
                </p>
              </p>
              <p>
                R<span style={dec}>&</span>D Wireless Telecomunication Systems
              </p>
              <p>Hormand</p>
              <p>
                2017-2020 Tehran<span style={dec}>,</span> Tehran
              </p>
              <p>
                <ul>
                  <li>
                    Worked as an <span style={dec}>RF</span> Engineer in various
                    project specific roles with the goal of providing superior
                    engineering service and winning customer confidence
                  </li>
                  <li>
                    Optimized designs based on site coverage objectives
                    <span style={dec}>,</span> drive tests and other field data
                  </li>
                </ul>
              </p>
              <p className="d-block d-sm-none">
                R<span style={dec}>&</span>D Wireless Telecomunication Systems
              </p>
              <p>Sepehr Prdazan</p>
              <p>
                2019<span style={dec}>-</span>present Tehran
                <span style={dec}>,</span> Tehran
              </p>
              <p>
                <ul>
                  <li>
                    Designed and formulated{" "}
                    <span style={dec}>Wireless Systems</span> in different
                    project.
                  </li>
                  <li>
                    Researched and built <span style={dec}>Neural Network</span>{" "}
                    to estimate Direction of Arrival
                    <span style={dec}> (</span>submitted paper
                    <span style={dec}>)</span>
                  </li>
                  <li>
                    Simulated <span style={dec}>Wireless Systems</span> by
                    related software like <span style={dec}>CST</span> and{" "}
                    <span style={dec}>HFSS</span> then created CAD models with
                    <span style={dec}> SolidWorks</span>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const listInlineItem = "list-inline-item ";

const bodyStyle = {
  backgroundColor: "#fbca04",
  height: "100vh",
  fontFamily: "arial",
};
const menuStyle = {
  display: "grid",
  gridTemplateRows: "16vh 33vh auto",
  color: "#0b2138",
};
const experiencesContentStyle = {
  display: "grid",
  gridTemplateRows: "13vh 33vh auto",
  color: "#0b2138",
  fontSize: "12px",
};

const menuListStyle = {
  listStyle: "none",
  textDecoration: "none",
};
const menuLinkStyle = {
  textDecoration: "none",
  color: "#0b2138",
};
const socialListStyle = {
  listStyle: "none",
  textDecoration: "none",
  padding: "20px",
};
const dec = {
  color: "white",
};
const scrollStyle = {
  height: "60vh",
  width: "60vh",
  overflow: "auto",
};

export default Experiences;
