import React, { Component } from 'react';
import { Row, Col} from 'antd';
import './index.less';

class Header extends Component {
    state = {}
    componentWillMount(){
        this.setState({
            username:'管理员'
        })
    }
    render(){
        const {menuType, menuName}
        return(
            <div className='header'>
                <Row className='header-top'>

                </Row>
            </div>
        )
    }
}