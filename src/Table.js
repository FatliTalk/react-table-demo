import React, {Component} from "react";

class Table extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jake</td>
            <td>Engineer</td>
          </tr>
          <tr>
            <td>Xenia</td>
            <td>Teacher</td>
          </tr>
          <tr>
            <td>Jenny</td>
            <td>Bank employee</td>
          </tr>
          <tr>
            <td>Jack</td>
            <td>Businessman</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Table
