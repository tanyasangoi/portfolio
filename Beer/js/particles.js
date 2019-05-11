function rendersugar()
{
    var width = 400,

        height = 300;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        r: d3.scale.linear().domain([0, 1]).range([8, 8]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv1").append("canvas")
        .attr("id", "sugar")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var i;

    var particles = d3.range(30)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                r: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function() {
        particles = tick(particles);
        draw(particles);
    }, 66);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.r += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.r = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.r = .1;
            }
            if (d.r <= 0) d.r = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                r = scale.r(d.r),
                a = scale.a(d.r);
            context.beginPath()
            context.arc(x, y, r, 0, 2*Math.PI);
            context.fillStyle = "#dcdcdc";
            context.fill();
        });
    }
}

function displaysugar(){
    d3.select(".partdiv1").transition().duration(1500)
        .style("opacity", "1");

}

function rendergrain()
{
    var width = 400,

        height = 300,

        h = 150;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        width: d3.scale.linear().domain([0, 1]).range([24, 24]),
        height: d3.scale.linear().domain([0, 1]).range([24, 24]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv2").append("canvas")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(40)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                width: Math.random(),
                height: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function() {
        particles = tick(particles);
        draw(particles);
    }, 66);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.width += Math.random()*.01 - .005;
            d.height += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.width <= 0) d.width = .1;
            if (d.height <= 0) d.height = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                width = scale.width(d.width),
                height = scale.height(d.height),
                a = scale.a(d.r);

            base_image = new Image();
            base_image.src = 'grain.png';
            context.drawImage(base_image, x, y);
            /*context.beginPath()
            context.rect(x, y, width, height);
            context.fillStyle = "#785f2e";
            context.fill(); */
        });
    }
}


function renderbitterhops(t)
{
    var width = 400,

        height = 150;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        width: d3.scale.linear().domain([0, 1]).range([24, 24]),
        height: d3.scale.linear().domain([0, 1]).range([24, 24]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv3").append("canvas")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(7)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                width: Math.random(),
                height: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function(t) {
        particles = tick(particles);
        draw(particles);
    }, t);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.width += Math.random()*.01 - .005;
            d.height += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.width <= 0) d.width = .1;
            if (d.height <= 0) d.height = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                width = scale.width(d.width),
                height = scale.height(d.height),
                a = scale.a(d.r);

            base_image = new Image();
            base_image.src = 'hops.png';
            context.drawImage(base_image, x, y);

        });
    }
}



function renderaromahops(t)
{
    var width = 400,

        height = 150;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        width: d3.scale.linear().domain([0, 1]).range([24, 24]),
        height: d3.scale.linear().domain([0, 1]).range([24, 24]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv4").append("canvas")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(5)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                width: Math.random(),
                height: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function(t) {
        particles = tick(particles);
        draw(particles);
    }, t);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.width += Math.random()*.01 - .005;
            d.height += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.width <= 0) d.width = .1;
            if (d.height <= 0) d.height = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                width = scale.width(d.width),
                height = scale.height(d.height),
                a = scale.a(d.r);

            base_image = new Image();
            base_image.src = 'aromahops.png';
            context.drawImage(base_image, x, y);

            /*context.beginPath()
            context.rect(x, y, width, height);
            context.fillStyle = "#785f2e";
            context.fill(); */

        });
    }
}



function renderflavorhops(t)
{
    var width = 400,

        height = 150;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        width: d3.scale.linear().domain([0, 1]).range([24, 24]),
        height: d3.scale.linear().domain([0, 1]).range([24, 24]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv5").append("canvas")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(5)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                width: Math.random(),
                height: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function(t) {
        particles = tick(particles);
        draw(particles);
    }, t);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.width += Math.random()*.01 - .005;
            d.height += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.width = .1;
                d.height = .1;
            }
            if (d.width <= 0) d.width = .1;
            if (d.height <= 0) d.height = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                width = scale.width(d.width),
                height = scale.height(d.height),
                a = scale.a(d.r);

            base_image = new Image();
            base_image.src = 'flavorhops.png';
            context.drawImage(base_image, x, y);

        });
    }
}

function renderaleyeast()
{
    var width = 370,

        height = 30;

    var w = width - 10;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, w]),
        y: d3.scale.linear().domain([0, 1]).range([height/3,0])
        };

    var canvas = d3.select(".partdiv6").append("canvas")
        .attr("id", "yeast")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(60)
        .map(function() {
            return {
                x: 0.4,
                y: 2.5,
                r: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function() {
        particles = tick(particles);
        draw(particles);
    }, 10);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.r += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.r = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.r = .1;
            }
            if (d.r <= 0) d.r = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),

            base_image = new Image();
            base_image.src = 'yeast.png';
            context.drawImage(base_image, x, y);

        });
    }
    var h = 325;

        setInterval(function(){
            for(var i=0; i<2; i++){
                h = h - i;
                if(h == 250)
                    break;
            document.getElementById('yeastdiv').setAttribute("style", "margin-top: " + h + "px");
        }}, 50);
}

