import React, { useState } from "react"
import { Outlet, NavLink } from "react-router-dom"
import "../css/style.css"
import "../css/output.css"
import {
  Navbar,
  NavbarToggler,
  Nav,
  Button,
} from "reactstrap";

export default function RootPage() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <div className={`sidebar pe-4 pb-3 ${collapsed ? 'close' : 'open'}`}>
        <Nav navbar>
          <Navbar className="grid grid-cols-1 ps-2 place-content-start justify-items-start">
            <div>
              <NavLink to={"/"}>
                <div className="h-20">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.624 13.9202l2.7175 2.7154-7.353 7.353-7.353-7.352 2.7175-2.7164 4.6355 4.6595 4.6356-4.6595zm4.6366-4.6366L24 12l-2.7154 2.7164L18.5682 12l2.6924-2.7164zm-9.272.001l2.7163 2.6914-2.7164 2.7174v-.001L9.2721 12l2.7164-2.7154zm-9.2722-.001L5.4088 12l-2.6914 2.6924L0 12l2.7164-2.7164zM11.9885.0115l7.353 7.329-2.7174 2.7154-4.6356-4.6356-4.6355 4.6595-2.7174-2.7154 7.353-7.353z" />
                  </svg>
                  </div>
              </NavLink>
            </div>
            <div className="navbar-nav">
              <div className='nav-item text-white place-self-start'>
                <NavLink to={"/"}>
                  <div><i className="fa fa-chart-bar text-2xl"></i>  Summary</div>
                </NavLink>
              </div>
              <div className='nav-item text-white place-self-start'>
                <NavLink to={"/Speed"}>
                  <div><i className="fa fa-tachometer-alt text-2xl"></i>  Speed</div>
                </NavLink>
              </div>
              <div className='nav-item text-white place-self-start'>
                <NavLink to={"/Users"}>
                  <div><i className="fa fa-keyboard text-2xl"></i>  Users</div>
                </NavLink>
              </div>
              <div className='nav-item text-white place-self-start'>
                <NavLink to={"/Fees"}>
                  <div><i className="fa fa-table text-2xl"></i>  Fees</div>
                </NavLink>
              </div>
              <div className='nav-item text-white place-self-start'>
                <NavLink to={"/About"}>
                  <div><i className="fa fa-chart-bar text-2xl"></i>  About Me</div>
                </NavLink>
              </div>
            </div>
          </Navbar>
        </Nav>
      </div>
      <div className="md:hidden grid grid-cols-1 bg-black p-2">
        <button className="bg-gray-800 text-white p-2 place-self-flex rounded" onClick={() => toggleNavbar()}>Menu</button>
      </div>
      <div className="content p-3 items-start">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
