import React, { Component } from "react";

class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chipolata</td>
            <td>Classique</td>
          </tr>
          <tr>
            <td>Merguez</td>
            <td>Kipik</td>
          </tr>
          <tr>
            <td>Knacki</td>
            <td>À chier</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;