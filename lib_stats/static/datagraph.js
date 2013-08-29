//Width and height
var svgW = 840;
var svgH = 50;
var barPadding = 1;

var svg = d3.select(".datagraph").append("svg")
        .attr("width", svgW)
        .attr("height", svgH);

var dataset = [];                        //Initialize empty array
for (var i = 0; i < 35; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset = dataset.concat(newNumber); //Add new number to array
}

svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
                return i * (svgW / dataset.length);
        })
        .attr("width", svgW/ dataset.length - barPadding)
        .attr("y", function(d) { return svgH - d; } )
        .attr("height", function(d) {
                return d * 4;
        })
        .attr("fill", function(d) {
                return "rgb(0,0, " + (d * 100) + ")";
        })
;

