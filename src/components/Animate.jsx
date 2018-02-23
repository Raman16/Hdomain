import React, { Component } from "react";
import { CSSTransitionGroup } from "react-transition-group";

let Animate = Transition => class extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="simple-fade"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <Transition {...this.props} />
      </CSSTransitionGroup>
    );
  }
};

export default Animate;
