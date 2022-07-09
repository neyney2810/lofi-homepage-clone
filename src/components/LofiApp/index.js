import { Layout } from "antd";
import React from "react";
import Container from "./Container";
import Header from "./Header";
import Menu from "./Menu";

function LofiApp() {
    return (
        <Layout id="lofi-app">
            <Header />

            <Container />

            <Menu />

        </Layout>
    )
}

export default LofiApp;