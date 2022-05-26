/* eslint-disable react/destructuring-assignment */
import React from 'react';

const emailState = {
  email: '',
  error: '',
};

class EmailComponent extends React.Component {
  constructor() {
    super();
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSave() {
    if (this.emailValidation()) {
      this.setState(emailState);
      localStorage.setItem('email', JSON.stringify(this.state.email));
    }
  }

  emailValidation() {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!this.state.email || regex.test(this.state.email) === false) {
      this.setState({
        error: 'Email is not valid',
      });
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <div className="form-group mb-3">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <h5>Enter email to save order</h5>
          </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control"
          />
          <span className="text-danger">{this.state.error}</span>
        </div>
        <div className="rowJustifyCenter">
          <button
            type="submit"
            block="true"
            style={{
              backgroundColor: '#C16757',
              color: '#3d6053',
              borderRadius: '10px',
              borderColor: '#3d6053',
              border: '3px solid',
              width: '100px',
              fontWeight: '600',
            }}
            onClick={() => this.onSave()}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default EmailComponent;