function renderlageryeast()
{
    var width = 370,

        height = 30;

    var w = width - 10;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, w]),
        y: d3.scale.linear().domain([0, 1]).range([height/3,0])
    };

    var canvas = d3.select(".partdiv6").append("canvas")
        .attr("id", "yeast")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var particles = d3.range(60)
        .map(function() {
            return {
                x: 0.4,
                y: 2.5,
                r: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function() {
        particles = tick(particles);
        draw(particles);
    }, 10);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            d.y += .001*Math.sin(d.t);
            d.r += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.r = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.r = .1;
            }
            if (d.r <= 0) d.r = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),

                base_image = new Image();
            base_image.src = 'yeast.png';
            context.drawImage(base_image, x, y);

        });
    }
    var h = 325;

    setInterval(function(){
        for(var i=0; i<2; i++){
            h = h + i;
            if(h == 425)
                break;
            document.getElementById('yeastdiv').setAttribute("style", "margin-top: " + h + "px");
        }}, 50);

}

function renderCO2() {

    var width = 370,

        height = 200;

    var scale = {
        x: d3.scale.linear().domain([0, 1]).range([0, width]),
        y: d3.scale.linear().domain([0, 1]).range([height,0]),
        r: d3.scale.linear().domain([0, 1]).range([6, 6]),
        a: d3.scale.linear().domain([0, 1]).range([.1, .6])
    };

    var canvas = d3.select(".partdiv7").append("canvas")
        .attr("id", "CO2")
        .attr("width", width)
        .attr("height", height);

    var context = canvas.node().getContext("2d");

    var i;

    var particles = d3.range(40)
        .map(function() {
            return {
                x: Math.random(),
                y: Math.random(),
                r: Math.random(),
                t: Math.random()*2*Math.PI
            };
        });

    draw(particles);
    setInterval(function() {
        particles = tick(particles);
        draw(particles);
    }, 10);

    function tick(particles) {
        return particles.map(function(d) {
            d.t += Math.random()*.5 - .25;
            d.x += .001*Math.cos(d.t);
            var temp = .01*Math.sin(d.t);
            if(d.y + temp > d.y)
                d.y += .01*Math.sin(d.t);
            else d.y = 0;
            d.r += Math.random()*.01 - .005;
            if (d.x < 0 || d.x > width) {
                d.x = .5;
                d.r = .1;
            }
            if (d.y < 0 || d.y > height) {
                d.y = .5;
                d.r = .1;
            }
            if (d.r <= 0) d.r = .1;
            return d;
        });
    }

    function draw(particles) {
        context.clearRect(0, 0, width, height);
        particles.forEach(function(d) {
            var x = scale.x(d.x),
                y = scale.y(d.y),
                r = scale.r(d.r),
                a = scale.a(d.r);
            context.beginPath();
            context.arc(x, y, r, 0, 2*Math.PI);
            context.stroke();
            context.fillStyle = "white";
            context.fill();
        });
    }

}

function displayCO2(){
    d3.select(".partdiv7").transition().duration(3000)
        .style("opacity", "1");

}


function changeOpacity() {
    d3.select("#fillgauge3")
        .transition().duration(3000)
        .style("opacity","0.75");

    d3.select(".partdiv1")
        .transition().duration(1500)
        .style("opacity","0");

    d3.select(".partdiv2")
        .transition().duration(1500)
        .style("opacity","0");



}

function addHops() {

    d3.select(".partdiv3")
        .transition().duration(1000)
        .style("opacity","1");

    document.getElementById('setboil').setAttribute("style", "color: black");
    document.getElementById('first').setAttribute("style", "color: lightgrey");
    document.getElementById('bhops').setAttribute("style", "color: lightgrey");



}
function clearDiv(elementID){
document.getElementById(elementID).innerHTML="";

}

function hideP() {
    document.getElementById('first').setAttribute("style", "color: lightgrey");
    document.getElementById('addwater').setAttribute("style", "color: lightgrey");
    document.getElementById('setheat').setAttribute("style", "color: black");
}

function emptyDiv(elementID) {
    d3.selectAll(elementID).remove();
}

function resetFerment(odo1, odo2, yeastid){
    document.getElementById('alert1').setAttribute("style", "color: white");
    document.getElementById('alert2').setAttribute("style", "color: white");
    emptyDiv('#yeast');
    document.getElementById('co2div').setAttribute("style","opacity: 0");
    emptyDiv('#thermometer');
    document.getElementById(odo1).setAttribute("style","opacity: 0");
    document.getElementById(odo2).setAttribute("style","opacity: 1");
    document.getElementById('days').setAttribute("style","opacity: 1");
    document.getElementById(yeastid).setAttribute("style","opacity: 0.5");
}

function showDiv(e1, e2){
    d3.select(e1)
        .transition().duration(1000)
        .style("opacity","1");

    d3.select(e2)
        .transition()
        .style("opacity","0");
}