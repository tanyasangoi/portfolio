
function wheatIn(){

    d3.select("#malt").append("svg")
      .attr("width", "100%")
      .attr("height", 400)
      .append("image")
      .attr("id", "wheat")
      .attr("x", 430)
      .attr("y", 80)
      .attr("class", "picture")
      .attr("xlink:href", "wheat.png");

    var imageTransition = d3.selectAll("#wheat").transition();

    imageTransition.attr("transform", "translate(-175)").duration(1000).delay(500);

    d3.select("#kiln")
       .transition().duration(1000).delay(1500)
        .style("background-color", "#720000");

    d3.select("svg")
        .append("image")
        .attr("id", "heatedwheat")
        .attr("x", 220)
        .attr("y", 80)
        .attr("class", "picture")
        .attr("xlink:href", "heatedwheat.png");

    var imgTransition = d3.select("#heatedwheat").transition();

    imgTransition.attr("transform", "translate(-140)").duration(1000).delay(2000);

    d3.select('#next').transition()
        .delay(2000)
        .duration(1000)
        .style('opacity','1');

    d3.select('#first').transition()
        .delay(2000)
        .duration(1000)
        .style('color','lightgrey');

    d3.select('#firsta').transition()
        .delay(2000)
        .duration(1000)
        .style('color','lightgrey');

}

function wheatOut() {
    d3.select("svg")
        .append("image")
        .attr("id", "heatedwheat")
        .attr("x", 220)
        .attr("y", 80)
        .attr("class", "picture")
        .attr("xlink:href", "heatedwheat.png");

    var imgTransition = d3.select("#heatedwheat").transition();

    imgTransition.attr("transform", "translate(-140)").duration(1000).delay(1000);

    //var tankChange = d3.select("#tank").transition();

    //tankChange.attr("background-color", "red").duration(500);
        d3.select("#kiln")
           .transition().duration(1000)
            .style("background-color", "#720000");




}

function maltOut() {

    //var wheatTransition = d3.select("#heatedwheat").transition();


    // wheatTransition.attr("transform", "translate(175, 0)").duration(1000).delay(1000);

    d3.select("#heatedwheat")
       .transition()
       .attr("transform", "translate(-140, 175)").duration(1000);

    d3.select("#heatedwheat")
       .transition()
       .attr("transform", "translate(0, 175)").duration(1000).delay(1000);

    d3.select("svg")
        .append("image")
        .attr("id", "milledmalt")
        .attr("x", 220)
        .attr("y", 240)
        .attr("class", "picture")
        .attr("xlink:href", "malt.png");

    var imgTransition = d3.select("#milledmalt").transition();

    imgTransition.attr("transform", "translate(175)").duration(1000).delay(2000);

}
