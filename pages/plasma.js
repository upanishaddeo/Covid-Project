import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import plasmaStyle from '../styles/Home.module.css'

export class plasma extends Component {
    render() {
        return (
            <div className={plasmaStyle.plasmaBody}>
                <div className={plasmaStyle.plasmaHeading}>
                    <h1>Donating plasma can save a life of an innocent and help India overcome Covid-19</h1>
                    <p>(Fill the form below to become a donor of plasma and make India stand on its feet again)</p>
                </div>
                <div className={plasmaStyle.mainContainer}>
                    <div className={plasmaStyle.plasmaImage}>
                        <img src="/plasma2.jpg" />
                    </div>
                    <Row>
                        <Col className={plasmaStyle.firstColPlasma}>
                            <div className={plasmaStyle.firstColflex1}>
                                <p>Did you ever get Covid?</p>
                                <div className={plasmaStyle.checkboxMargin}>
                                    <input type="checkbox" value="yes" /> <div>Yes</div>
                                    <input type="checkbox" value="no" /> <div>No</div>
                                </div>

                            </div>
                            <div className={plasmaStyle.firstColflex1}>
                                <p>Sex</p>
                                <div className={plasmaStyle.checkboxMargin}>
                                    <input type="checkbox" value="M" /> <div>Male</div>
                                    <input type="checkbox" value="F" /> <div>Female</div>
                                    <input type="checkbox" value="O" /> <div>Others</div>
                                </div>

                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>City</label>
                                <input type="text" placeholder="City" />
                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>Date of screening</label>
                                <input type="date" placeholder="From" />
                            </div>
                            <div className={plasmaStyle.firstColflex2}>
                                <label>Phone No.</label>
                                <input type="text" placeholder="Phone No." />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label for="blood-group">Blood Group</label>
                                <select name="blood-group" id="blood-group">
                                    <option value="a+">A+</option>
                                    <option value="a-">A-</option>
                                    <option value="b+">B+</option>
                                    <option value="b-">B-</option>
                                    <option value="o+">O+</option>
                                    <option value="o-">O-</option>
                                    <option value="ab+">AB+</option>
                                    <option value="ab-">AB-</option>
                                    <option value="dont-know">Dont Know</option>
                                </select>
                            </div>
                        </Col>
                        <Col className={plasmaStyle.secColPlasma}>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Name <span>*</span></label>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Email ID</label>
                                <input type="text" placeholder="Email ID" />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Address <span>*</span></label>
                                <input type="text" placeholder="Address" />
                            </div>
                            <div className={plasmaStyle.secColflex1}>
                                <label>Age <span>*</span></label>
                                <input type="text" placeholder="Age" />
                            </div>
                            <button className={plasmaStyle.submitButtonPlasma}>Submit</button>
                        </Col>
                    </Row>
                </div>
            </div>


        )
    }
}

export default plasma
