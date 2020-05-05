import React, { Component } from "react";
import { connect } from "react-redux";
import SideNav from "../SideNav";
import TopNav from "../TopNav";
import { jobListing, deleteJob } from "../../../actions/jobs";
class Mylisting extends Component {
  componentWillMount() {
    this.props.jobListing();
  }
  deletemyJob = (id) => {
    console.log(id);
    this.props.deleteJob(id);
  };

  renderMyjobs = () => {
    if (this.props.jobs) {
      return this.props.jobs.map((element) => {
        return (
          <tr>
            <td>{element.title}</td>
            <td>{element.company}</td>
            <td>{element.createdAt}</td>
            <td>{element.experience}</td>
            <td>{element.location}</td>
            <td>{element.salary}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => this.deletemyJob(element._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
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

          <div class="container-fluid">
            <table className="table table-striped">
              <th>Title</th>
              <th>Company</th>
              <th>CreatedAt</th>
              <th>Experience</th>
              <th>Location</th>
              <th>Salary</th>
              {this.renderMyjobs()}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobs: state.jobs.jobs.message,
  };
};

export default connect(mapStateToProps, { jobListing, deleteJob })(Mylisting);
