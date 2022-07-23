import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
        this.props.loading ?
        <div className="mainclass">
          <div className="loadersection"></div>
        </div> : null
    );
  }
}

export default Loader;
