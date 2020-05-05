import { Field, reduxForm } from "redux-form";
import Navbar from "./Navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth_actions";
import {
  required,
  email,
  exactLength,
  passwordsMatch,
} from "../helpers/formValidations";
const exactLength8 = exactLength(8, "Password length must be minimum");
class Register extends Component {
  onSubmitLogin = async (values) => {
    this.props.register(values);
  };
  render() {
    const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
    return (
      <div
        class=" d-flex w-100 p-3 mx-auto flex-column bk"
        style={{ height: "100vh" }}
      >
        >
        <Navbar />
        <div id="login">
          <h3 class="text-center text-white pt-5">Registration form</h3>
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form
                    id="login-form"
                    class="form"
                    onSubmit={handleSubmit(this.onSubmitLogin)}
                  >
                    <h3 class="text-center text-info">Register</h3>
                    <div class="form-group">
                      <label for="first_name" class="text-info">
                        FirstName:
                      </label>
                      <br></br>
                      <Field
                        name="firstName"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Last Name" class="text-info">
                        Last Name:
                      </label>
                      <br></br>
                      <Field
                        name="lastName"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Email" class="text-info">
                        Address:
                      </label>
                      <br></br>
                      <Field
                        name="address"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="Email" class="text-info">
                        Email:
                      </label>
                      <br></br>
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        class="form-control"
                        validate={[required, email]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="text-info">
                        Password:
                      </label>
                      <br></br>
                      <Field
                        name="password"
                        component="input"
                        type="password"
                        class="form-control"
                        validate={[required, exactLength8]}
                      />
                    </div>
                    <div>
                      {this.props.message !== null ? (
                        <span style={{ color: "red" }}>
                          {this.props.message}
                        </span>
                      ) : (
                        <div></div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={invalid || pristine || submitting}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.register.message.message,
  };
};

const component = connect(mapStateToProps, { register })(Register);

export default reduxForm({ form: "Register Form" })(component);
