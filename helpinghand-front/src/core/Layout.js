import React from "react";
import Menu from "./Menu";
import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        {/* <div className="jumbotron">
        <div style={{width:"100vw"}}>
        </div>
       
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div> */}
        
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
