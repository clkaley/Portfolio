import React from "react";
import { useEffect, useRef } from "react";
import "./style.css";
import { init } from "ityped";
function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 120,
      strings: ["HTML | CSS", "JavaScript | React"],
    });
  }, []);

  return (
    <div className="container mt-5" id="intro">
      {/* left */}
      <div className="row">
        <div className="col-xl-8 col-md-5 col-xs-12 mt-5 col-sm-12">
          <div className="left mt-2">
            <div className="wrapper">
              <h1 className="title mb-3">Aleyna Çelik</h1>
              <h3
                className="title mb-3 text-muted m-3"
                style={{ color: "#4b4843" }}
              >
                FrontEnd Developer
              </h3>
              <h3 className="">
                <span ref={textRef}></span>
              </h3>
           
            </div>
          </div>
        </div>
        {/* right */}
        <div className="col-xl-4 col-md-6 col-xs-12 col-sm-12">
          <div className="right mt-3">
            {/* <div className="imgContainer">
          <img src="../../assets/intro.jpeg" alt="" />
        </div> */}
            <img
              className="profile"
              width={"100%"}
              src="../../assets/intro.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Intro;
