import React from "react";
import { SocialMedia, SidebarData } from "./SidebarData";

function Education() {
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
    <div style={{ backgroundColor: "#0b2138" }}>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="text-center  fixed-top">
            <div style={{ backgroundColor: "#0b2138" }}>
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
              color: "white",
              paddingTop: "40%",
            }}
          >
            <EducationContent />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row jusify-content-center">
          <div className="text-center">
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
              className="offset-md-2 offset-lg-1  col-md-8 col-lg-9"
              style={aboutContentStyle}
            >
              <div></div>
              <div>
                <EducationContent />
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
                  item.path === "/education"
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

function EducationContent() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <p>
              <h4 style={dec}>
                Education
                <br />
              </h4>
              <p>Zanjan University</p>
              <p>
                2013<span style={dec}>-</span>2017 Zanjan
                <span style={dec}>,</span> Zanjan
              </p>
              <p>
                <ul>
                  <li>Bachelor of Science in Electrical Engineering</li>
                  <li>
                    Thesis title<span style={dec}>:</span> shrinking in size of
                    antenna by metamaterials{" "}
                  </li>
                  <li>
                    Supervisor<span style={dec}>:</span> Dr
                    <span style={dec}>.</span> Mahmood Rafaei
                    <span style={dec}>-</span>Booket
                  </li>
                  <li>
                    GPA<span style={dec}>:</span> 14<span style={dec}>.</span>85
                    <span style={dec}>/</span>20
                  </li>
                </ul>
              </p>
            </p>
            <p>
              Shahid Sattari Aeronautical University Of Science And Technologyy
            </p>
            <p>
              2018<span style={dec}>-</span>2021 Tehran
              <span style={dec}>,</span> Tehran
            </p>
            <p>
              <ul>
                <li>Master of Science in telecommunications</li>
                <li>
                  Thesis title<span style={dec}>:</span> localization and
                  estimating Direction of Arrival
                  <span style={dec}> (</span>DoA<span style={dec}>)</span> by
                  utilizing Neural Networks
                </li>
                <li>
                  Supervisor<span style={dec}>:</span> Dr
                  <span style={dec}>.</span> Hamid Reza Dalili Oskouei
                </li>
                <li>
                  GPA<span style={dec}>:</span> 3<span style={dec}>.</span>63
                </li>
              </ul>
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <p>
              <h4 style={dec}>
                Language Certificates
                <br />
              </h4>
              <p>TOFEL</p>
              {/*<p>
                Overal<span style={dec}>:</span> 80
              </p>
              <p>
                <ul>
                  <li>
                    Reading<span style={dec}>:</span> 19{" "}
                  </li>
                  <li>
                    Listening<span style={dec}>:</span> 24
                  </li>
                  <li>
                    Speaking<span style={dec}>:</span> 21
                  </li>
                  <li>
                    Writing<span style={dec}>:</span> 16
                  </li>
                </ul></p>*/}
                <p>Booked in November</p>
                <p>GRE</p>
                <p>Booked in October</p>
              </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const listInlineItem = "list-inline-item ";

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
const aboutContentStyle = {
  display: "grid",
  gridTemplateRows: "16vh 33vh auto",
  color: "white",
  fontSize: "12px",
  textAlign: "justify",
  textJustify: "inter-word",
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
const dec = {
  color: "#fbca04",
};
export default Education;
