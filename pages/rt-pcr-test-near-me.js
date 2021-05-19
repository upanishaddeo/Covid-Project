import React, { Component } from "react";
import { rtpcrDatagovt, pvtData } from "../components/rtpcr-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faClinicMedical, faPhoneSquareAlt, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'

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
          this.setState({ district: "" }, () => { });
          alert("Enter Correct PIN");
        } else {
          this.setState({ district: res[0].PostOffice[0].District }, () => { });
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
      <>
        <div className={styles.mainBody}>
          <h1 className={styles.heading}> COVID Testing Centres</h1>
          <p className={styles.headingSec}>List Of Private and Government hospitals declared COVID-19 Hospitals in Delhi</p>

          <div className={styles.topContainer}>

            <img src='./rtpcr1.jpg' className={styles.bedImage} />
            <img src='./rtpcr1.jpg' className={styles.bedImageShadow}  />
          </div>

          <div style={{ marginTop: "100px" }}>
            <div className={styles.GovHeading}>Government Testing Centers</div>
            <div className={styles.paraHead}>
              <p> If you or anyone from your family start to observe Corona symptoms, please visit the nearest Mohalla clinic, Fever or Flu clinic, or your family doctor. </p>
              <p> If a doctor prescribes you a test based on the nature of your symptoms, you can get yourself tested at the COVID Testing Centre (CTCs). There are currently 21 CTCs in Delhi which are open from 8 AM to 4 PM.</p>
              <span><p>Click on the arrow below to get directions on Google Maps</p></span>
              <div className={styles.tableBorder}>
                <table className={styles.table}>
                  <tr className={styles.TableHead}>
                    <th className={styles.tableTdOne}>  <FontAwesomeIcon icon={faClinicMedical} className={styles.iconColor} ></FontAwesomeIcon>  Hospital Name</th>
                    <th className={styles.tableTdTwo}>  <FontAwesomeIcon icon={faPhoneSquareAlt} className={styles.iconColor} ></FontAwesomeIcon>  Phone No.</th>
                    <th className={styles.tableTdThree}>  <FontAwesomeIcon icon={faSearchLocation} className={styles.iconColor} ></FontAwesomeIcon>   Location </th>
                  </tr>
                </table>
                {
                  rtpcrDatagovt.map((item, index) => {
                    return (
                      <>
                        <table className={styles.table}>
                          <tr>
                            < td className={styles.tableTdOne}>
                              {item.name}
                            </td>
                            <td className={styles.tableTdTwo}>
                              {item.p_number}
                            </td>
                            <td className={styles.tableTdThree}>
                              <a href={item.geo_loc} target="_blank"><FontAwesomeIcon icon={faLocationArrow} className={styles.iconColor} ></FontAwesomeIcon></a>
                            </td>
                          </tr>
                        </table>
                      </>
                    )
                  })
                }
              </div>
            </div>

            <hr className={styles.hr} />
            <div className={styles.priHead}>Private Testing Centers</div>
            <div className={styles.paraHead}>
              <p>The Delhi government has approved private laboratories to conduct tests for Corona. You can get yourself tested at any private lab with a valid doctor’s prescription.</p>
              <p><b>This is a list of all the Private Labs that are testing patients for COVID-19</b></p>
              <div className={styles.tableBorder}>
                <table className={styles.table}>
                  <tr className={styles.TableHead}>
                    <th className={styles.tableTdOne}><FontAwesomeIcon icon={faClinicMedical} className={styles.iconColor} ></FontAwesomeIcon>  Hospital Name</th>
                    <th className={styles.tableTdTwo}><FontAwesomeIcon icon={faPhoneSquareAlt} className={styles.iconColor}></FontAwesomeIcon>  Phone No.</th>
                    <th className={styles.tableTdThree}>  <FontAwesomeIcon icon={faSearchLocation} className={styles.iconColor} ></FontAwesomeIcon>  Location  </th>
                  </tr>
                </table>
                {
                  rtpcrDatagovt.map((item, index) => {
                    return (
                      <>
                        <table className={styles.table}>
                          <tr>
                            < td className={styles.tableTdOne}>
                              {item.name}
                            </td>
                            <td className={styles.tableTdTwo}>
                              {item.p_number}
                            </td>
                            <td className={styles.tableTdThree}>
                              <a href={item.geo_loc} target="_blank"><FontAwesomeIcon icon={faLocationArrow} className={styles.iconColor} ></FontAwesomeIcon></a>
                            </td>
                          </tr>
                        </table>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
