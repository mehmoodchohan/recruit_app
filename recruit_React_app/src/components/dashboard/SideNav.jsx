import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class SideNav extends Component {
    render() {
        return (
            <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading">Recruite</div>
          <div class="list-group list-group-flush">
            <a class="list-group-item list-group-item-action bg-light">
              Dashboard
            </a>
            <Link
              to="/dashboard"
              class="list-group-item list-group-item-action bg-light"
            >
              Post a New Job
            </Link>
            <Link
              to="/myjobs"
              class="list-group-item list-group-item-action bg-light"
            >
              My Jobs
            </Link>
            <Link
              to="/myprofile"
              class="list-group-item list-group-item-action bg-light"
            >
              My Profile
            </Link>
          </div>
        </div>
        )
    }
}
