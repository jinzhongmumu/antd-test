import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';

import './style/common.less'

export default class Admin extends Component {
    render() {
        return(
            <div>
                <Row className="container">
                    <Col className="nav-left" span="3">

                    </Col>
                    <Col className="main" span="21">

                    </Col>
                </Row>
            </div>
        )
    }
}  