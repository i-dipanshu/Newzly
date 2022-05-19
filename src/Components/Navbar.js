import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-[#E6E6FA] flex h-14 items-center">
          <div className="logo mr-10 space-x-1 ">
            <span className="text-lg font-bold m-2 p-2">Newzly</span>
          </div>
          <div className="navItems flex absolute right-0 space-x-4 font-bold mr-16 ">
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/">General</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/entertainment">Entertainment</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/business">Business</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/health">Health</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/science">Science</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/sports">Sports</Link>
            </div>
            <span>|</span>
            <div className="hover:underline hover:underline-offset-4 focus:underline">
              <Link to="/technology">Technology</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
