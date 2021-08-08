import React from "react";
import { SocialMedia, SidebarData } from "./SidebarData";
import "./Experiences.css";

function Interests() {
  return (
    <React.Fragment>
      <div className="d-none d-sm-block">
        <LargeScreen />
      </div>
      <div className="d-block d-sm-none">
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
            <InterestsContent />
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
              className="offset-md-1 offset-lg-1  col-md-9 col-lg-9"
              style={experiencesContentStyle}
            >
              <div></div>
              <div>
                <div className="d-none d-lg-block">
                  <InterestsContent scrl1={false} scrl2={true} />
                </div>
                <div className="d-block d-lg-none">
                  <InterestsContent scrl1={true} scrl2={true} />
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
                  item.path === "/interests"
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

function InterestsContent() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p>
              <h4 style={dec}>
                Artificial Intelligence Engineering
                <br />
              </h4>
              <p>
                <p
                  className="d-lg-none d-xl-block"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  I have had expertise dealing with Big Data on various projects
                  <span style={dec}>.</span> Because of working in this field
                  <span style={dec}>,</span> I obtained fundamental abilities in
                  Data Visualization<span style={dec}>,</span> Statistic
                  Modeling<span style={dec}>,</span> Clustering and
                  Classification<span style={dec}>.</span> Most of these
                  projects have been done in the telecoms industry and with
                  telecommunication data<span style={dec}>.</span> My
                  fascination in the subjects of Transfer Learning prompted me
                  to participate in a variety of projects
                  <span style={dec}>,</span> both for the sake of gaining
                  experience and for the benefit of science and research
                  <span style={dec}>.</span> It is not a claim that I obtained
                  extensive experiences and skills after two years of work and
                  research<span style={dec}>.</span> The Python programming
                  language is used in Tensorflow and PyTorch for these projects
                  <span style={dec}>.</span> all this<span style={dec}>,</span>
                  accidentally led me to web desgin<span style={dec}>.</span> I
                  <span style={dec}>'</span>m excited to say that I have had
                  experience with HTML
                  <span style={dec}>,</span> CSS<span style={dec}>,</span>{" "}
                  JavaScript<span style={dec}>,</span> React
                  <span style={dec}>,</span>
                  MongoDB<span style={dec}>,</span> jQuery
                  <span style={dec}>,</span> Bootstrap<span style={dec}>,</span>{" "}
                  Node<span style={dec}>.</span>js and Express
                  <span style={dec}>.</span>
                </p>
                <ul>
                  <li>
                    Data Visualization<span style={dec}>,</span> Predictive
                    Analysis<span style={dec}>,</span> Statistic Modeling
                    <span style={dec}>,</span>
                    Training <span style={dec}>&</span> Mentoring
                    <span style={dec}>,</span> Clustering{" "}
                    <span style={dec}>&</span>
                    Classification
                  </li>
                  <li>
                    Data Analytics<span style={dec}>,</span> Data Mining
                    <span style={dec}>,</span> Quantitative Analysis
                    <span style={dec}>,</span> ML and DL Algorithms
                    <span style={dec}>,</span> Model Development
                  </li>
                  <li>
                    Big Data<span style={dec}>,</span> Transfer Learning
                    <span style={dec}>,</span> NLP<span style={dec}>,</span>{" "}
                    GANs
                  </li>
                  <li>
                    Python<span style={dec}>,</span> C<span style={dec}>,</span>{" "}
                    Java<span style={dec}>,</span> JavaScript
                    <span style={dec}>,</span> SQL<span style={dec}>,</span>{" "}
                    Tensorflow<span style={dec}>,</span> Keras
                    <span style={dec}>,</span> OpenCV<span style={dec}>,</span>
                    Numpy<span style={dec}>,</span> PyTorch
                    <span style={dec}>,</span> etc<span style={dec}>.</span>
                  </li>
                </ul>
              </p>
            </p>
          </div>
          <div className="col-12">
            <p>
              <h4 style={dec}>
                RF Engineering
                <br />
              </h4>
              <p>
                <p
                  className="d-lg-none d-xl-block"
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                >
                  Microwave design is my primary area of expertise
                  <span style={dec}>.</span> I<span style={dec}>'</span>ve been
                  designing passive and active RF circuits for over four years
                  <span style={dec}></span>
                  In this discipline<span style={dec}>,</span> I am capable of
                  executing many scenarios for measuring Far-field
                  <span style={dec}>,</span> in addition to mastering laboratory
                  concepts and working with measurement devices such as network
                  analyzer and spectrum analyzers<span style={dec}></span> I
                  created roughly 40 passive components in HFSS
                  <span style={dec}>,</span> CST and ADS softwares
                  <span style={dec}>,</span> then utilized SolidWorks software
                  to find a mechanical model and had piece-making masters build
                  these designs in CNC factories<span style={dec}></span>
                </p>
                <ul>
                  <li>
                    Experience with designing<span style={dec}>,</span>{" "}
                    prototyping<span style={dec}>,</span> evaluating
                    <span style={dec}>,</span> testing and fielding innovative
                    technical solutions
                  </li>
                  <li>Demonstrated strength in electromagnetic theory</li>
                  <li>
                    Experience with using RF design tools such as vector network
                    analyzer<span style={dec}>,</span> spectrum analyzers
                    <span style={dec}>,</span> and smith chart
                  </li>
                  <li>
                    Experience in communications<span style={dec}>,</span>{" "}
                    sensing<span style={dec}>,</span> EW
                    <span style={dec}>,</span> electromagnetics
                    <span style={dec}>,</span>
                    signal processing<span style={dec}>,</span> and RF hardware
                  </li>
                  <li>
                    Extensive experience with CST<span style={dec}>,</span> HFSS
                    <span style={dec}>,</span> ADS and MATLAB
                  </li>
                  <li>
                    Experience in outdoor far-field parameter measurement{" "}
                  </li>
                </ul>
              </p>
            </p>
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

export default Interests;
