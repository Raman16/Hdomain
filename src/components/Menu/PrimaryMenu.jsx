import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class PrimaryMenu extends Component {
  render() {
    const { menus } = this.props;
    const menuItems = menus.map((menu, key) => (
      <li key={key}>
        <NavLink to={menu.path} activeClassName="active" onClick={() => this.props.setPrimaryMenu(menu)}>
          <span>
            <i className={"la " + menu.icon} aria-hidden="true" />
          </span>
          <div className="menu-tooltip">{menu.label}</div>
        </NavLink>
      </li>
    ));

    return (
      <section className="left-menu-section">
        <ul id="med-menu" className="vertical-menu-ul">
          {menuItems}
        </ul>
      </section>
    );
  }
}

export default PrimaryMenu;
