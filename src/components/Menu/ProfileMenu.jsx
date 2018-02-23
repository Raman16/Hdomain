/* global request */
import React, { Component } from "react";

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.lock = this.lock.bind(this);
    this.logout = this.logout.bind(this);
  }

  lock() {
    alert("Locking Now");
  }

  logout() {
    request
      .post("https://company1.ehr.dev/api/logout", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <li className="user-menu-item drop-down">
        <a onClick={e => e.preventDefault()}>
          <div className="user-detail-box">
            <div className="user-image">
              <img
                className="img-responsive"
                src="images/user-img.jpg"
                alt=""
              />
            </div>
            <div className="User-name">
              <span className="drop-icon pull-right">
                <i className="la la-angle-down" aria-hidden="true" />
              </span>
              <h4 className="hidden-xs hidden-sm">Ajey Vignesh</h4>
              <h5 className="hidden-xs hidden-sm">Doctor</h5>
            </div>
          </div>
        </a>
        <div className="head-dropdown-menu left">
          <div className="prof-img-change">
            <a onClick={e => e.preventDefault()} className="change-user-image">
              <img src="images/user-img.jpg" alt="" />
              <span className="text-center">Change Image</span>
            </a>
            <h4 className="hidden-md hidden-lg text-center">
              Ajey Vignesh
            </h4>
            <h5 className="hidden-md hidden-lg text-center">Doctor</h5>
          </div>
          <ul className="user-set-menu">
            <li>
              <a onClick={e => e.preventDefault()}>
                <i className="la la-user" aria-hidden="true" />
                {" "}
                Profile Settting
              </a>
            </li>
            <li>
              <a onClick={e => e.preventDefault()}>
                <i className="la la-cog" aria-hidden="true" />
                {" "}
                Account Settting
              </a>
            </li>
            <li>
              <a onClick={this.lock}>
                <i className="la la-lock" aria-hidden="true" /> Lock
              </a>
              <a onClick={this.logout}>
                <i className="la la-sign-out" aria-hidden="true" />
                {" "}
                Logout
              </a>
              <span className="clearfix" />
            </li>
          </ul>
        </div>
      </li>
    );
  }
}

export default ProfileMenu;
