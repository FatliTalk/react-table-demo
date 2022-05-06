// const TableHeader = function() {}
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        {/* Here's where that index we defined in the
        removeCharacter() method comes in.
        We pass the `key/index` through as a parameter,
        so the filter function knows which item to remove.
        We create a button with an onClick and pass it through.

        The onClick function must pass through a function that
        returns the removeCharacter() method,
        otherwise it will try to run automatically. */}
        <td>
          <button className="btn btn-danger btn-sm" onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>
};

// Since it turns out that the only components having their own states
// in our project are App and Form, it would be best practice to use
// simple component instead of class component of `Table`.
const Table = (props) => {
  //  In Table, we can access all props through `this.props`.
  // We're only passing one props through, `characterData`,
  // so we'll use `this.props.characterData` to retrieve that data.
  // I'm going to use the ES6 property shorthand to
  // create a variable that contains `this.props.characterData`.
  const {characterData, removeCharacter} = props;
  // const characterData = props.characterData; // ES5
  // const removeCharacter = props.removeCharacter; // ES5
  // Reference: https://stackoverflow.com/questions/41058569/

  return (
    <table className="table table-hover">
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
};

export default Table
