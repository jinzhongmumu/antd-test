import React,{ Component } from 'react';
import { Row, Col } from 'antd';

import './style/common.less'

export default class Common extends Component {
    render() {
        return(
            <div>
                <Row className='simple-page'>
                    <Col span='24'>
                        
                    </Col>
                </Row>
                <Row className='content'>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}