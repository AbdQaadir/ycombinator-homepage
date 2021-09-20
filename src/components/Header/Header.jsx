import React from 'react'
import { Row, Col } from 'react-bootstrap';
import  Y18GIF from './y18.gif';

import "./Header.css";

const Header = () => {
    return (
        <Row id="header">
           <Col className="header-col" md={10}>
               <div className="h-100 d-block">
                <img src={Y18GIF} alt="" />
               </div>
                <a href="/" className="home-link">Hacker News</a>
                <a href="/">new</a>
                <a href="/">past</a>
                <a href="/">comments</a>
                <a href="/">ask</a>
                <a href="/">show</a>
                <a href="/">jobs</a>
                <a href="/">submit</a>
           </Col>
           <Col className="header-col" md={2}>
                <a href="/">login</a>
           </Col>
        </Row>
    )
}

export default Header
