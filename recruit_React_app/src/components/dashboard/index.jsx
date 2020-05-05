import React, { Component } from "react";
import PostJob from "./Jobs/PostNewJob";
import SideNav from "./SideNav";
import { connect } from "react-redux";
import { myProfile } from "../../actions/auth_actions";
import TopNav from "./TopNav";
class Home extends Component {
  componentWillMount() {
    this.props.myProfile();
  }
  renderstatus = () => {
    console.log(this.props);
    if (this.props.profile !== undefined) {
      if (this.props.profile.status == "unvarified") {
        return (
          <div class="alert alert-danger" role="alert">
            Please Verify Your Email..Check your Inbox
          </div>
        );
      }
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
          {this.renderstatus()}

          <div class="container-fluid">
            <PostJob />
          </div>
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

export default connect(mapStateToProps, { myProfile })(Home);
