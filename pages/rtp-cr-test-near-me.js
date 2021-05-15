import React, { Component } from "react";
import  { rtpcrDatagovt,pvtData }  from "../components/rtpcr-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAngleDown, faBars} from "@fortawesome/free-solid-svg-icons"; 

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
      <div style={{marginTop:"100px"}}>
        <div>Government Testing Centers</div>
       
          {
          rtpcrDatagovt.map((item,index)=>{
            return(
            <div>
             {item.name}
             {item.p_number}
             <a href={item.geo_loc} target="_blank"><FontAwesomeIcon icon={faBars} ></FontAwesomeIcon></a>
            </div>
            )
          })
       
  } 
   <div>Private Testing Centers</div>
         {
          pvtData.map((item,index)=>{
            return(
            <a href={item.geo_loc} target="_blank"><div>
             {item.name}
             {item.p_number}
            </div></a>
            )
          })
       
  } 
        </div>
    );
  }
}
