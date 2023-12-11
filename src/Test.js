import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  render() {
    const dataToPass = [
      {
        name: "Hey",
        type: "I'm here"
      },
      {
        name: "Because",
        type: "These Data"
      },
      {
        name: "Where passed",
        type: "From my parent"
      }
    ];

    return (
      <div className="Test">
        <h1>Saucisse</h1>
        <Table tableContent={dataToPass} />
      </div>
    );
  }
}

export default Test;
