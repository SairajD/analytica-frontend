import React from 'react'
import Chart from "react-apexcharts"

function DougnutChart(props) {
    return (
        <div>
            
            <Chart
              options={props.data.options}
              series={props.data.series}
              type="donut"
              width={props.width}
              height={props.height}
            />
        </div>
    )
}

export default DougnutChart
