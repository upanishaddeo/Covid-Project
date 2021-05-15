import React, { Component } from 'react'
import fundStyles from '../styles/Home.module.css'
class Fundraiser extends Component {
    render() {
        return (
            <div className={fundStyles.FundCard}>
                <div className={fundStyles.fundImage}>
                    <img src={this.props.fundImage} />
                </div>
                <div className={fundStyles.fundHeading}>
                    <p>{this.props.fundHeading}</p>
                </div>
                <div className={fundStyles.fundData}>
                    <p className={fundStyles.fundTarget}>Target Amount to be collected: <br /><span>{this.props.fundTarget}</span> </p>
                    <p className={fundStyles.fundAmount}><span>{this.props.fundAmount}</span> Raised so far</p>
                    <button className={fundStyles.donateButton}>Donate</button>
                </div>
            </div>
        )
    }
}

export default Fundraiser

