import React from "react"
import { Bar } from "react-chartjs-2"
import "chart.js/auto"

const options = {
  responsive: false,
  scales: {
    x : {
      display: false
    }
  },
  animation: {
    duration: 0
  }
}

const BarPlot = ({ values }) => {
  const labels = values

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sort",
        data: values,
        borderWidth: 1
      }
    ]
  }


  return (
    <div>
      <Bar
        data={data}
        options={options}
        height="400"
        width="500"
      />

    </div>
  )
}

export default BarPlot
