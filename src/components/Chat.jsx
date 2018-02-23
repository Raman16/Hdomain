import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <aside className="chat-window">
        <section className="chat-window-header status-online">
          <div className="chat-back-btn">
            <button id="btn-chat-back" className="btn-chat-box">
              <i className="fa fa-chevron-left" aria-hidden="true" />
            </button>
          </div>
          <div className="chat-wuser-avatar">
            <img src="images/user-img.jpg" alt="" />
          </div>
          <div className="chat-wuser-info">
            <h5>Sathish Manoharan</h5>
            <span>Physician</span>
          </div>
          <div className="chat-wuser-status">
            <i className="fa fa-circle" aria-hidden="true" />
          </div>
          <div className="chat-back-btn">
            <button className="btn-chat-box">
              <i className="fa fa-paperclip" aria-hidden="true" />
            </button>
          </div>
        </section>
        <section className="chat-view">
          <ul className="chat-list-view">
            <li className="chat-send">
              <span>Hi Sathish. How are you?</span>
            </li>
            <li className="chat-receive">
              <span>Hi</span>
            </li>
            <li className="chat-send">
              <span>What do you think of the Patient condition?</span>
            </li>
            <li className="chat-receive">
              <span>
                Oh!!! He is good.. He is getting well soon. He may be discharged soon.
              </span>
            </li>
            <li className="chat-receive">
              <span>What do you think.</span>
            </li>
            <li className="chat-send">
              <span>
                Oh really!! I too was happy with his latest reports.
              </span>
            </li>
          </ul>
        </section>
        <section className="chat-input">
          <div className="chat-input-area">
            <textarea placeholder="Type Something..." />
          </div>
          <div className="chat-send-btn">
            <button className="btn-chat-send" disabled>
              <i className="fa fa-chevron-circle-up" aria-hidden="true" />
            </button>
          </div>
        </section>
      </aside>
    );
  }
}

export default Chat;
