import React, { Component } from "react";
import { PopoutList, PopoutListRow } from "Popout";

class StaffListView extends Component {
  render() {
    return (
      <div className="sett-list">
        <PopoutList>
          <PopoutListRow>
            <div className="s-topic">
              <h5>Personal</h5>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="s-t-desc">
                    Name:
                            {" "}
                    <span className="st-desc-hi">Akshay Kumar</span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="s-t-desc">
                    Registration Number:
                            {" "}
                    <span className="st-desc-hi">65454564587</span>
                  </div>
                </div>
              </div>
            </div>
          </PopoutListRow>
          <PopoutListRow>
            <div className="s-topic">
              <h5>Contact</h5>
              <div className="s-t-desc">
                Add Your Contact details to make communication easier.
            </div>
            </div>
            <div className="s-content">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1">
                  <div className="input-box verify-success">
                    <label className="input-label" htmlFor="mobile">Mobile</label>
                    <input className="input-text-box" type="text" name="mobile" />
                    <span className="verify-status">
                      Verified
                              {" "}
                      <span className="icon">
                        <i className="fa fa-thumbs-up" />
                      </span>
                    </span>
                    <span className="input-status">
                      No caps in user name
                </span>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1">
                  <div className="input-box verify-danger">
                    <label className="input-label">Email</label>
                    <input className="input-text-box" type="text" />
                    <span className="verify-status">
                      Not Verified
                              {" "}
                      <span className="icon">
                        <i className="fa fa-thumbs-up" />
                      </span>
                    </span>
                    <span className="input-status">
                      No caps in user name
                </span>
                  </div>
                </div>
              </div>
            </div>
          </PopoutListRow>
          <PopoutListRow>
            <div className="s-topic">
              <h5>Medrixo Access</h5>
              <div className="s-t-desc">
                Owner access cannot be modified. To transfer ownership, please contact support.
                      </div>
            </div>
          </PopoutListRow>
          <PopoutListRow>
            <div className="s-topic">
              <h5>Notification</h5>
              <div className="row">
                <div className="col-xs-12 col-sm-3">
                  <div className="s-t-desc">This Doctor</div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="s-t-desc">
                    Daily Schedule:
                            {" "}
                    <span className="st-desc-hi">SMS, Email</span>
                  </div>
                  <div className="s-t-desc">
                    Appointments Confirmation:
                            {" "}
                    <span className="st-desc-hi">SMS</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-3">
                  <div className="s-t-desc">All Doctor</div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <div className="s-t-desc">
                    Daily Schedule:
                            {" "}
                    <span className="st-desc-hi">SMS, Email</span>
                  </div>
                </div>
              </div>
            </div>
          </PopoutListRow>
        </PopoutList >
      </div>
    )
  }
}

export default StaffListView;