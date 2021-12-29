import React, {Component} from "react";

// const TableHeader = function() {}
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
};

const TableBody = (props) => {
  // https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  });

  return <tbody>{rows}</tbody>
};

class Table extends Component {
  render() {
    //  In Table, we can access all props through `this.props`.
    // We're only passing one props through, `characterData`,
    // so we'll use `this.props.characterData` to retrieve that data.
    // I'm going to use the ES6 property shorthand to
    // create a variable that contains `this.props.characterData`.
    const {characterData} = this.props;
    // ES5: const characterData = this.props.characterData;
    // Reference: https://stackoverflow.com/questions/41058569/

    return (
      <table className="table table-hover">
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}

export default Table
