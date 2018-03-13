const ctx = document.getElementById("myChart").getContext("2d");
let chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: projectedPaymentDate,
        datasets: [{
            label: "Projected Balance",
            backgroundColor: "rgb(10,50,100)",
            borderColor: "rgb(10,50,100)",
            fill: false,
            data: projectedCurrentBalance,
        }, {
            label: "Current Balance",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: currentBalance,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                id: "x-axis-0",
                type: "time",
                time: {
                    unit: "quarter",
                    displayFormats: {
                        quarter: "MMMM"
                    }
                },
                ticks: {
                    autoSkip: true
                }
            },
            {
                id: "x-axis-1",
                type: "time",
                time: {
                    unit: "year",
                    displayFormats: {
                        year: "YYYY"
                    }
                },
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: true
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});


console.log(chart);