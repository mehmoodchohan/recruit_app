import React, { Component } from "react";
import SideNav from "../SideNav";
import { connect } from "react-redux";
import { myProfile } from "../../../actions/auth_actions";
import TopNav from "../TopNav";
class Profile extends Component {
  componentWillMount() {
    this.props.myProfile();
  }
  renderProfile = () => {
    if (this.props.profile !== undefined) {
      const {
        firstName,
        lastName,
        email,
        address,
        status,
      } = this.props.profile;
      return (
        <table className="table table-striped">
          <th>firstName</th>
          <th>lastName</th>
          <th>address</th>
          <th>status</th>
          <th>email</th>
          <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{status}</td>
          </tr>
        </table>
      );
    }
  };
  render() {
    return (
      <div class="d-flex" id="wrapper">
        <SideNav />

        <div id="page-content-wrapper">
          <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <TopNav />
          </nav>

          <div class="container-fluid">{this.renderProfile()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.loginUser.profile.message,
  };
};

export default connect(mapStateToProps, { myProfile })(Profile);
