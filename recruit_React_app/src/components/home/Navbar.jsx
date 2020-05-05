import React from "react";
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <header class="masthead">
        <div class="inner">
          <h3 class="masthead-brand">Recruit</h3>
          <nav class="nav nav-masthead justify-content-center">
            <Link class="nav-link" to="/">
              Home
            </Link>
            <Link class="nav-link" to="/login">
              Sign In
            </Link>
            <Link class="nav-link " to="/register">
            Sign Up
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
