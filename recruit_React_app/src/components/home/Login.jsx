import { Field, reduxForm } from "redux-form";
import Navbar from "./Navbar";
import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth_actions";
import { required, email, exactLength } from "../helpers/formValidations";
const exactLength8 = exactLength(8, "Password length must be minimum");
class Login extends Component {
  onSubmitLogin = async (values) => {
    this.props.login(values);
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
          <h3 class="text-center text-white pt-5">Login form</h3>
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
                    <h3 class="text-center text-info">Login</h3>
                    <div class="form-group">
                      <label for="Email" class="text-info">
                        Email:
                      </label>
                      <br></br>
                      <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
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
                        placeholder="Password"
                        class="form-control"
                        validate={[required, exactLength8]}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={invalid || pristine || submitting}
                    >
                      Submit
                    </button>
                  </form>
                  <div id="register-link" class="text-right">
                    <a href="#" class="text-info">
                      Register here
                    </a>
                  </div>

                  <div>
                    {this.props.message !== null ? (
                      <span style={{ color: "red" }}>{this.props.message}</span>
                    ) : (
                      <div>
                        {" "}
                        <span style={{ color: "red" }}>
                          Invalid Credentails
                        </span>{" "}
                      </div>
                    )}
                  </div>
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
    message: state.loginUser.message.message,
  };
};

const component = connect(mapStateToProps, { login })(Login);

export default reduxForm({ form: "Login Form" })(component);
