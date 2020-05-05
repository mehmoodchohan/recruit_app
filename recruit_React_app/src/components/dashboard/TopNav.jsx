import React, { Component } from "react";
import History from "../../history";
export default class TopNav extends Component {
  render() {
    return (
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                localStorage.clear();
                History.push("/");
              }}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
