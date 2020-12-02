import React, { useRef, useLayoutEffect } from "react";
import Chart from "chart.js";

// const gradient = CanvasGradient();
// gradient.addColorStop(0, "green");
// gradient.addColorStop(0.5, "cyan");
// gradient.addColorStop(1, "green");

const chartConfig = (legend, labels) => {
  var ctx = document.getElementById("myChart").getContext("2d");
  var gradientStroke = ctx.createLinearGradient(0, 0, 0, 170);
  gradientStroke.addColorStop(0, "#f7f7f7");
  gradientStroke.addColorStop(1, "#eae6f8");

  const chartOptions = {
    type: "line",

    data: {
      labels: labels,
      datasets: [
        {
          label: legend,
          data: [0, 1, 0, 0, 1, 2, 3, 0, 0, 1, 1],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: "#10c83c",
          backgroundColor: gradientStroke,
          pointRadius: 0,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
    },
  };

  return chartOptions;
};

const TosseWrapper = () => {
  const chartContainer = useRef(null);

  useLayoutEffect(() => {
    const newChartInstance = new Chart(
      chartContainer.current,
      chartConfig("Intensidade da tosse", [
        "Red",
        "Blue",
        "Yellow",
        "Green",
        "Purple",
        "Orange",
      ])
    );
  }, []);

  return (
    <div style={{ margin: "15px" }}>
      <canvas ref={chartContainer} id="myChart" />
    </div>
  );
};

export default TosseWrapper;
