import React, { Component } from "react";
import PropTypes from 'prop-types';

class PageLink extends Component {
  constructor(props) {
    super(props);
    this.state = props.pageData;
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('isContentOpen')) {
      this.setState(nextProps.pageData)
    }
  }

  handlePrevious() {
    if (this.state.previousPageUrl) {
      this.props.onPaging(this.state.currentPage - 1);
    }
  }

  handleNext() {
    if (this.state.nextPageUrl) {
      this.props.onPaging(this.state.currentPage + 1);
    }
  }

  render() {
    let { from, to, total, previousPageUrl, nextPageUrl } = this.state;
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="result-count">Showing {from} - {to} of {total} records</div>
        </div>
        <div className="col-sm-6">
          <div className="pagination-btn-group text-right">            
            <button
              className="btn-pagination"
              onClick={e => this.handlePrevious()}
              disabled={previousPageUrl ? false : true}
            >
              <span className="icon"><i className="la la-angle-left"></i></span>
              Prev              
            </button>
            <button
              className="btn-pagination"
              onClick={e => this.handleNext()}
              disabled={nextPageUrl ? false : true}
            >              
              Next              
              <span className="icon"><i className="la la-angle-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

PageLink.propTypes = {
  pageData: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    nextPageUrl: PropTypes.string,
    previousPageUrl: PropTypes.string
  }),
  onPaging: PropTypes.func.isRequired
};

export default PageLink;