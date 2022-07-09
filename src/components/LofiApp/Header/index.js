import './style.scss'
import { Row, Switch } from "antd";
import React from "react";

function Header() {
    return (
        <Row 
            className="navbar"
            justify="space-between"
            align="middle">
            <img 
                className="left"
                alt="logo"
                height={100}
                src="https://lofi.co/static/media/logo.0cbf9e63b4a021661126.gif"
            />
            <div className="right">

                <Switch 
                    className="switch"
                >
                    
                </Switch>
                <div className="point">

                </div>
                <img
                    className=""
                    src=""
                    alt=""
                />
                <img
                    className=""
                    src=""
                    alt=""
                />
                <div className="userMenu">

                </div>

            </div>
        </Row>
    )
}

export default Header;