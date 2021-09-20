import React from 'react'
import { Row, Col } from 'react-bootstrap';

import "./Footer.css";

const Footer = () => {
    return (
        <Row id="footer">
            <Col md={12} className="footer-col py-2" sm={12}>
                <a href="/">Guidelines</a>
                <a href="/">FAQ</a>
                <a href="/">Lists</a>
                <a href="/">API</a>
                <a href="/">Security</a>
                <a href="/">Legal</a>
                <a href="/">Apply to YC</a>
                <a href="/">Contact</a>
            </Col>
            <Col md={12} className="footer-col py-2" sm={12}>
                <form action="" className="w-100 text-center">
                    <label htmlFor="search-input">Search:</label>
                    <input id="search-input" type="text" />
                </form>
            </Col>
            
        </Row>
    )
}

export default Footer
