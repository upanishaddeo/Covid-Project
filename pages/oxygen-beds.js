import React, {useState, useEffect} from 'react'
import styles from '../styles/Oxygen.module.css'


function OxyCard(props) {
    return (
        <div className={styles.oxyCardMain}>
            <div className={styles.oxyCardHeading}>
                <p>{props.title}</p>
            </div>
            <div className={styles.oxyCardData}>
                <p>{props.data}</p>
            </div>
        </div>
    )
}

function oxygenBeds() {
    
    const [Data, setData] = useState([]);
    const getBedData = () => {
        const url = "https://safe-waters-75143.herokuapp.com/hospitals";
        fetch(url)
          .then((resp) => resp.json())
          .then((res) => {
            console.log("this is the response", res);
            setData(res)
            // updateData(res.data.regional);
          })
          .catch((err) => {
            console.log("err", err);
          });
      };

      useEffect(() => {
          console.log(Data, "this is the fucking data")
          getBedData();
      }, []);

    return (
        <div className={styles.oxyContainer}>
            <div className={styles.oxyMainRow}>
                <div className={styles.oxyDescription}>
                    <h1>Oxygen Bed Leads</h1>
                    <p>Below are the numbers of beds available all over Delhi and Delhi NCR</p>
                </div>
                <div className={styles.oxyHeading}>
                    <h1>Covid-19 <span>Beds</span> Available</h1>
                </div>
                <div className={styles.oxyCardRow}>
                    <OxyCard title={"Total"} data={"100"} />
                    <OxyCard title={"Occupied"} data={"5000"} />
                    <OxyCard title={"Vacant"} data={"1000"} />
                </div>
            </div>
            <div className={styles.oxyMainRow}>
                <div className={styles.oxyHeading}>
                    <h1>Covid-19 <span>Oxygen Beds</span> Available</h1>
                </div>
                <div className={styles.oxyCardRow}>
                    <OxyCard title={"Total"} data={"2000"} />
                    <OxyCard title={"Occupied"} data={"7000"} />
                    <OxyCard title={"Vacant"} data={"4000"} />
                </div>
            </div>
            <div className={styles.oxyMainRow}>
                <div className={styles.oxyHeading}>
                    <h1>Covid-19 <span>ICU Beds</span> Available</h1>
                </div>
                <div className={styles.oxyCardRow}>
                    <OxyCard title={"Total"} data={"1900"} />
                    <OxyCard title={"Occupied"} data={"3000"} />
                    <OxyCard title={"Vacant"} data={"1700"} />
                </div>
            </div>
        </div>
    )
}

export default oxygenBeds

