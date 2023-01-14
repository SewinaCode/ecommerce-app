import React from "react";
import { Link } from "react-router-dom";
import "../styling/_nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="left-side">
        <i className="fa fa-bars" />
        <Link to="/">
          <h2>amazona</h2>
        </Link>
      </div>
      <div className="right-side">
        <a href="#">Cart</a>
        <a href="#">Sign in</a>
      </div>
    </nav>
  );
}
