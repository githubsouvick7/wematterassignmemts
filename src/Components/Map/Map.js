import React from "react";
import DatamapsIndia from "react-datamaps-india";
const data = require('./MapData.json')

const MapChart = () => {
    return (
        <div style={{ position: "relative" }}>
            <DatamapsIndia
                style={{ postion: "relative" }}
                regionData={data}
                hoverComponent={({ value }) => {
                    return (
                        <div>
                            <div>{value.name}</div>
                        </div>
                    );
                }}
                mapLayout={{
                    title: "",
                    startColor: "#FFDAB9",
                    endColor: "#FF6347",
                    hoverTitle: "Count",
                    noDataColor: "#f5f5f5",
                    borderColor: "#8D8D8D",
                    hoverBorderColor: "#8D8D8D",
                    hoverColor: "green",
                    height: 10,
                    weight: 10
                }}
            />
        </div>
    );
};

export default MapChart;
