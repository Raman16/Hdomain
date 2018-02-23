import React, { Component } from "react";

class LogoBar extends Component {
  render() {
    return (
      <section className="brand-logo-section">
        <div className="pattern-overlay">
          <div className="brand-logo-box">
            <div className="brand-logo-container">
              <div className="logo-img">
                <img className="img-responsive" src="images/logo.png" alt="" />
              </div>
              <div className="brand-name">
                <h3>Medrixo Health</h3>
                <h5>Seamless intelligence</h5>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogoBar;
