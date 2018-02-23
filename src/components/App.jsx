import React, { Component } from "react";
import { Route } from "react-router-dom";
//import logo from './logo.svg';
import "../App.css";
import Header from "Header";
import SideBar from "SideBar";
import OnlineStaff from "OnlineStaff";
import Chat from "Chat";
import AddPatient from "AddPatient";
import {
  CalendarPage,
  ChartPage,
  StaffPage,
  PatientPage,
  DoctorPage,
  DrugPage
  //NotFoundPage
} from "Page";

class App extends Component {
  render() { // sidebar-close
    return (
      <div id="app-container" className="prod-container">
        {/* Global page components */}
        <SideBar />
        <Header />
        <OnlineStaff />
        <Chat />

        {/* 
          Page routing containers. 
          Meaning the matching route contents will be renderd here. 
          So that we could wrap each Page component with different containers as well.
        */}
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/chart" component={ChartPage} />
        <Route path="/staff" component={StaffPage} />
        <Route path="/patient" component={PatientPage} />
        <Route path="/doctor" component={DoctorPage} />
        {/*<Route component={NotFoundPage} />*/}

        <Route path="/setting/drug" component={DrugPage} />

        {/* Global page modals */}
        <AddPatient />
      </div>
    );
  }
}

export default App;
