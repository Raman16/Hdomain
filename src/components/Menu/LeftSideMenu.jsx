import React, { Component } from "react";
import { connect } from "react-redux";
import PrimaryMenu from "./PrimaryMenu";
import SecondaryMenu from "./SecondaryMenu";
//import _ from "lodash"

const menus = [
  {
    path: "/calendar",
    name: "calendar",
    label: "Calendar",
    icon: "la-calendar"
  },
  {
    path: "/chart",
    name: "chart",
    label: "Chart",
    icon: "la-users"
  },
  {
    path: "/patient",
    name: "patient",
    label: "Patient",
    icon: "la-users"
  },
  {
    path: "/doctor",
    name: "doctor",
    label: "Doctor",
    icon: "la-user-md"
  },
  {
    path: "/staff",
    name: "staff",
    label: "Staff",
    icon: "la-user-md"
  },
  {
    path: "/lab/order",
    name: "lab",
    label: "Lab",
    icon: "la-flask",
    menus: [
      {
        path: "/lab/order", name: "order", label: "Orders", icon: "la-flask"
      }
    ]
  },
  {
    path: "/billing/invoice",
    name: "billing",
    label: "Billing",
    icon: "la-credit-card",
    menus: [
      {
        path: "/billing/invoice", name: "invoice", label: "Invoice", icon: "la-file-text"
      },
      {
        path: "/billing/payment", name: "payment", label: "Payment", icon: "la-money"
      }
    ]
  },
  {
    path: "/prescription/orders",
    name: "prescription",
    label: "Prescription",
    icon: "la-file-text",
    menus: [
      {
        path: "/prescription/orders", name: "orders", label: "Orders", icon: "la-file-text"
      }
    ]
  },
  {
    path: "/inventory/new_item",
    name: "inventory",
    label: "Inventory",
    icon: "la-archive",
    menus: [
      {
        path: "/inventory/new_item", name: "new_item", label: "New Item", icon: "la-plus"
      },
      {
        path: "/inventory/add_stock", name: "add_stock", label: "Add Stock", icon: "la-cube"
      },
      {
        path: "/inventory/consume_stock", name: "consume_stock", label: "Consume Stock", icon: "la-cubes"
      }
    ]
  },
  {
    path: "/report/payment",
    name: "report",
    label: "Report",
    icon: "la-bar-chart",
    menus: [
      {
        path: "/report/payment", name: "payment", label: "Payments", icon: "la-credit-card"
      },
      {
        path: "/report/due_amount", name: "due_amount", label: "Due Ammount", icon: "la-money"
      },
      {
        path: "/report/expence", name: "expence", label: "Expences", icon: "la-inr"
      },
      {
        path: "/report/patient", name: "patient", label: "Patients", icon: "la-users"
      },
      {
        path: "/report/appointment", name: "appointment", label: "Appointment", icon: "la-calendar"
      },
      {
        path: "/report/income", name: "income", label: "Income", icon: "la-university"
      },
      {
        path: "/report/daily_summery", name: "daily_summery", label: "Daily Summery", icon: "la-clock-o"
      },
      {
        path: "/report/inventory", name: "inventory", label: "Inventory", icon: "la-archive"
      }
    ]
  },
  {
    path: "/setting/practice",
    name: "setting",
    label: "Setting",
    icon: "la-cog",
    menus: [
      {
        path: "/setting/practice", name: "report", label: "Practice Profile", icon: "la-hospital-o"
      },
      {
        path: "/setting/calendar", name: "calendar", label: "Calendar", icon: "la-calendar"
      },
      {
        path: "/setting/communication", name: "communication", label: "Communication", icon: "la-phone"
      },
      {
        path: "/setting/catalog", name: "catalog", label: "Catelog", icon: "la-book"
      },
      {
        path: "/setting/security", name: "security", label: "Security", icon: "la-shield"
      },
      {
        path: "/setting/printout", name: "printout", label: "Printout", icon: "la-print"
      },
      {
        path: "/setting/share", name: "share", label: "Share", icon: "la-share"
      },
      {
        path: "/setting/id_generation", name: "id_generation", label: "ID Generation", icon: "la-tag"
      },
      {
        path: "/setting/patient_group", name: "patient_group", label: "Patient Groups", icon: "la-users"
      },
      {
        path: "/setting/billing", name: "billing", label: "Billing", icon: "la-credit-card"
      },
      {
        path: "/setting/drug", name: "drug", label: "Drug", icon: "la-credit-card"
      }
    ]
  }
];

class LeftSideMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: menus,
      subMenus: []
    };

    this.setPrimaryMenu = this.setPrimaryMenu.bind(this);
  }

  setPrimaryMenu(menu) {
    this.props.dispatch({
      type: "SET_PRIMARY_MENU",
      payload: menu
    })
    
    this.setState({subMenus: menu.hasOwnProperty('menus') ? menu.menus : []});
  }

  setSecondaryMenu(menu) {

  }

  render() {
    return (
      <div className="left-nav">
        <PrimaryMenu menus={this.state.menus} setPrimaryMenu={this.setPrimaryMenu} />
        <SecondaryMenu menus={this.state.subMenus} setSecondaryMenu={this.setSecondaryMenu} />
        <div className="clearfix" />
      </div>
    );
  }
}

LeftSideMenu = connect()(LeftSideMenu);

export default LeftSideMenu;