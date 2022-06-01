/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { withRouter } from './withRouter';

const emailState = {
  email: '',
  error: '',
};

class EmailForm extends React.Component {
  constructor() {
    super();
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      email: e.target.value,
    });
    sessionStorage.setItem('email', JSON.stringify(this.state.email));
  }

  onSave() {
    if (this.emailValidation()) {
      this.setState(emailState);
      sessionStorage.setItem('email', JSON.stringify(this.state.email));
      // eslint-disable-next-line react/prop-types
      this.props.navigate('/oldmeal');
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
            <p>Enter email to change order</p>
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
            Change
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(EmailForm);
