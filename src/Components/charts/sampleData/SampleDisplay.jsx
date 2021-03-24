import React, {useState, useEffect} from 'react'
// import DougnutChart from '../doughnut/DougnutChart'
import Chart from "react-apexcharts"
import axios from 'axios'


const documentID = '604865dc9c7f42544d67f492'

function SampleDisplay() {

    const [sampleData, setSampleData] = useState({series:[],options:{labels:[]}})

    const chart = () => {
        let positive
        let negative
        axios
            .get(`https://analytica-parsb-api.herokuapp.com/instagram/tags/${documentID}/download`)
            .then(response => {

                positive = parseInt(response.data.numberOfPositives)
                negative = parseInt(response.data.numberOfNegatives)
                setSampleData({
                    series:[positive, negative],
                    options:{
                        labels:["positive", "negative"]
                    }
                })
                                
            })
            .catch(err => {
                console.log(err)
            })
            

                console.log(sampleData)
            }
    

   

    useEffect(() => {
        
        chart();
                                                                             
    }, [])

    
    return (
        <div>

            <Chart
               options={sampleData.options} 
               series={sampleData.series}
               type="donut"
               width="500"
             />
        </div>
    )
}

export default SampleDisplay
