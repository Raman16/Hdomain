import React, { Component } from "react";
import Animate from "Animate";
import { PatientListView } from "Patient"

class PatientPage extends Component {
  render() {
    return (
      <section className="content-container appancon-list-left">
        <aside className="appancon-left-container">
          <div className="appancon-header">
            <div className="appancon-search">
              <div className="input-box">
                <input
                  className="input-text-box"
                  type="text"
                  placeholder="Search Patient"
                />
              </div>
            </div>
          </div>
          <div className="appancon-tab">
            {" "}
            
            <ul className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  href="#appancon-doctor"
                  aria-controls="emr"
                  role="tab"
                  data-toggle="tab"
                  aria-expanded="false"
                >
                  Recent
                </a>
              </li>
              <li role="presentation">
                <a
                  href="#appancon-staff"
                  aria-controls="billing"
                  role="tab"
                  data-toggle="tab"
                >
                  All
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane active"
                id="appancon-doctor"
              >
                <ul className="cont-list r-app">
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Akshay Kumar</div>
                      <div className="app-reason">Visited for body pain</div>
                      <div className="app-status checkedout">9.45AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Phaneendra</div>
                      <div className="app-reason">Visited for fever</div>
                      <div className="app-status checkedout">9.35AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Niyaz Hussain</div>
                      <div className="app-reason">
                        Visited for stomach ache
                      </div>
                      <div className="app-status checkedout">9.32AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-reason">Visited for Cold</div>
                      <div className="app-status" />
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Sugumar</div>
                      <div className="app-reason">Visited for cold</div>
                      <div className="app-status" />
                    </a>
                  </li>
                </ul>
              </div>
              <div role="tabpanel" className="tab-pane" id="appancon-staff">
                <ul className="cont-list">
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Akshay Kumar</div>
                      <div className="app-reason">
                        Last visited for body pain
                      </div>
                      <div className="app-status">9.45AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Phaneendra</div>
                      <div className="app-reason">Last visited for fever</div>
                      <div className="app-status">9.35AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Niyaz Hussain</div>
                      <div className="app-reason">
                        Last visited for stomach ache
                      </div>
                      <div className="app-status">9.32AM</div>
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Sathish Manoharan</div>
                      <div className="app-reason">Last visited for Cold</div>
                      <div className="app-status" />
                    </a>
                  </li>
                  <li>
                    <a onClick={e => e.preventDefault()}>
                      <div className="app-name">Sugumar</div>
                      <div className="app-reason">Last visited for cold</div>
                      <div className="app-status" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
              <PatientListView />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Animate(PatientPage);
