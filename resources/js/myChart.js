const ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: projectedPaymentDate,
        datasets: [{
            label: "Current Balance",
            backgroundColor: "rgba(80, 255, 123, 0.5)",
            borderColor: "rgba(80, 255, 123, 0.5)",
            lineTension: 0,
            pointRadius: 1,
            pointHoverRadius: 8,
            cubicInterpolationMode: "monotone",
            data: currentBalance,
        }, {
            label: "Projected Balance",
            backgroundColor: "rgb(10,50,100)",
            borderColor: "rgb(10,50,100)",
            fill: false,
            lineTension: 0,
            pointRadius: 1,
            pointHoverRadius: 8,
            cubicInterpolationMode: "monotone",
            data: projectedCurrentBalance,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                id: "x-axis-0",
                type: "time",
                distribution: "linear",
                time: {
                    unit: "month",
                    displayFormats: {
                        month: "MMM"
                    },
                    tooltipFormat: "ll"
                },
                ticks: {
                    autoSkip: true,
                    maxRotation: 0,
                    minRotation: 0,
                    beginAtZero: true
                }
            },
            {
                id: "x-axis-1",
                type: "time",
                time: {
                    unit: "year",
                    max: moment("31-12-2022", "DD-MM-YYYY")
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: "0",
                    max: "5475",
                    callback: function(value, index, values) {
                        return "$ " + value;
                    }
                }
            }]
        },
    }
});

// chart.defaults.global.elements.point.radius = 1;

console.log(chart.options.scales);
console.log(chart);