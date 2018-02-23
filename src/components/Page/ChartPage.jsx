import React, { Component } from "react";
import Animate from "Animate";

class ChartPage extends Component {
  render() {
    return (
      <section className="content-container appancon-list-left">
        <aside className="appancon-left-container">
          <div className="appancon-header">
            <div className="appancon-search">
              <div className="input-box">
                <input className="input-text-box" type="text" placeholder="Search Patient" />
              </div>
            </div>
          </div>
          <div className="appancon-tab">
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active"><a href="#appancon-today" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="true">Today</a></li>
              <li role="presentation" className=""><a href="#appancon-recent" aria-controls="emr" role="tab" data-toggle="tab" aria-expanded="false">Recent</a></li>
              <li role="presentation"><a href="#appancon-all" aria-controls="billing" role="tab" data-toggle="tab">All</a></li>
            </ul>
            <div className="tab-content">
              <div role="tabpanel" className="tab-pane active" id="appancon-today">
                <ul className="cont-list t-app">
                  <li className="active">
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">9:00<br />AM</div>
                      <div className="app-name">Akshay Kumar</div>
                      <div className="app-reason">Visit for body pain</div>
                      <div className="app-status intake">In take</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time" >9:30<br />AM</div>
                      <div className="app-name">Phaneendra</div>
                      <div className="app-reason">Visit for fever</div>
                      <div className="app-status waiting">Waiting</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">9:45<br />AM</div>
                      <div className="app-name">Niyaz Hussain</div>
                      <div className="app-reason">Visit for stomach ache</div>
                      <div className="app-status waiting">Waiting</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">10:30<br />AM</div>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-reason">Visit for Cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">10:45<br />AM</div>
                      <div className="app-name">Sugumar</div>
                      <div className="app-reason">Visit for cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">12:30<br />PM</div>
                      <div className="app-name">Vijay</div>
                      <div className="app-reason">Visit for fever</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">10:30<br />AM</div>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-reason">Visit for Cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">10:45<br />AM</div>
                      <div className="app-name">Sugumar</div>
                      <div className="app-reason">Visit for cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-time">12:30<br />PM</div>
                      <div className="app-name">Vijay</div>
                      <div className="app-reason">Visit for fever</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane" id="appancon-recent">
                <ul className="cont-list r-app">
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Akshay Kumar</div>
                      <div className="app-reason">Visited for body pain</div>
                      <div className="app-status checkedout">9.45AM</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Phaneendra</div>
                      <div className="app-reason">Visited for fever</div>
                      <div className="app-status checkedout">9.35AM</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Niyaz Hussain</div>
                      <div className="app-reason">Visited for stomach ache</div>
                      <div className="app-status checkedout">9.32AM</div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-reason">Visited for Cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Sugumar</div>
                      <div className="app-reason">Visited for cold</div>
                      <div className="app-status"></div>
                    </a>
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane" id="appancon-all">
                <ul className="cont-list">
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Akshay Kumar</div>
                      <div className="app-about"><b>PAT284765</b> <span className="pull-right">+91 9004762487</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Phaneendra</div>
                      <div className="app-about"><b>PAT252465</b> <span className="pull-right">+91 9546872354</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Niyaz Hussain</div>
                      <div className="app-about"><b>PAT448765</b> <span className="pull-right">+91 8564125796</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-about"><b>PAT042104</b> <span className="pull-right">+91 9563217542</span></div>
                    </a>
                  </li>
                  <li>
                    <a href="" onClick={e => e.preventDefault()}>
                      <div className="app-name">Sugumar</div>
                      <div className="app-about"><b>PAT412472</b> <span className="pull-right">+91 9856154682</span></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div className="pat-profile">
          <aside className="pat-overview hidden-xs hidden-sm">
            <div className="pat-abt">
              <button className="btn abt-edit"><span className="icon"><i className="la la-edit"></i></span> Edit</button>
              <div className="pat-avatar">
                <img src="images/user-img.jpg" alt="" />
              </div>
              <div className="pat-name">Akshay Kumar</div>
              <div className="pat-id">PAT284765</div>
              <ul className="abt-list">
                <li><span className="abt-topic">GENDER</span> Male</li>
                <li><span className="abt-topic">AGE</span> 22</li>
                <li><span className="abt-topic">BLOOD GROUP</span> B+ve</li>
                <li><span className="abt-topic">PHONE</span> +91 9004762487</li>
                <li><span className="abt-topic">EMAIL</span> akshaykumar@gmail.com</li>
              </ul>
            </div>
            <div className="pat-tab">
              <ul className="pat-tab-list">
                <li className="active"><a href="" onClick={e => e.preventDefault()}>Charting</a></li>
                <li><a href="" onClick={e => e.preventDefault()}>Billing</a></li>
              </ul>
            </div>
            <div className="pat-medline">
              <div className="pat-groups">
                <div className="m-topic">Groups</div>
                <ul className="m-group-list">
                  <li>Smoking</li>
                  <li>Diabetics</li>
                  <li>Allergy</li>
                </ul>
              </div>
              <div className="pat-history">
                <div className="m-topic">Medical History</div>
                <ul className="m-history-list">
                  <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                  <li>printing and typesetting</li>
                  <li>text industry</li>
                  <li>Lorem Ipsum is simply dummy</li>
                </ul>
              </div>
            </div>
          </aside>
          <div className="patient-prof-container hidden-md hidden-lg">
            <div className="patient-prof-cover">
              <img className="pat-image" src="images/user-img.jpg" alt="" />
              <button className="btn abt-edit"><span className="icon"><i className="la la-edit"></i></span> Edit</button>
              <div className="row">
                <div className="col-xs-12 col-sm-7 col-md-4">
                  <div className="pat-detail">
                    <h3>Akshay Kumar <span className="badge">IDPAT0085326</span></h3>
                    <div className="pd-der">
                      22yrs <span className="icon"><i className="fa fa-circle"></i></span>Male <span className="icon"><i className="fa fa-circle"></i></span> B+ve
                                        </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-4">
                  <div className="pat-contact">
                    <div className="pc-detail"><span className="icon"><i className="la la-phone"></i></span>+91 9004762487</div>
                    <div className="pc-detail"><span className="icon"><i className="la la-envelope"></i></span>akshaykumar@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pat-main-tab">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation" className=""><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false">Charting</a></li>
                <li role="presentation" className="active"><a href="#billing" aria-controls="billing" role="tab" data-toggle="tab" aria-expanded="true">Billing</a></li>
                <li role="presentation" className=""><a href="#emr" aria-controls="emr" role="tab" data-toggle="tab" aria-expanded="false">Medical History</a></li>
              </ul>
            </div>
          </div>
          <div className="pat-charting">
            <div className="charting-header">
              <div className="pull-right">
                <button className="btn btn-chart"><span className="icon"><i className="la la-filter"></i></span> Filter</button>
                <div className="check-button pull-right">
                  <input type="checkbox" />
                  <span className="btn-chart"><span className="icon expand"><i className="la la-expand"></i></span><span className="icon shrink"><i className="la la-compress"></i></span> Expand All</span>
                </div>
                <div className="clearfix"></div>
              </div>
              <button className="btn btn-chart"><span className="icon"><i className="la la-plus"></i></span> Create Chart</button>
            </div>
            <div className="charting-timeline">
              <ul className="charting-list">
                <li className="chart expand today">
                  <div className="chart-left">
                    <div className="c-day c-today">
                      <div className="day">Today</div>
                      <div className="date">16, June 2017</div>
                    </div>
                  </div>
                  <div className="chart-right">
                    <div className="c-header">
                      <div className="cv-with">Appointment with <span className="w-doc">Dr. Niyaz Hussain</span></div>
                      <div className="cv-at">Scheduled at 10AM</div>
                      <div className="cv-share">
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-calendar-plus-o"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                      </div>
                    </div>
                    <div className="c-content ">                     
                      <div className="cc-container c-add1">
                        <ul className="add-list-split">
                          <li className="done">
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-stethoscope"></i></span></div>
                              <div className="add-subject">Vitals</div>
                              <div className="add-status done"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-sticky-note"></i></span></div>
                              <div className="add-subject">Clinical Notes</div>
                              <div className="add-status waiting"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-file-text"></i></span></div>
                              <div className="add-subject">Prescriptions</div>
                              <div className="add-status waiting"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-book"></i></span></div>
                              <div className="add-subject">Documents</div>
                              <div className="add-status done"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-flask"></i></span></div>
                              <div className="add-subject">Lab orders</div>
                              <div className="add-status waiting"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-medkit"></i></span></div>
                              <div className="add-subject">Treatment plan</div>
                              <div className="add-status waiting"></div>
                            </a>
                          </li>
                          <li>
                            <a href="" onClick={e => e.preventDefault()}>
                              <div className="add-icon"><span className="icon"><i className="la la-paperclip"></i></span></div>
                              <div className="add-subject">Procedures</div>
                              <div className="add-status waiting"></div>
                            </a>
                          </li>
                        </ul>

                      </div>
                    </div>
                  </div>
                </li>
                <li className="chart ">
                  <div className="chart-left">
                    <div className="c-day">
                      <div className="cn-day">
                        <div className="d-day">09</div>
                      </div>
                      <div className="cd-day">
                        <div className="m-day">June 2017</div>
                      </div>
                    </div>
                    <button className="c-add-btn">Add Chart <span className="icon"><i className="fa fa-caret-down"></i></span></button>
                    <div className="c-add-dropdown">
                      <ul className="c-add-list">
                        <li className="done"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-stethoscope"></i></span> Vitals</a></li>
                        <li className="waiting"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-sticky-note"></i></span> Clinical Notes</a></li>
                        <li className="waiting"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-file-text"></i></span> Prescriptions</a></li>
                        <li className="done"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-book"></i></span> Documents</a></li>
                        <li className="waiting"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-flask"></i></span> Lab orders</a></li>
                        <li className="waiting"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-medkit"></i></span> Treatment plan</a></li>
                        <li className="waiting"><a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="la la-paperclip"></i></span> Procedures</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="chart-right">
                    <div className="c-header">
                      <div className="cv-with">Appointment with <span className="w-doc">Dr. Niyaz Hussain</span></div>
                      <div className="cv-at">at 10AM for 5min<div className="pull-right">10 days ago</div></div>
                      <div className="cv-share">
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-calendar-plus-o"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                      </div>
                    </div>
                    <div className="c-content ">
                      <div className="cc-container">
                        <div className="cc-left">
                          <div className="cc-icon"><span className="icon"><i className="la la-sticky-note"></i></span></div>
                          <div className="cc-time text-right">09.30<br />PM</div>
                        </div>
                        <button className="chart-edit"><span className="icon edit"><i className="la la-ellipsis-h"></i></span><span className="icon cancel"><i className="la la-times"></i></span></button>
                        <div className="charts-header">Clinical Notes</div>
                        <div className="cc-share">
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-calendar-plus-o"></i></span></a>
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Complaints</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>printing and typesetting</li>
                              <li> text industry</li>
                              <li>Lorem Ipsum is simply dummy</li>
                            </ul>
                          </div>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Observations</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>printing and typesetting</li>
                            </ul>
                          </div>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Diagonosis</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>printing and typesetting</li>
                              <li> text industry</li>
                              <li>Lorem Ipsum is simply dummy</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="cc-container">
                        <div className="cc-left">
                          <div className="cc-icon"><span className="icon"><i className="la la-file-text"></i></span></div>
                          <div className="cc-time text-right">09.25<br />PM</div>
                        </div>
                        <div className="charts-header">Prescription</div>
                        <div className="cc-share">
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-calendar-plus-o"></i></span></a>
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Instructions</div>
                          <div className="cs-content">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Drug</th>
                                  <th>Dosage & Frequency</th>
                                  <th>Duration</th>
                                  <th>Instructions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Abcdefgh</td>
                                  <td>1-1-1</td>
                                  <td>5 days</td>
                                  <td>after food</td>
                                </tr>
                                <tr>
                                  <td>disydsjygsydi</td>
                                  <td>1-0-1</td>
                                  <td>2 days</td>
                                  <td>after food</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="chart-expand"><span className="icon"><i className="la la-angle-double-down"></i></span></button>
                  </div>
                </li>
                <li className="chart expand">
                  <div className="chart-left">
                    <div className="c-day">
                      <div className="cn-day">
                        <div className="d-day">23</div>
                      </div>
                      <div className="cd-day">
                        <div className="m-day">May 2017</div>
                      </div>
                    </div>
                    <button className="c-add-btn">Add Chart <span className="icon"><i className="la la-angle-down"></i></span></button>
                  </div>
                  <div className="chart-right">
                    <div className="c-header">
                      <div className="cv-with">Appointment with <span className="w-doc">Dr. Vijay D</span></div>
                      <div className="cv-at">at 11.30AM for 15min</div>
                      <div className="cv-share">
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-calendar-plus-o"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                        <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                      </div>
                    </div>
                    <div className="c-content ">
                      <div className="cc-container edit">
                        <div className="cc-left">
                          <div className="cc-icon"><span className="icon"><i className="la la-sticky-note"></i></span></div>
                          <div className="cc-time text-right">12.30<br />AM</div>
                        </div>
                        <div className="charts-header">Clinical Notes</div>
                        <div className="cc-share">
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-share-alt"></i></span></a>
                          <a href="" onClick={e => e.preventDefault()}><span className="icon"><i className="fa fa-print"></i></span></a>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Complaints</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>printing and typesetting</li>
                              <li> text industry</li>
                              <li>Lorem Ipsum is simply dummy</li>
                            </ul>
                          </div>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Observations</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                              <li>printing and typesetting</li>
                            </ul>
                          </div>
                        </div>
                        <div className="cs-container">
                          <div className="cs-header">Diagonosis</div>
                          <div className="cs-content">
                            <ul className="cs-list">
                              <li>printing and typesetting</li>
                              <li> text industry</li>
                              <li>Lorem Ipsum is simply dummy</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Animate(ChartPage);
