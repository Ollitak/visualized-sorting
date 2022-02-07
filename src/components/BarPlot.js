import React from "react"
import { Bar } from "react-chartjs-2"
import "chart.js/auto"

const options = {
  maintainAspectRatio: false,
  scales: {
    x : {
      display: false
    },
    y: {
      grid: {
        color: "white",
        borderColor:"white",
      },
      ticks: {
        color: "white",
        font: 100
      }
    }
  },
  animation: {
    duration: 0
  },
  backgroundColor: "rgb(0, 110, 40)",
  plugins: {
    legend: {
      display: false
    }
  }
}

const BarPlot = ({ values }) => {
  const labels = values

  const data = {
    labels: labels,
    datasets: [
      {
        label: "",
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
      />

    </div>
  )
}

export default BarPlot
