import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="bg-gradient-to-r from-[#E6E6FA] via-purple-300 to-purple-500 flex h-14 items-center">
          <div className="logo mr-10 space-x-1 ">
            <span className="text-lg font-bold m-2 p-2">Newzly</span>
          </div>
          <div className="navItems flex absolute right-0 space-x-4 font-bold mr-16">
            <div>Home</div>
            <span>|</span>

            <div>Trending</div>
            <span>|</span>

            <div>Videos</div>
            <span>|</span>

            <div>Channels</div>
            <span>|</span>

            <div>About Us</div>
            <span>|</span>

            <div>Log In</div>
          </div>
        </nav>
      </div>
    );
  }
}
