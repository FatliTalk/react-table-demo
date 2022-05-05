// Loading the `Component` as a property of React.
import React, {Component} from 'react'

class Form extends Component {
  // Set the initial state of the `Form` to be an object with some
  // empty properties, and assign that initial state to `this.state`.

  // Previously, it was necessary to include a constructor()
  // on React class components, but it's not required anymore.
  initialState = {
    name: '',
    job: '',
  }

  state = this.initialState

  // First, we'll make the function that will run every time
  // a change is made to an input. The event will be passed through,
  // and we'll set the state of Form to have the name (key)
  // and value of the inputs.
  handleChange = (event) => {
    const {name, value} = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    // get our two properties from state, and assign them
    // as the values that correspond to the proper form keys.
    const { name, job } = this.state;

    return (
      <form>
        <div class="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={name}
            // run the handleChange() method as the onChange of the input
            onChange={this.handleChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="job" className="form-label">Job</label>
          <input
            className="form-control"
            type="text"
            name="job"
            id="job"
            value={job}
            // run the handleChange() method as the onChange of the input
            onChange={this.handleChange}
          />
        </div>
      </form>
    );

  }
}

// export the `Form` component
export default Form;
