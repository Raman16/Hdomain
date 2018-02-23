import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group'

class SecondaryMenu extends Component {
  render() {
    const { menus } = this.props;
    const menuItems = menus.map((menu, key) => (
      <li key={key}>
        <NavLink to={menu.path} activeClassName="active" onClick={() => this.props.setSecondaryMenu(menu)}>
          <span className="submenu-icon">
            <i className={"la " + menu.icon} aria-hidden="true" />
          </span>
          {menu.label}
        </NavLink>
      </li>
    ));
    return (
      <section className="sub-menu-section">
        <ul id="med-submenu" className="vertical-submenu-list">
          <li className="active">
            <ul className="vertical-submenu-ul">
              <CSSTransitionGroup
                transitionName="simple-fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {menuItems}
              </CSSTransitionGroup>
            </ul>
          </li>
        </ul>
      </section>
    );
  }
}

export default SecondaryMenu;
