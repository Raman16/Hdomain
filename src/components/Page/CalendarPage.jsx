import React, { Component } from "react";
import Animate from "Animate";

class CalendarPage extends Component {
  render() { 
    return (
      <section className="content-container">
        <div className="container-fluid">
          <div className="cal-appoint-container active-left-menu active-right-menu">
            <aside className="appoint-select-box">
              <div className="side-min-btn left">
                <button>
                  <span className="icon">
                    <i className="la la-bars" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="appoint-select-cover">
                <div className="appoint-select-head">
                  <div className="sq-input-box">
                    <input
                      className="input-text-box"
                      type="text"
                      placeholder="Doctor Search"
                    />
                  </div>
                </div>
                <div className="" style={{ height: "705px" }}>
                  <div className="calapp-list-group">
                    <h4>
                      General Medicine
                      {" "}
                      <span className="overall-count">(05)</span>
                    </h4>
                    <ul className="calapp-lists">
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Padmanaban</h5>
                            <h6>05 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#14bb00" }}
                            >
                              11
                              <span style={{ width: "50%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Niyaz Hussain</h5>
                            <h6>11 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#00bbbb" }}
                            >
                              09
                              <span style={{ width: "90%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Manikandan</h5>
                            <h6>02 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#bb0081" }}
                            >
                              17
                              <span style={{ width: "70%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="calapp-list-group">
                    <h4>Dentist <span className="overall-count">(02)</span></h4>
                    <ul className="calapp-lists">
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Vijay D</h5>
                            <h6>15 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#03a9f4" }}
                            >
                              03
                              <span style={{ width: "30%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Sathish Manohar</h5>
                            <h6>05 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#bb0000" }}
                            >
                              07
                              <span style={{ width: "67%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="calapp-list-box">
                        <div className="calsapp-select-check">
                          <span className="list-uncheck">
                            <i className="fa fa-square-o" aria-hidden="true" />
                          </span>
                          <span className="list-check">
                            <i
                              className="fa fa-check-square-o"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <a className="calapp-detail" onClick={e => e.preventDefault()}>
                          <div className="calapp-img">
                            <img
                              className="img-responsive"
                              src="images/user-img.jpg"
                              alt=""
                            />
                          </div>
                          <div className="calapp-name">
                            <h5>Praveen M S</h5>
                            <h6>02 slot available</h6>
                          </div>
                          <div className="calapp-status">
                            <div
                              className="identity-box"
                              style={{ background: "#63925d" }}
                            >
                              05
                              <span style={{ width: "90%" }} />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="calendar"
                  ref="calendar"
                  className="medrixo-calendar"
                />
              </div>
            </div>
            <aside className="appoint-list-box">
              <div className="side-min-btn right">
                <button>
                  <span className="icon">
                    <i className="la la-bars" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="appoint-list-cover">
                <div className="appoint-list-head">
                  <h4>Appointment Schedule</h4>
                </div>
                <div className="" style={{ height: "705px" }}>
                  <div className="applist-tab-box">
                    <ul className="nav nav-tabs" role="tablist">
                      <li role="presentation" className="active">
                        <a
                          className="scheduled"
                          href="#scheduled"
                          aria-controls="scheduled"
                          role="tab"
                          data-toggle="tab"
                        >
                          <h2>07</h2>
                          Scheduled
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          className="waiting"
                          href="#waiting"
                          aria-controls="waiting"
                          role="tab"
                          data-toggle="tab"
                        >
                          <h2>02</h2>
                          Waiting
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          className="engaged"
                          href="#engaged"
                          aria-controls="engaged"
                          role="tab"
                          data-toggle="tab"
                        >
                          <h2>01</h2>
                          In Take
                        </a>
                      </li>
                      <li role="presentation">
                        <a
                          className="completed"
                          href="#checkout"
                          aria-controls="checkout"
                          role="tab"
                          data-toggle="tab"
                        >
                          <h2>03</h2>
                          Check Out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="appoint-tab-content">
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane active"
                        id="scheduled"
                      >
                        <div className="appoint-list-container">
                          <ul className="appointment-lists">
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#14bb00" }}
                              >
                                09:10<br />AM
                              </span>
                              <h5>Phaneedra</h5>
                              <h6>Scheduled at 11.00AM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#00bbbb" }}
                              >
                                09:30<br />AM
                              </span>
                              <h5>Praveen</h5>
                              <h6>Scheduled at 01.30PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#03a9f4" }}
                              >
                                09:45<br />AM
                              </span>
                              <h5>Akshay Kumar</h5>
                              <h6>Scheduled at 02.45PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#00bbbb" }}
                              >
                                10:15<br />AM
                              </span>
                              <h5>Manigandan</h5>
                              <h6>Scheduled at 04.15PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#14bb00" }}
                              >
                                10:45<br />AM
                              </span>
                              <h5>Prakash</h5>
                              <h6>Scheduled at 04.30PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#bb0081" }}
                              >
                                11:25<br />AM
                              </span>
                              <h5>Ragav Ram</h5>
                              <h6>Scheduled at 04.30PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#63925d" }}
                              >
                                12:00<br />PM
                              </span>
                              <h5>Arul Ginesh</h5>
                              <h6>Scheduled at 04.45PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#63925d" }}
                              >
                                12:20<br />PM
                              </span>
                              <h5>Afsal</h5>
                              <h6>Scheduled at 05.00PM</h6>
                              <button className="btn btn-xs btn-danger-outline checkin-btn">
                                Checkin
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="waiting">
                        <div className="appoint-list-container">
                          <ul className="appointment-lists">
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#14bb00" }}
                              >
                                09:10<br />AM
                              </span>
                              <h5>Phaneedra</h5>
                              <h6>Scheduled at 11.00AM</h6>
                              <button className="btn btn-xs btn-warning-outline checkin-btn">
                                In Take
                              </button>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#00bbbb" }}
                              >
                                09:30<br />AM
                              </span>
                              <h5>Praveen</h5>
                              <h6>Scheduled at 01.30PM</h6>
                              <button className="btn btn-xs btn-warning-outline checkin-btn">
                                In Take
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="engaged">
                        <div className="appoint-list-container">
                          <ul className="appointment-lists">
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#14bb00" }}
                              >
                                03
                              </span>
                              <h5>Akshay Kumar</h5>
                              <h6>Scheduled at 11.00AM</h6>
                              <button className="btn btn-xs btn-success-outline checkin-btn">
                                Check Out
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane" id="checkout">
                        <div className="appoint-list-container">
                          <ul className="appointment-lists">
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#14bb00" }}
                              >
                                03
                              </span>
                              <h5>Phaneedra</h5>
                              <h6>Checked out at 12.00AM</h6>
                            </li>
                            <li className="appointment-list">
                              <span
                                className="identity-box-big"
                                style={{ background: "#00bbbb" }}
                              >
                                01
                              </span>
                              <h5>Praveen</h5>
                              <h6>Checked out at 02.30PM</h6>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  }
}

export default Animate(CalendarPage);
