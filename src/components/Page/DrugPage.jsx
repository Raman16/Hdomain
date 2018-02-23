import React, { Component } from "react";
import Animate from "Animate";
import { PageLink } from "Paginator";
import { DrugListView, DrugAddForm } from "Drug";
import { ContentToggleButton } from "Button";
import { Search } from "Search";

const drugs = {
  "data": [
    { id: 1, name: "Anasin", type: "TABLET", streangth: "5", note: "" },
    { id: 2, name: "Cetrizin", type: "CAPSULE", streangth: "50", note: "" },
    { id: 3, name: "Metrogyl", type: "TABLET", streangth: "3", note: "" },
    { id: 4, name: "Rozawel", type: "TABLET", streangth: "40", note: "" },
    { id: 5, name: "Flumazenil", type: "INJECTION", streangth: "5", note: "" }
  ],
  "current_page": 1,
  "from": 1,
  "last_page": 1,
  "next_page_url": "https://ehr.dev/api/drug?page=1",
  "path": "https://ehr.dev/api/drug",
  "per_page": 25,
  "prev_page_url": null,
  "to": 10,
  "total": 10
}

class DrugPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugAddMode: false,
      drugs: drugs
    }
    this.gotoPage = this.gotoPage.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  gotoPage(page) {
    alert(page)
  }

  handleSearch(search) {
    console.log(search)
  }

  render() {
    let { drugs, drugAddMode } = this.state;
    //@TODO: write a helper method to parse and reassign
    let pageData = {
      currentPage: drugs.current_page,
      from: drugs.from,
      to: drugs.to,
      perPage: drugs.per_page,
      total: drugs.total,
      previousPageUrl: drugs.prev_page_url,
      nextPageUrl: drugs.next_page_url
    }

    return (
      <section className="content-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8 col-sm-push-2 col-md-6 col-md-push-3">
              <div>
                <div className="content-header">
                  <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-3">
                      <Search 
                        placeholder="Search drug..."
                        onSearch={search => this.handleSearch(search)} 
                      />
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-9 text-right">
                      <ContentToggleButton
                        label="Add Drug"
                        isContentOpen={drugAddMode}
                        onToggle={status => this.setState({ drugAddMode: status })}
                      />
                    </div>
                  </div>
                </div>
                {drugAddMode && <DrugAddForm onCancel={e => this.setState({ drugAddMode: false })} />}
              </div>
              <DrugListView
                drugs={drugs.data}
              />
              <PageLink
                pageData={pageData}
                onPaging={page => this.gotoPage(page)}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Animate(DrugPage);
