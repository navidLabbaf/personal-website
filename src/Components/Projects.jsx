import React from "react";
import { SocialMedia, SidebarData } from "./SidebarData";

function Projects() {
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
            <ProjectsContent />
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
                <ProjectsContent scrl={true} />
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
                  item.path === "/projects"
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

function ProjectsContent(props) {
  return (
    <React.Fragment>
      <div className="scrl" style={props.scrl ? scrollStyle : {}}>
        <p style={{ marginRight: "10px" }}>
          <h4 style={dec}>Papers</h4>{" "}
          <p>
            Title<span style={dec}>:</span>
          </p>
          <p>
            Super<span style={dec}>-</span>resolution Direction finding in
            Uniform Circular Array Antenna based on Transfer Multi
            <span style={dec}>-</span>task Learning with Robustness to
            Imperfections in Array parameters <span style={dec}>(</span>
            Submitted<span style={dec}>)</span>
          </p>
          <p>
            Abstract<span style={dec}>:</span>
          </p>
          <p>
            The use of array antennas in smart antenna systems is a fairly
            popular method<span style={dec}>.</span> Due to the importance of
            omnidirectional in a telecommunication system
            <span style={dec}>,</span> circular arrangement has the advantage
            over linear arrangement<span style={dec}>.</span> Considering
            inherent imperfections such as gain<span style={dec}>,</span> phase
            <span style={dec}>,</span> position and mutual coupling in sensor
            arrays may impair the accuracy of the calculations to such an extent
            that those calculations are devalued<span style={dec}>.</span> The
            effect of such imperfection on the nature of the circular
            arrangement of the array is more significant than the linear
            arrangement of the array<span style={dec}>.</span> Therefore
            <span style={dec}>,</span> articles in Direction of Arrival
            estimation have examined the circular arrangement less than linear
            one<span style={dec}>.</span> In this paper
            <span style={dec}>,</span> we have proposed a framework of Deep
            Neural Network <span style={dec}>(</span>DNN
            <span style={dec}>)</span> to estimate Direction of Arrival with
            remarkable precision<span style={dec}>.</span> This framework
            encompasses Hypothetical Autoencoder<span style={dec}>,</span> Multi
            <span style={dec}>-</span>Task Learning<span style={dec}>,</span>{" "}
            and Transfer<span style={dec}>-</span>Learning techniques
            <span style={dec}>.</span> Hypothetical Autoencoder framework as
            parallel DF estimators addresses the problem
            <span style={dec}>.</span> Each series of estimators is assembled by
            connecting a multi<span style={dec}>-</span>label classifier to
            perform as a spatial filter<span style={dec}>.</span> It also
            provides the capability to estimate more independent signals which
            impinge to the array by using the Transfer Learning technique
            <span style={dec}>.</span> Resulting in this algorithm is capable of
            delivering accurate azimuth estimates when the number of antenna
            elements is insufficient to apply traditional beamspace
            <span style={dec}>-</span>based algorithms<span style={dec}>.</span>{" "}
            Simulations validate that this framework estimates the arrival
            direction of unknown signals in Uniform Circular Arrays
            <span style={dec}>(</span>UCA<span style={dec}>)</span> in presence
            of imperfections perfectly<span style={dec}>.</span>
          </p>{" "}
          <p>
            Title<span style={dec}>:</span>
          </p>
          <p>
            Evaluating which pre<span style={dec}>-</span>trained model is
            suitable for which data by utilizing Separation Index method{" "}
            <span style={dec}>(</span>in progress<span style={dec}>)</span>
          </p>
          <p>
            {" "}
            Abstract<span style={dec}>:</span>
          </p>
          <p>
            In this article<span style={dec}>,</span> we attempt to evaluate the
            many parameters of the learning process using the Seperation Index
            technique<span style={dec}>.</span> In this technique
            <span style={dec}>,</span> we can train pre
            <span style={dec}>-</span>trained models like VGG16
            <span style={dec}>,</span> VGG19 ResNet50 and MobileNet
            <span style={dec}>,</span> with Cifar10 and Cifar100 data in the
            transfer learining method<span style={dec}>.</span> Each of these
            pre<span style={dec}>-</span>trained models is considered as a
            filter<span style={dec}>.</span> With SI<span style={dec}>,</span>{" "}
            we keep track of the training<span style={dec}>.</span> The goal of
            this article is to determin the best and fastest model for spesefic
            data filtering<span style={dec}>,</span> i<span style={dec}>.</span>
            e<span style={dec}>.</span>
            <span style={dec}>,</span> which filter is appropriate for which
            data<span style={dec}>.</span> To be able to find which model in
            which layer has the largest data separation
            <span style={dec}>.</span> We<span style={dec}>'</span>ll notice
            that the largest separation distance<span style={dec}>,</span>
            as expected<span style={dec}>,</span> yielded the best
            classification<span style={dec}>.</span>
          </p>
          <h4 style={dec}>Projects</h4>
          <p>FPGA</p>{" "}
          <ul>
            <li>
              Designed and implemented accurate digital clock with Quartus and
              verilog
            </li>
            <li>
              Designed and implemented simple CPU with Quartus and verilog
            </li>
            <li>Designed and implemented FFT with Quartus and verilog</li>
          </ul>
          <p>AVR</p>
          <ul>
            <li> Implementation of light intensity measurement circuit</li>
            <li>
              Designed USART connection with PC to control and drive Stepper
              motor with Labview
            </li>
            <li>
              Designed Low frequency oscilloscope More than 40 practices and
              projects in Matlab and Simulink
            </li>
          </ul>
          <p>RF and Microwave</p>
          <p>
            Microwave devices I have extensive experiences in design and
            manufacturing passive elements such as Wavequides
            <span style={dec}>,</span> dividers<span style={dec}>,</span> horn
            <span style={dec}>, </span>
            LPDA<span style={dec}>,</span> conical<span style={dec}>,</span> bi
            <span style={dec}>-</span>conical<span style={dec}>,</span>{" "}
            microstrips etc<span style={dec}>.</span> My major is to calculate
            and setup different type of arrays<span style={dec}>.</span>
          </p>{" "}
          <p>AI experiences</p>
          <p>
            <ul>
              <li>
                {" "}
                Text classification and Text generations with RNN
                <span style={dec}>,</span> LSTM<span style={dec}>,</span> GRU
                <span style={dec}>,</span> etc<span style={dec}>.</span>
              </li>
              <li>
                Multi<span style={dec}>-</span>Task classification to detect
                various product of e<span style={dec}>-</span>commerce business
              </li>
              <li>Generate artificial faces with different kind of GANs</li>
            </ul>

            <span style={dec}>.</span>
          </p>
          <p>
            These actions are<span style={dec}>,</span> without a doubt
            <span style={dec}>,</span> a modest part of my overall work in these
            areas<span style={dec}>.</span> I am unable to discuss my industrial
            actions in these areas due to copyright and ethical concerns
            <span style={dec}>,</span> and just a portion of the exercises have
            been discussed<span style={dec}>.</span> If you
            <span style={dec}>'</span>re interested in my field of work
            <span style={dec}>,</span> you may reach out to me via email at{" "}
            <a style={dec} href="mailto: navidlabbaf94@gmail.com">
              navidlabbaf94@gmail.com
            </a>
            <span style={dec}>.</span> The last item I<span style={dec}>'</span>
            m looking into is a novel approach to cluster data in order to
            separate it more effectively<span style={dec}>.</span>
          </p>
        </p>
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
  textDecoration: "none",
};
const scrollStyle = {
  height: "70vh",
  width: "100%",
  overflow: "auto",
};
export default Projects;
