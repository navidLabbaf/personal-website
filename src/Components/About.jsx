import React from "react";
import { SocialMedia, SidebarData } from "./SidebarData";

function About() {
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
            <div className="text-center"></div>
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
              textAlign: "justify",
              textJustify: "inter-word",
            }}
          >
            <AboutContent />
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
                <AboutContent />
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
                  item.path === "/about"
                    ? { textDecoration: "none", color: "#927807" }
                    : menuLinkStyle
                }
              >
                {item.title}
              </a>
              <br />
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

function AboutContent() {
  return (
    <React.Fragment>
      <h4>How It All Started</h4>

      <p className="text">
        <br />
  
        In my final year of Bachelor
        <span style={dec}>'</span>s studies at Zanjan University
        <span style={dec}>,</span> I became acquainted with the TAKTA Complex
        <span style={dec}>,</span> Iran
        <span style={dec}>'</span>s largest outdoor{" "}
        <span style={dec}>Far-Field</span> and <span style={dec}>RF</span>{" "}
        parameters test
        <span style={dec}>.</span> I applied for an internship after meeting
        with TAKTA employees and managers and was accepted
        <span style={dec}>. </span>
        TAKTA was a once
        <span style={dec}>-</span>in<span style={dec}>-</span>a
        <span style={dec}>-</span>lifetime opportunity
        <span style={dec}>.</span> This helped me gain a deeper knowledge of
        engineering in practice<span style={dec}>.</span> I recognized that in
        order to reach my goals
        <span style={dec}>,</span> I needed to take a step back from books and
        theory in order to improve my engineering skills
        <span style={dec}>.</span> What a long and winding road a researcher
        must travel to make a theory operate in practice
        <span style={dec}>.</span> At TAKTA, I learnt how to measure a variety
        of electromagnetic properties<span style={dec}>,</span> including{" "}
        <span style={dec}>Scattering-Matrix</span>
        <span style={dec}>,</span>
        <span style={dec}> PIM</span>
        <span style={dec}>,</span> <span style={dec}>Pattern,</span> etc
        <span style={dec}>.</span> I used a number of measuring devices
        <span style={dec}>, </span>
        such as <span style={dec}>Vector Analyzer, Spectrum</span> and others
        <span style={dec}>.</span>
        <br /> <br /> My learning progressed to the point where the TAKTA CO
        trusted me and hired me to develop various{" "}
        <span style={dec}>Passive Element</span> projects for a year
        <span style={dec}>. </span>
        TAKTA serves as a springboard for all researchers
        <span style={dec}>,</span> and I was no exception
        <span style={dec}>.</span> Companies working in the field of
        <span style={dec}> Microwave</span> devices and{" "}
        <span style={dec}>Telecommunication Systems</span> had to turn to TAKTA
        to measure their gadgets due to the complex
        <span style={dec}>'</span>s size and grandeur
        <span style={dec}>. </span>
        Therefore<span style={dec}>,</span> I became acquainted with a number of
        these knowledge<span style={dec}>-</span>based companies and worked for
        them for two years<span style={dec}>.</span>
        <br />
        <br /> As a result of these activities<span style={dec}>,</span> I felt
        compelled to study at higher levels in order to broaden my knowledge
        <span style={dec}>.</span> I went to Shahid Sattari Aeronautical
        University to get a Master<span style={dec}>'</span>s degree in{" "}
        <span style={dec}>Telecommunication Engineering.</span> I have not
        limited my activities in the last three years to the subject of
        electromagnetic<span style={dec}>;</span> I have continued my interests
        in a variety of fields<span style={dec}>, </span>
        including<span style={dec}> Mechanical Engineering</span> and
        <span style={dec}> Artificial Intelligence.</span> I went about my
        business as usual<span style={dec}>.</span> I realized my interest in{" "}
        <span style={dec}>Machine Learning</span> after a lot of studying and
        taking relevant courses<span style={dec}>,</span> as well as taking{" "}
        <span style={dec}>Neural Networks</span> courses at the University of
        Tehran<span style={dec}>.</span> Now
        <span style={dec}>,</span> I have deepened my activities in this field
        <span style={dec}>.</span>
      </p>
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
export default About;
