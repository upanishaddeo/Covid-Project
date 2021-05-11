import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import footerStyles from '../styles/Home.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={footerStyles.mainFooter}>
                <div className={footerStyles.footerHeading}>
                    <span>Looking for Financial Help</span> <br />
                    Afinoz Can Help you with Emergency Loans
                </div>
                <Row>
                    <Col className={footerStyles.footerCol1}>
                        <img src="/together.svg" alt="together we will win" />
                        <img src="/AfinozBack.svg" alt="afinoz LLC" className={footerStyles.backgroundImage} />
                    </Col>
                    <Col className={footerStyles.footerCol2}>
                        <div className={footerStyles.mainForm}>
                            <div className={footerStyles.mainpadding}>
                                <p className={footerStyles.headingFirst}>Lets find the best<br /> Loan for you</p>
                                <div className={footerStyles.flex1}>
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <div className={footerStyles.flex2}>
                                    <input type="text" placeholder="+91-__________" />
                                    <div className={footerStyles.sendOtp}>Send Otp</div>
                                </div>
                                <div className={footerStyles.flex3}>
                                    <input type="text" placeholder="Enter Your Email" />
                                    <input type="text" placeholder="Name of Company" />
                                    <input type="text" placeholder="Loan Amount" />
                                    <input type="text" placeholder="Monthly Salary" />
                                </div>

                                <div className={footerStyles.getQuote}>Get a quote</div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default Footer
