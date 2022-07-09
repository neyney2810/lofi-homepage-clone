import './style.scss'
import { Content } from "antd/lib/layout/layout";
import React from "react";

function Container() {
    return (
        <Content>
            <video autoPlay muted loop className="background-video">
                <source src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Exterior+-+Day.mp4" type='video/mp4'></source>
            </video>
        </Content>
    )
}

export default Container;