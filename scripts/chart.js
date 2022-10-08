const initCanvas = function () {
const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Customer Retention",
          data: [15, 25, 13, 15, 12, 9],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
          // tension: 0.8,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }); 
    const ctx2 = document.getElementById("myChart2").getContext("2d");
 const myChart2 = new Chart(ctx2, {
   type: "bar",
   data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [
       {
         label: "Customer Acuisiltion",
         data: [45, 39, 76, 52, 28, 39],
         backgroundColor: [
           "rgba(255, 99, 132, 0.2)",
           "rgba(54, 162, 235, 0.2)",
           "rgba(255, 206, 86, 0.2)",
           "rgba(75, 192, 192, 0.2)",
           "rgba(153, 102, 255, 0.2)",
           "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
           "rgba(255, 99, 132, 1)",
           "rgba(54, 162, 235, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(75, 192, 192, 1)",
           "rgba(153, 102, 255, 1)",
           "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 1,
       },
     ],
   },
   options: {
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 }); 
  const ctx3 = document.getElementById("myChart3").getContext("2d");
 const myChart3 = new Chart(ctx3, {
   type: "bar",
   data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [
       {
         label: "MRR",
         data: [1.2, 2.140, -0.5, 1.5, -1.3, 0.93],
         backgroundColor: [
           "rgba(255, 99, 132, 0.2)",
           "rgba(54, 162, 235, 0.2)",
           "rgba(255, 206, 86, 0.2)",
           "rgba(75, 192, 192, 0.2)",
           "rgba(153, 102, 255, 0.2)",
           "rgba(255, 159, 64, 0.2)",
         ],
         borderColor: [
           "rgba(255, 99, 132, 1)",
           "rgba(54, 162, 235, 1)",
           "rgba(255, 206, 86, 1)",
           "rgba(75, 192, 192, 1)",
           "rgba(153, 102, 255, 1)",
           "rgba(255, 159, 64, 1)",
         ],
         borderWidth: 1,
       },
     ],
   },
   options: {
     scales: {
       y: {
         beginAtZero: true,
       },
     },
   },
 }); 
// ---------------
  const cnvbubble = document.getElementById("mychart-bubble")
  const popCanvas = cnvbubble.getContext("2d");
  // let w = window.innerWidth;
  // let h = window.innerHeight;

  // cnvbubble.width = w / 4;
  // cnvbubble.height = w / 5;

const data = {
  datasets: [
    {
      label: ["Deer Population"],
      data: [
        {
          x: 100,
          y: 0,
          r: 10,
        },
        {
          x: 60,
          y: 30,
          r: 20,
        },
        {
          x: 40,
          y: 60,
          r: 25,
        },
        {
          x: 80,
          y: 80,
          r: 50,
        },
        {
          x: 20,
          y: 30,
          r: 25,
        },
        {
          x: 50,
          y: 110,
          r: 15,
        },
      ],
      backgroundColor: [
        " #75E1B2",
        "#FFB85C",
        "#E41B50",
        "#4B57C5",
        "#B0B8FC",
        "#34AD78",
      ],
    },
  ],
};
  const config = {
    type: 'bubble',
    data: data,
    options: {}
}
var bubbleChart = new Chart(popCanvas, config);


// ---------------
const ctxrev = document.getElementById("revenuechart").getContext("2d");
const myChartrev = new Chart(ctxrev, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "blue"],
    datasets: [
      {
        label: "Customer Retention",
        data: [0, 5, 3, 5, 12, 15, 39],
        backgroundColor: [
          "#4A56C5",
          // "rgba(54, 162, 235, 0.2)",
          // "rgba(255, 206, 86, 0.2)",
          // "rgba(75, 192, 192, 0.2)",
          // "rgba(153, 102, 255, 0.2)",
          // "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "#4A56C5",
          // "rgba(54, 162, 235, 1)",
          // "rgba(255, 206, 86, 1)",
          // "rgba(75, 192, 192, 1)",
          // "rgba(153, 102, 255, 1)",
          // "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 4,
        tension: 0.8,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
}); 


// ----------------
    myChart(); 
    myChart2();
    myChart3();
  bubbleChart();
  myChartrev();
}


export default initCanvas;