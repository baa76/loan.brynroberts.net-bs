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
            pointRadius: 0,
            pointHoverRadius: 8,
            cubicInterpolationMode: "monotone",
            data: currentBalance,
        }, {
            label: "Projected Balance",
            backgroundColor: "rgb(10,50,100)",
            borderColor: "rgb(10,50,100)",
            fill: true,
            showLine: false,
            lineTension: 0,
            pointRadius: 0,
            pointHitRadius: 4,
            pointHoverRadius: 8,
            cubicInterpolationMode: "monotone",
            data: projectedCurrentBalance,
        },
        {
            label: "Projected Balance Line",
            backgroundColor: "rgb(100,50,100)",
            borderColor: "rgb(100,50,100)",
            fill: false,
            // showLine: false,
            spanGaps: false,
            pointStyle: "dash",
            pointBorderWidth: 0,
            lineTension: 0,
            pointRadius: 0,
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
                    tooltipFormat: "ll",
                    max: moment("22-02-2022", "DD-MM-YYYY")
                },
                ticks: {
                    autoSkip: true,
                    maxRotation: 0,
                    fontSize: 10
                },
                gridLines: {
                    drawTicks: true
                },
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
                    beginAtZero: true,
                    fontSize: 12,
                    fontStyle: "Bold",
                    fontColor: "#A6A6A6"
                }
            }],
            yAxes: [{
                distribution: "linear",
                ticks: {
                    beginAtZero: true,
                    min: "0",
                    max: "5500",
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
console.log(pcbLine);
