import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

/**

*/
const INDIA_TOPO_JSON = require("../components/India_top_json.json");

const PROJECTION_CONFIG = {
  scale: 350,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#782618",
  "#9492d4",
  "#6c6aa6",
  "#4f4d82",
  "#444373",
  "#383766",
  "#363578",
  "#2c2a96",
  "#2b28b0",
];

const DEFAULT_COLOR = "#EEE";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call

export default function Home() {
  const [tooltipContent, setTooltipContent] = useState("");

  const [stateData, updateData] = useState([]);
  const getHeatMapData = [
    { id: "AP", state: "Andhra Pradesh", value: "" },
    { id: "AR", state: "Arunachal Pradesh", value: "" },
    { id: "AS", state: "Assam", value: "" },
    { id: "BR", state: "Bihar", value: "" },
    { id: "CT", state: "Chhattisgarh", value: "" },
    { id: "GA", state: "Goa", value: "" },
    { id: "GJ", state: "Gujarat", value: "" },
    { id: "HR", state: "Haryana", value: "" },
    { id: "HP", state: "Himachal Pradesh", value: "" },
    { id: "JH", state: "Jharkhand", value: "" },
    { id: "KA", state: "Karnataka", value: "" },
    { id: "KL", state: "Kerala", value: "" },
    { id: "MP", state: "Madhya Pradesh", value: "" },
    { id: "MH", state: "Maharashtra", value: "" },
    { id: "MN", state: "Manipur", value: "" },
    { id: "ML", state: "Meghalaya", value: "" },
    { id: "MZ", state: "Mizoram", value: "" },
    { id: "NL", state: "Nagaland", value: "" },
    { id: "OR", state: "Odisha", value: "" },
    { id: "PB", state: "Punjab", value: "" },
    { id: "RJ", state: "Rajasthan", value: "" },
    { id: "SK", state: "Sikkim", value: "" },
    { id: "TN", state: "Tamil Nadu", value: "" },
    { id: "TG", state: "Telangana", value: "" },
    { id: "TR", state: "Tripura", value: "" },
    { id: "UT", state: "Uttarakhand", value: "" },
    { id: "UP", state: "Uttar Pradesh", value: "" },
    { id: "WB", state: "West Bengal", value: "" },
    { id: "AN", state: "Andaman and Nicobar Islands", value: "" },
    { id: "CH", state: "Chandigarh", value: "" },
    { id: "DN", state: "Dadra and Nagar Haveli", value: "" },
    { id: "DD", state: "Daman and Diu", value: "" },
    { id: "DL", state: "Delhi", value: "" },
    { id: "JK", state: "Jammu and Kashmir", value: "" },
    { id: "LA", state: "Ladakh", value: "" },
    { id: "LD", state: "Lakshadweep", value: "" },
    { id: "PY", state: "Puducherry", value: "" },
  ];

  const colorScale = scaleQuantile()
    .domain(getHeatMapData.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const getCovidData = () => {
    const url = "https://api.rootnet.in/covid19-in/stats/latest";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        console.log("this is the response", res.data);

        updateData(res.data.regional);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="full-width-height container">
      <h1 className="no-margin center">States and UTs</h1>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={600}
        height={220}
        data-tip=""
      >
        {stateData.length > 0 && (
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo, index) => {
                getHeatMapData[0].value = stateData[0].confirmedCasesIndian;
                getHeatMapData[1].value = stateData[1].confirmedCasesIndian;
                getHeatMapData[2].value = stateData[2].confirmedCasesIndian;
                getHeatMapData[3].value = stateData[3].confirmedCasesIndian;
                getHeatMapData[4].value = stateData[4].confirmedCasesIndian;
                getHeatMapData[5].value = stateData[5].confirmedCasesIndian;
                getHeatMapData[6].value = stateData[6].confirmedCasesIndian;
                getHeatMapData[7].value = stateData[7].confirmedCasesIndian;
                getHeatMapData[8].value = stateData[8].confirmedCasesIndian;
                getHeatMapData[9].value = stateData[9].confirmedCasesIndian;
                getHeatMapData[10].value = stateData[10].confirmedCasesIndian;
                getHeatMapData[11].value = stateData[11].confirmedCasesIndian;
                getHeatMapData[12].value = stateData[12].confirmedCasesIndian;
                getHeatMapData[13].value = stateData[13].confirmedCasesIndian;
                getHeatMapData[14].value = stateData[14].confirmedCasesIndian;
                getHeatMapData[15].value = stateData[15].confirmedCasesIndian;
                getHeatMapData[16].value = stateData[16].confirmedCasesIndian;
                getHeatMapData[17].value = stateData[17].confirmedCasesIndian;
                getHeatMapData[18].value = stateData[18].confirmedCasesIndian;
                getHeatMapData[19].value = stateData[19].confirmedCasesIndian;
                getHeatMapData[20].value = stateData[20].confirmedCasesIndian;
                getHeatMapData[21].value = stateData[21].confirmedCasesIndian;
                getHeatMapData[22].value = stateData[22].confirmedCasesIndian;
                getHeatMapData[23].value = stateData[23].confirmedCasesIndian;
                getHeatMapData[24].value = stateData[24].confirmedCasesIndian;
                getHeatMapData[25].value = stateData[25].confirmedCasesIndian;
                getHeatMapData[26].value = stateData[26].confirmedCasesIndian;
                getHeatMapData[27].value = stateData[27].confirmedCasesIndian;
                getHeatMapData[28].value = stateData[28].confirmedCasesIndian;
                getHeatMapData[29].value = stateData[29].confirmedCasesIndian;
                getHeatMapData[30].value = stateData[30].confirmedCasesIndian;
                getHeatMapData[31].value = stateData[31].confirmedCasesIndian;
                getHeatMapData[32].value = stateData[32].confirmedCasesIndian;
                getHeatMapData[33].value = stateData[33].confirmedCasesIndian;
                getHeatMapData[34].value = stateData[34].confirmedCasesIndian;
                getHeatMapData[35].value = stateData[35].confirmedCasesIndian;
                // getHeatMapData[36].value =stateData[36].confirmedCasesIndian
                // getHeatMapData[37].value =stateData[37].confirmedCasesIndian

                const current = getHeatMapData.find((s) => s.id === geo.id);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                    style={geographyStyle}
                    onMouseEnter={onMouseEnter(geo, current)}
                    onMouseLeave={onMouseLeave}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
      {/* <LinearGradient data={gradientData} /> 
      <div className="center">
        <button className="mt16" onClick={onChangeButtonClick}>Change</button>
      </div> */}
    </div>
  );
}
