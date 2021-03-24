import React from 'react'
import Chart from "react-apexcharts"

function LineChart(props) {
    return (
        <div>
            <Chart
              options={props.data.options}
              series={props.data.series}
              type="line"
              width={props.width}
              height={props.height}
            />
        </div>
    )
}

export default LineChart