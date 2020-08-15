import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Products</span></Link>
            </li>
            {/* Divider */}
            {/* Heading */}
          
            {/* Nav Item - Pages Collapse Menu */}
            
            {/* Nav Item - Utilities Collapse Menu */}
           
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
           
            {/* Nav Item - Pages Collapse Menu */}
           
            {/* Nav Item - Charts */}
            
            {/* Nav Item - Tables */}
           
          
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
