import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";

import { required, exactLength } from "../../helpers/formValidations";

import { postjob } from "../../../actions/jobs";
const exactLength8 = exactLength(8, "Password length must be minimum");
class Register extends Component {
  state = { description: "" };

  onSubmitLogin = async (values) => {
    values.description = this.state.description;
    this.props.postjob(values);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, invalid } = this.props;
    return (
      <div>
        <div id="login">
          <h3 class="text-center text-white pt-5">Post a New job</h3>
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
                    <h3 class="text-center text-info">Post a Job</h3>
                    <div class="form-group">
                      <label for="title" class="text-info">
                        Job Title:
                      </label>
                      <br></br>
                      <Field
                        name="title"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="location" class="text-info">
                        Location:
                      </label>
                      <br></br>
                      <Field
                        name="location"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="salary" class="text-info">
                        Salary:
                      </label>
                      <br></br>
                      <Field
                        name="salary"
                        component="input"
                        type="number"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="salary" class="text-info">
                        Company Name:
                      </label>
                      <br></br>
                      <Field
                        name="company"
                        component="input"
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="experience" class="text-info">
                        Experience:
                      </label>
                      <br></br>
                      <Field
                        name="experience"
                        component="input"
                        type="number"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label for="description" class="text-info">
                        Description:
                      </label>
                      <br></br>
                      <textarea
                        name="description"
                        onChange={(e) =>
                          this.setState({ description: e.target.value })
                        }
                        type="text"
                        class="form-control"
                        validate={[required]}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={invalid || pristine || submitting}
                    >
                      Post Job
                    </button>
                  </form>
                  <div>
                    {this.props.message !== null ? (
                      <span style={{ color: "red" }}>{this.props.message}</span>
                    ) : (
                      <div></div>
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
    message: state.jobs.message.message,
  };
};

const component = connect(mapStateToProps, { postjob })(Register);

export default reduxForm({ form: "Register Form" })(component);
