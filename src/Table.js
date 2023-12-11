import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
      </tr>
    </thead>
  );
};

const TableBody = () => {
  return (
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
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    );
  }
}

export default Table;
