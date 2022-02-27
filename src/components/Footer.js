import React from "react";
import "../assets/styles/index.css";

import GitHub from "../assets/images/bxl-github.svg";
import LinkedIn from "../assets/images/bxl-linkedin-square.svg";

export default Footer;

function Footer() {
  return (
    <div className="navcontainer">
      <footer className="flex-footer">
        <ul>
          <li>
            <a href={"https://github.com/datfoosteve"}>
              <img src={GitHub} height="35px" width="35px" alt="GitHub"></img>
            </a>
          </li>

          <li>
            <a href={"https://www.linkedin.com/in/stephenputhenpurackal/"}>
              <img
                src={LinkedIn}
                height="35px"
                width="40px"
                alt="linkedin"
              ></img>
            </a>
          </li>
        </ul>
      </footer>
      <h3> &copy; Stephen Puthenpurackal</h3>
    </div>
  );
}
