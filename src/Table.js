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

const TableBody = props => {
  const rows = props.tableContent.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.type}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { tableContent } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody tableContent={tableContent} />
      </table>
    );
  }
}

export default Table;
