function rendertemp(page){

    var svg = d3.select("#tempslider"),
        margin = {top: 40, right: 40, bottom: 40, left: 40},
        width = svg.attr("width") - margin.left - margin.right,
        midX = width/2,
        height = svg.attr("height") - margin.top - margin.bottom;


    var y = d3.scale.linear()
        .domain([220, 0])
        .range([0, height])
        .clamp(true);

    var brush = d3.svg.brush()
        .y(y)
        .extent([0, 0])
        .on("brush", brushed);

    var g = svg.append("g")
        .attr("id", "thermometer")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var slider = g.append("g")
        .attr("transform", "translate(" + midX + ", 0)");

    slider.append("g")
        .attr("class", "y axis")
        .call(d3.svg.axis()
            .scale(y)
            .orient("right")
            .tickFormat(function(d) { return d + "°"; })
            .tickSize(0)
            .tickPadding(13))
        .select(".domain")
        .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
        .attr("class", "halo");

    var prevVal = 0;
    var handle = slider.append("path")
        .attr("class", "handle")
        .attr("d", "M-7 -4 L-7 4 L-5 6 L5 6 L11 0 L5 -6 L-5 -6 Z")
        .attr("transform", "translate(0, " + y(prevVal) + ")");

    /*d3.select(".ibuslider")
        .style("background-color", d3.hsl(y(prevVal), .8, .8));*/

    var ruler = slider.append("g")
        .attr("transform", "translate(-4, 0)")
        .attr("class", "ruler")
        .call(brush);

    ruler.selectAll(".extent,.resize")
        .remove();

    ruler.select(".background")
        .style("cursor", "ns-resize")
        .attr("width", 40);

    // initial animation
    /*ruler.call(brush.event)
        .transition()
        .duration(750)
        .ease("out-in")
        .call(brush.extent([120, 120]))
        .call(brush.event); */

    function brushed() {
        var value = brush.extent()[1],
            t = d3;

        if (d3.event.sourceEvent) { // not a programmatic event
            value = y.invert(d3.mouse(this)[1]);
            brush.extent([value, value]);
            if (d3.event.sourceEvent.type === "mousemove") {
                d3.selectAll("#mercury").remove();
                // interrupt transition
                /*handle.interrupt();
                d3.select("body").interrupt();*/
            } else if (value != prevVal) {
                d3.selectAll("#mercury").remove();
                // animate when is't a click, not a drag
                /*t = d3.transition()
                    .duration(Math.abs(y(value) - y(prevVal)))
                    .ease("out-in"); */
            }
        }

        t.select(".handle")
            .attr("transform", "translate(0, " + y(value) + ")");
        /*t.select("body")
            .style("background-color", d3.hsl(value, .8, .8));*/

        prevVal = value;

        console.log(value);


        if (page == 2) {
            var mercury = d3.select("#tempslider")
                .append("rect")
                .attr("id", "mercury")
                .attr("x", 48)
                .attr("fill", "red")
                .attr("y", function () {
                    return 46 + y(value);
                })
                .attr("width", 4)
                .attr("height", function () {
                    return y(0) - y(value) - 6;
                });

            if (value < 200)
                document.getElementById('alert').setAttribute("style", "color: red; font-size: 19px");
            else {
                document.getElementById('next').setAttribute("style", "color: black");
                document.getElementById('alert').setAttribute("style", "color: white");
                document.getElementById('fhops').setAttribute("style", "color: dark orange");
                document.getElementById('ahops').setAttribute("style", "color: dark orange");
                document.getElementById('setboil').setAttribute("style", "color: lightgrey");
                clearDiv('hops');
                renderbitterhops(0.5);
            }
        }

        else if (page == 1){
            var mercury = d3.select("#tempslider")
                .append("rect")
                .attr("id", "mercury")
                .attr("x", 48)
                .attr("fill", "red")
                .attr("y", function () {
                    return 46 + y(value);
                })
                .attr("width", 4)
                .attr("height", function () {
                    return y(0) - y(value) - 6;
                });

            if (value < 100) {
                document.getElementById('alert1').setAttribute("style", "color: red; font-size: 19px");
                document.getElementById('alert2').setAttribute("style", "color: white; font-size: 19px"); }

            else if (value > 170) {
                document.getElementById('alert2').setAttribute("style", "color: red; font-size: 19px");
                document.getElementById('alert1').setAttribute("style", "color: white; font-size: 19px");
                burn("black");}

            else {
                document.getElementById('next').setAttribute("style", "color: black");
                document.getElementById('alert1').setAttribute("style", "color: white");
                document.getElementById('alert2').setAttribute("style", "color: white");
                document.getElementById('drain').setAttribute("style", "color: dark orange");
                document.getElementById('setheat').setAttribute("style", "color: lightgrey");
                changeColor(4000);
                displaysugar();
            }


        }


    }


}

