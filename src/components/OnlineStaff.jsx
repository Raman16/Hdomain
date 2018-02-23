import React, { Component } from "react";

class OnlineStaff extends Component {
  render() {
    return (
      <aside className="right-panel">
        <section className="right-panel-tab">
          <ul className="panel-tab-menu">
            <li className="active"><a onClick={e => e.preventDefault()}>Chat</a></li>
            <li><a onClick={e => e.preventDefault()}>Activity</a></li>
          </ul>
          <div className="clearfix" />
        </section>
        <section className="right-panel-content">
          <div className="panel-content-search">
            <input
              className="search-input"
              name="chat-search"
              type="text"
              placeholder="search..."
            />
          </div>
          <div className="user-chat-group">
            <h3>Doctors</h3>
            <ul className="user-chat-list">
              <li className="chat-user-box status-offline">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Sathish Manoharan</h5>
                    <span>Physician</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-online">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Vijay D</h5>
                    <span>Dentist</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-busy">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Sugumar M</h5>
                    <span>Orthopedic</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-away">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Saravan Kumar</h5>
                    <span>General Medicine</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-online">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Akshay Kumar</h5>
                    <span>E&T</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="user-chat-group">
            <h3>Nurse</h3>
            <ul className="user-chat-list">
              <li className="chat-user-box status-online">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Praveen M S</h5>
                    <span>Admin</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-online">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Niyaz Hussain</h5>
                    <span>ECG</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-away">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Santhosh</h5>
                    <span>Pharmacy</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-busy">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Joseph</h5>
                    <span>Lab</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
              <li className="chat-user-box status-offline">
                <a className="chat-user" onClick={e => e.preventDefault()}>
                  <span className="chat-user-avatar">
                    <img src="images/user-img.jpg" alt="" />
                  </span>
                  <span className="chat-user-info">
                    <h5>Nambi Ramanujam</h5>
                    <span>X-Ray</span>
                  </span>
                  <span className="chat-user-status">
                    <i className="fa fa-circle" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    );
  }
}

export default OnlineStaff;
