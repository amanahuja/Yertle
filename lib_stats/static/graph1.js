d3.json('/get_data_1', function(error, data1){
  if (error) {return console.warn(error)}
  //Width and height
  var svgW = 500;
  var svgH = 1500;

  var svg = d3.select(".graph1").append("svg")
          .attr("width", svgW)
          .attr("height", svgH);

  var max_rep = data1[0].repo_count
  console.log("max : " + max_rep)
  console.log("len(data1) : " + data1.length)
          
  // Nodes
  var node = svg.selectAll(".node").data(data1)
          .enter().append("g")
          .attr("class", "node");

  // Lib names with links
  node.append("a")
          .attr("height", 18)
          .attr("class", "target-lib")
          .attr("xlink:href", function (d) { return 'https://github.com/search?q=' + d.library_name + '&type=Repositories&l=Python'; } )
          .append("text").text(function(d) { return d.library_name; } )
          .attr("x", 10)
          .attr("y", function(d, i) {return i * 22 + 18});
          
  // Bar graph 
  var bar = node.append("g");
  // - bar title
  bar.append("title").text(function (d) {
    return d.repo_count + " repos use " + d.library_name
  } );

  // - bar rect
  bar.append("rect")
          .attr("height", 18)
          .attr("x", 120)
          .attr("y", function(d, i) {return i * 22 + 5})
          .attr("width", function(d) {
                  return 10;
                  //return (d.repo_count / max_rep }
                  })
          .attr("title", "test")
          .attr("opacity", .85)
          .attr("fill", function (d,i) {return "rgb(0, 0, " + (200 + 5 * (i % 10)) + ")";})
          .on("mouseover", function(){
              d3.select(this).transition().duration(500)
                  .attr("width", function(d) { 
                    return (d.repo_count + .1*(max_rep - d.repo_count))/60; })
              .attr("opacity", 1);
            })
          .on("mouseout", function(){
            d3.select(this).transition().duration(10)
              .attr("width", function(d) { return (d.repo_count / 60); })
                .attr("opacity", .85);
              });

  });
