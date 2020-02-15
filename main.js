renderChart();

async function renderChart() {
    data = await getData();
    const ctx = document.getElementById('chart').getContext('2d');

    const graphSelector = document.querySelector("canvas#chart");
    const graphPos = graphSelector.getBoundingClientRect();

    var gradientStroke = ctx.createLinearGradient(0, graphPos.top, 0, graphPos.bottom + graphPos.width * 2);
    gradientStroke.addColorStop(0, "#1f428780");
    gradientStroke.addColorStop(1, "#ffffff80");
    console.log(graphPos);

    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Statistique',
                data: data.ys,
                backgroundColor: gradientStroke,
                borderColor:
                    '#1e3687',
                borderWidth: 3
            }]
        },
        options: {
            events: {
                onHover: null,
            },
            legend: {
                display: false,
            },
            animation: {
                easing: "easeInOutBack",
            },
            tooltips: {
                display: false,
            },
            scales: {
                yAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true,
                        max: 20, // Max value + 2;
                    },
                }],
                xAxes: [{
                    display: false,
                }],
            }
        }
    });
}

async function getData() {
    xs = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']; 
    ys = [12, 9, 6, 18, 17, 14]; // Comme il n'y a pas de légende pour les axes, on peut mettre n'importe quelle valeurs
    // dans le tableau xs, cependant il faut que les tableaux xs et ys soient de la même taille sinon seul le nombre de valeurs
    // présentent dans le tableau xs seront affiché.
    // xs = [];
    return { xs, ys };
}