import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                <span style={{margin:"0px 4px"}}><i class="fas fa-home"></i></span>
                    Home
                    
                </Link>
            </li>



            

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                    
                    <span style={{margin:"0px 4px"}}><i class="fas fa-address-book"></i></span>
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                    
                    <span style={{margin:"0px 4px"}}><i class="fas fa-address-book"></i></span>
                        Dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                        
                        <span style={{margin:"0px 4px"}}><i class="fas fa-sign-in-alt"></i></span>
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                        
                        <span style={{margin:"0px 4px"}}><i class="fas fa-user-plus"></i></span>
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                    
                    <span style={{margin:"0px 4px"}}><i class="fas fa-sign-out-alt"></i></span>
                        Signout
                    </span>
                </li>
            )}
            <li className="nav-item" style={{right: '0',position: 'absolute'}}>
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                <span style={{margin:"0px 4px"}}><i class="fas fa-shopping-cart"></i></span>
                    Cart{" "}
                    
                    
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>
        </ul>
    </div>
);

export default withRouter(Menu);
