import React from 'react';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div className={classNames('sidebar', {'is-open': props.isOpen})}>
            <div className="sidebar-header">
                <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Your Account</p>
                    <NavItem>
                        <NavLink tag={Link} to={'/stores'}>
                            Stores
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/designshirt'}>
                            Design Merch
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={'/orderhistory'}>
                            Order History
                        </NavLink>
                    </NavItem>
                </Nav>        
            </div>
        </div>
    )
 
};

export default SideBar;