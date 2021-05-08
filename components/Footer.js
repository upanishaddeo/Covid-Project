import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import footerStyles from '../styles/Home.module.css';

class Footer extends Component {
    render() {
        return (
            <Row>
                <Col className={footerStyles.footerCol1}>
                    Together We will win
                </Col>
                <Col className={footerStyles.footerCol2}>
                    <div className={footerStyles.mainForm}>
                        <div className={footerStyles.form1st}>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div>
                            <h3>Did you ever get Covid</h3>
                            <input type="radio" value="y" />Yes
                            <input type="radio" value="n" />No
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Footer
