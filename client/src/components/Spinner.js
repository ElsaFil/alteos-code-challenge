import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="spinner-container">
          {this.props.waiting && (
            <img className="spinner" src="spinner.gif" alt="Loading" />
          )}
        </div>
      </React.Fragment>
    );
  }
}
