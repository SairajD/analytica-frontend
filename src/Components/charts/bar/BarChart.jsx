import React from 'react'
import Chart from "react-apexcharts"

function BarChart(props) {
    return (
        <div>
            <Chart
              options={props.data.options}
              series={props.data.series}
              type="bar"
              width="500"
            />
        </div>
    )
}

export default BarChart
