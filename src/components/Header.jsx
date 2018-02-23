import React, { Component } from "react";
import { ProfileMenu } from "Menu";

class Header extends Component {
  render() {
    return (
      <header className="top-header">
        <ul className="top-header-menu">
          <li className="small-menu-item">
            <a id="side-menu" onClick={e => e.preventDefault()}>
              <i className="la la-bars" aria-hidden="true" />
            </a>
          </li>
          <li className="search-menu-item">
            <div className="app-search">
              <input
                id="app-search-input"
                className="prompt"
                type="text"
                placeholder="Search..."
              />
              <div className="results">
                <ul className="search-result-list">
                  <li className="search-result-group">
                    <div className="result-group">
                      Patient
                    </div>
                    <div className="group-result">
                      <ul className="group-result-list">
                        <li className="search-result">
                          <a className="" onClick={e => e.preventDefault()}>
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Niyaz Hussain</h4>
                              <h5>
                                IDPAT98734590
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" onClick={e => e.preventDefault()}>
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Sathish</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" onClick={e => e.preventDefault()}>
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Sathish</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Patient</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="search-result-group">
                    <div className="result-group">
                      Doctor
                    </div>
                    <div className="group-result">
                      <ul className="group-result-list">
                        <li className="search-result">
                          <a className="" onClick={e => e.preventDefault()}>
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Vijay D</h4>
                              <h5>
                                IDPAT98734590
                                <span className="pull-right">Doctor</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                        <li className="search-result">
                          <a className="" onClick={e => e.preventDefault()}>
                            <div className="result-img">
                              <img
                                className="img-responsive"
                                src="images/user-img.jpg"
                                alt=""
                              />
                            </div>
                            <div className="result-detail">
                              <h4>Saravana Kumar</h4>
                              <h5>
                                IDPAT95464670
                                <span className="pull-right">Doctor</span>
                              </h5>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a onClick={e => e.preventDefault()}>
              <i className="la la-ellipsis-h" aria-hidden="true" />
            </a>
            <div className="head-dropdown-menu left ">
              <ul className="short-link-menu">
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-user" aria-hidden="true" />
                    </span>
                    Profile
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-cog" aria-hidden="true" />
                    </span>
                    Account
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-user" aria-hidden="true" />
                    </span>
                    Profile
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-cog" aria-hidden="true" />
                    </span>
                    Account
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-user" aria-hidden="true" />
                    </span>
                    Profile
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()} className="text-center">
                    <span>
                      <i className="la la-cog" aria-hidden="true" />
                    </span>
                    Account
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a onClick={e => e.preventDefault()}><i className="la la-plus" aria-hidden="true" /></a>
            <div className="head-dropdown-menu left">
              <ul className="dropdown-list">
                <li>
                  <a onClick={e => e.preventDefault()} data-toggle="modal" data-target="#addPatient">
                    <span className="icon">
                      <i className="la la-plus" aria-hidden="true" />
                    </span>
                    {" "}
                    Add New Patient
                  </a>
                </li>
                <li>
                  <a onClick={e => e.preventDefault()}>
                    <span className="icon">
                      <i className="la la-plus" aria-hidden="true" />
                    </span>
                    {" "}
                    Add New Appointment
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="small-menu-item drop-down">
            <a onClick={e => e.preventDefault()}>
              <i className="la la-bell-o" aria-hidden="true" />
              <span className="badge">10</span>
            </a>
            <div className="head-dropdown-menu left">
              <div className="drop-menu-head">
                <a onClick={e => e.preventDefault()} className="pull-right">Mark all as read</a>
                <h5>5 New Notifications</h5>
              </div>
              <ul className="notification-list">
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">
                      <h5>
                        <a onClick={e => e.preventDefault()}>Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">
                      <h5>
                        <a onClick={e => e.preventDefault()}>Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6> is simply dummy text</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="notif-container">
                    <div className="notif-image-box">
                      <div className="notif-user-image">
                        <img
                          className="img-responsive"
                          src="images/user-img.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="notif-detail">

                      <h5>
                        <a onClick={e => e.preventDefault()}>Lorem Ipsum</a>
                        <span className="pull-right">2 days ago</span>
                      </h5>
                      <h6> is simply dummy text</h6>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="notif-more">
                <a onClick={e => e.preventDefault()} className="text-center">Read More</a>
              </div>
            </div>
          </li>
          <li className="small-menu-item">
            <a className="right-menu" onClick={e => e.preventDefault()}>
              <i className="la la-commenting-o" aria-hidden="true" />
              <span className="badge">43</span>
            </a>
          </li>
          <ProfileMenu />
        </ul>
      </header>
    );
  }
}

export default Header;
