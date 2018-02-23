const initialState = {
  isOpen: false,
  activePrimaryMenu: 'setting',
  activeSecondaryMenu: 'drug',
  menuItems: [
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
      path: "/staff",
      name: "staff",
      label: "Staff",
      icon: "la-user-md"
    },
    {
      path: "/lab",
      name: "lab",
      label: "Lab",
      icon: "la-flask"
    },
    {
      path: "/billing",
      name: "billing",
      label: "Billing",
      icon: "la-credit-card"
    },
    {
      path: "/prescription",
      name: "prescription",
      label: "Prescription",
      icon: "la-file-text"
    },
    {
      path: "/inventory",
      name: "inventory",
      label: "Inventory",
      icon: "la-archive"
    },
    {
      path: "/report",
      name: "report",
      label: "Report",
      icon: "la-bar-chart"
    },
    {
      path: "/setting",
      name: "setting",
      label: "Setting",
      icon: "la-cog"
    }
  ]
}

const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRIMARY_MENU":
      return action.payload;
    default:
      return state;
  }
};

export default sideBarReducer;