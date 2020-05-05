import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Example = (props) => {
  return (
    <container class="text-center">
      <div
        class=" d-flex w-100 p-3 mx-auto flex-column bk"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <main role="main" class="inner cover" style={{ marginTop: "330px" }}>
          <h1 class="cover-heading
          ">Welcomet to Recruit.</h1>
          <p class="lead">
            Welcome to Recruit is an online Plateform to Recruit Best Talent.It is for the Test Purpose at Blonk Group.
          </p>
          <p class="lead">
            <Link to="/register" class="btn btn-primary btn-lg btn-primary">
              Sign Up

            </Link>
          </p>
        </main>

        <footer class="mastfoot mt-auto">
          <div class="inner">
            <p>Recruit</p>
          </div>
        </footer>
      </div>
    </container>
  );
};

export default Example;
