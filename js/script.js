var ctxBar = document.getElementById('barChart').getContext('2d');
var ctxPie = document.getElementById('pieChart').getContext('2d');
var ctxRadar = document.getElementById('radarChart').getContext('2d');
var ctxDoughnut= document.getElementById('doughnutChart').getContext('2d');
var ctxPolar= document.getElementById('polarChart').getContext('2d');
var ctxBubble= document.getElementById('bubbleChart').getContext('2d');
var ctxScatter= document.getElementById('scatterChart').getContext('2d');



const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const monthData = [2, 10, 5, 2, 20, 30, 45];
const chartColors =  ['rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 159, 64, 0.8)'
                ]



//Bar Chart
var chart = new Chart(ctxBar, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Bar Chart',
            backgroundColor:chartColors,
            // borderColor: 'rgb(255, 99, 132)',
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});



//Pie Chart
var chart = new Chart(ctxPie, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Pie Chart',
            backgroundColor: chartColors,
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});


// RadarChart
var chart = new Chart(ctxRadar, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Radr Chart',
            backgroundColor:chartColors,
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});


//  Dougnut Chart
var chart = new Chart(ctxDoughnut, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Doughnut Chart',
            backgroundColor: chartColors,
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});

//Polar Area

var chart = new Chart(ctxPolar, {
    // The type of chart we want to create
    type: 'polarArea',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Polar Area',
            backgroundColor:chartColors,
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});


//BUbble Chart

var chart = new Chart(ctxBubble, {
    // The type of chart we want to create
    type: 'bubble',

    // The data for our dataset
    data: {
        labels: month,
        datasets: [{
            label: 'Bubble Chart',
            backgroundColor:chartColors,
            data: monthData,
        }]
    },

    // Configuration options go here
    options: {}
});

//Scatter Chart
var chart = new Chart(ctxScatter, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});




