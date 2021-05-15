import React, { Component } from "react";
import router from "next/router";
export default class rrtpCrTestNearMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pincode: "",
      pinError: "",
      district: "",
    };
  }
  fetchPinData = (pin) => {
    fetch("https://api.postalpincode.in/pincode/" + pin)
      .then((res) => res.json())
      .then((res) => {
        if (res[0].Status == "Error" || res[0].Status == 404) {
          this.setState({ district: "" }, () => {});
          alert("Enter Correct PIN");
        } else {
          this.setState({ district: res[0].PostOffice[0].District }, () => {});
        }
      })
      .catch((err) => console.log(err));
  };

  handlePin = (evt) => {
    let pincode = this.state.pincode;
    pincode = evt.target.value;
    this.setState({ pincode });

    if (pincode.length == 6) {
      this.fetchPinData(pincode);
      this.setState({ pinError: "" });
    } else if (evt.target.value.length < 6) {
      this.setState({ pinError: "*Not Valid" });
    } else {
      this.setState({ pinError: "" });
    }
  };
  render() {
    let pinError = this.state.pinError;
    return (
      <div>
        <div>
          Enter your pincode to know RTPCR test location {this.state.district}
        </div>
        <div className={pinError.length > 0 ? "pincode" : ""}>
          <input
            className={pinError.length > 0 ? "pincode" : ""}
            type="text"
            placeholder="Enter Pincode..."
            maxLength="6"
            name="p_code"
            onChange={(e) => this.handlePin(e)}
          />
        </div>

        <a
          target="_blank"
          href={
            "https://www.google.com/maps/search/rt+pcr+test+in+" +
            this.state.district +
            "/@28.5842868,77.314701,14z/data=!3m1!4b1?hl=en"
          }
        >
          <img src="./rtpcr-noida.png" />
        </a>
      </div>
    );
  }
}
