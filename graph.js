//This is the logic for making the graph
//need an dictionary with key as name of website and the result is the time spend on that in 1 day

//This variable will be the parameter to google.visualization.arrayToDataTable();
var temp = [
            ["Element", "Density", { role: "style" }],
            // ["Copper", 8.94, "#b87333"],
            // ["Silver", 10.49, "silver"],
            // ["Gold", 19.30, "gold"],
            // ["Platinum", 21.45, "color: #e5e4e2"]
        ]

//Push method to update the graph
temp.push(["Copper", 8.94, "#b87333"])

//This is using google chart to display the graph
google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable(temp);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
            {
                calc: "stringify",
                sourceColumn: 1,
                type: "string",
                role: "annotation"
            },
            2]);

        var options = {
            title: "Density of Precious Metals, in g/cm^3",
            width: 600,
            height: 400,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }