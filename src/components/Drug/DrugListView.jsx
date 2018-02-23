import React, { Component } from "react";
import { PopoutTable, PopoutTableHead, PopoutTableBody, PopoutTableRow } from "Popout";
import DrugEditForm from "./DrugEditForm";

class DrugListView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { drugs } = this.props;
    const rowItems = drugs.map((drug) =>
      <PopoutTableRow
        key={drug.id}
        data={drug}
        form={DrugEditForm}
      >
        <td>
          <div className="item-text">
            <a href="" onClick={e => e.preventDefault()}>{drug.name}</a>
          </div>
        </td>
        <td>
          <div className="item-text">
            {drug.type}
          </div>
        </td>

        <td>
          <div className="item-text text-danger">
            {drug.streangth}
          </div>
        </td>
        <td>
          <div className="item-text">
            {drug.note}
          </div>
        </td>
      </PopoutTableRow>
    );

    return (
      <div className="content-box">
        <div className="full-width">
          <PopoutTable>
            <PopoutTableHead>
              <th>Drug Name</th>
              <th className="fix-100">Type</th>
              <th className="fix-100">Streangth</th>
              <th className="fix-100">Note</th>
            </PopoutTableHead>
            <PopoutTableBody>
              {rowItems}
            </PopoutTableBody>
          </PopoutTable>
        </div>
      </div>
    )
  }
}

export default DrugListView;