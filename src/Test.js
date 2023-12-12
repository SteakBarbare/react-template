import React, { Component } from "react";
import Table from "./Table";

class Test extends Component {
  state = {
    dataToPass: [
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
    ]
  };

  removeRow = index => {
    const { dataToPass } = this.state;

    this.setState({
      dataToPass: dataToPass.filter((currentData, i) => {
        return i !== index;
      })
    });
  };
  render() {
    const { dataToPass } = this.state;

    return (
      <div className="Test">
        <h1>Saucisse</h1>
        <Table tableContent={dataToPass} removeRow={this.removeRow} />
      </div>
    );
  }
}

export default Test;
