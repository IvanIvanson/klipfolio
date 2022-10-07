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
    myChart(); 
    myChart2();
    myChart3();

}


export default initCanvas;