function renderftemp(bottom, top, odoid){

        var svg = d3.select("#tempslider"),
            margin = {top: 40, right: 40, bottom: 40, left: 40},
            width = svg.attr("width") - margin.left - margin.right,
            midX = width/2,
            height = svg.attr("height") - margin.top - margin.bottom;


        var y = d3.scale.linear()
            .domain([100, 0])
            .range([0, height])
            .clamp(true);

        var brush = d3.svg.brush()
            .y(y)
            .extent([0, 0])
            .on("brush", brushed);

        var g = svg.append("g")
            .attr("id", "thermometer")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var slider = g.append("g")
            .attr("transform", "translate(" + midX + ", 0)");

        slider.append("g")
            .attr("class", "y axis")
            .call(d3.svg.axis()
                .scale(y)
                .orient("right")
                .tickFormat(function(d) { return d + "°"; })
                .tickSize(0)
                .tickPadding(13))
            .select(".domain")
            .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
            .attr("class", "halo");

        var prevVal = 0;
        var handle = slider.append("path")
            .attr("class", "handle")
            .attr("d", "M-7 -4 L-7 4 L-5 6 L5 6 L11 0 L5 -6 L-5 -6 Z")
            .attr("transform", "translate(0, " + y(prevVal) + ")");

        /*d3.select(".ibuslider")
            .style("background-color", d3.hsl(y(prevVal), .8, .8));*/

        var ruler = slider.append("g")
            .attr("transform", "translate(-4, 0)")
            .attr("class", "ruler")
            .call(brush);

        ruler.selectAll(".extent,.resize")
            .remove();

        ruler.select(".background")
            .style("cursor", "ns-resize")
            .attr("width", 40);

        // initial animation
        /*ruler.call(brush.event)
            .transition()
            .duration(750)
            .ease("out-in")
            .call(brush.extent([120, 120]))
            .call(brush.event); */

        function brushed() {
            var value = brush.extent()[1],
                t = d3;

            if (d3.event.sourceEvent) { // not a programmatic event
                value = y.invert(d3.mouse(this)[1]);
                brush.extent([value, value]);
                if (d3.event.sourceEvent.type === "mousemove") {
                    d3.selectAll("#mercury").remove();
                    // interrupt transition
                    /*handle.interrupt();
                    d3.select("body").interrupt();*/
                } else if (value != prevVal) {
                    d3.selectAll("#mercury").remove();
                    // animate when is't a click, not a drag
                    /*t = d3.transition()
                        .duration(Math.abs(y(value) - y(prevVal)))
                        .ease("out-in"); */
                }
            }

            t.select(".handle")
                .attr("transform", "translate(0, " + y(value) + ")");
            /*t.select("body")
                .style("background-color", d3.hsl(value, .8, .8));*/

            prevVal = value;


                var mercury = d3.select("#tempslider")
                    .append("rect")
                    .attr("id", "mercury")
                    .attr("x", 48)
                    .attr("fill", "red")
                    .attr("y", function () {
                        return 46 + y(value);
                    })
                    .attr("width", 4)
                    .attr("height", function () {
                        return y(0) - y(value) - 6;
                    });

                if (value < bottom) {
                    document.getElementById('alert1').setAttribute("style", "color: red; font-size: 19px");
                    document.getElementById('alert2').setAttribute("style", "color: white; font-size: 19px"); }

                else if (value > top) {
                    document.getElementById('alert2').setAttribute("style", "color: red; font-size: 19px");
                    document.getElementById('alert1').setAttribute("style", "color: white; font-size: 19px");
                    burnWort("darkolivegreen");}

                else if (value < top && value > bottom) {
                    /*document.getElementById('next').setAttribute("style", "color: black");*/
                    document.getElementById('alert1').setAttribute("style", "color: white");
                    document.getElementById('alert2').setAttribute("style", "color: white");
                    /*document.getElementById('drain').setAttribute("style", "color: dark orange");
                    document.getElementById('setheat').setAttribute("style", "color: lightgrey");
                    changeColor(4000);*/
                    displayCO2();
                    burnWort("#cb8100")

                    if(odoid==1) {
                    setInterval(function(){
                        odometer1.innerHTML = 30;
                    }, 1500);
                    //d3.selectAll(".wort").transition().style ("opacity", "0.9").duration(3000);
                    }
                    if(odoid==2)
                        setInterval(function(){
                            odometer2.innerHTML = 60;
                        }, 1500);
                }





        }


}