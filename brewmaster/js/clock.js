function renderClock() {


    var radians = 0.0174532925,
        clockRadius = 55,
        margin = 25,
        width = (clockRadius+margin)*2,
        height = (clockRadius+margin)*2,
        hourHandLength = 2*clockRadius/5,
        minuteHandLength = 3*clockRadius/4,
        secondTickStart = clockRadius,
        secondTickLength = -10,
        hourTickStart = clockRadius,
        hourTickLength = -18,
        secondLabelRadius = clockRadius + 16,
        secondLabelYOffset = 5;


    var hourScale = d3.scale.linear()
        .range([0,330])
        .domain([0,11]);

    var minuteScale = secondScale = d3.scale.linear()
        .range([0,354])
        .domain([0,59]);

    var handData = [
        {
            type:'hour',
            value:0,
            length:-hourHandLength,
            scale:hourScale
        },
        {
            type:'minute',
            value:0,
            length:-minuteHandLength,
            scale:minuteScale
        },
    ];

    function drawClock(){ //create all the clock elements
        updateData();	//draw them in the correct starting position
        var svg = d3.select(".clock").append("svg")
            .attr("width", width)
            .attr("height", height);

        var face = svg.append('g')
            .attr('id','clock-face')
            .attr('transform','translate(' + (clockRadius + margin) + ',' + (clockRadius + margin) + ')');

        //add marks for seconds
        face.selectAll('.second-tick')
            .data(d3.range(0,60)).enter()
            .append('line')
            .attr('class', 'second-tick')
            .attr('x1',0)
            .attr('x2',0)
            .attr('y1',secondTickStart)
            .attr('y2',secondTickStart + secondTickLength)
            .attr('transform',function(d){
                return 'rotate(' + secondScale(d) + ')';
            });
        //and labels

        face.selectAll('.second-label')
            .data(d3.range(5,61,5))
            .enter()
            .append('text')
            .attr('class', 'second-label')
            .attr('text-anchor','middle')
            .attr('x',function(d){
                return secondLabelRadius*Math.sin(secondScale(d)*radians);
            })
            .attr('y',function(d){
                return -secondLabelRadius*Math.cos(secondScale(d)*radians) + secondLabelYOffset;
            })
            .text(function(d){
                return d;
            });


        var hands = face.append('g').attr('id','clock-hands');

        face.append('g').attr('id','face-overlay')
            .append('circle').attr('class','hands-cover')
            .attr('x',0)
            .attr('y',0)
            .attr('r',clockRadius/20);

        hands.selectAll('line')
            .data(handData)
            .enter()
            .append('line')
            .attr('class', function(d){
                return d.type + '-hand';
            })
            .attr('x1',0)
            .attr('y1',function(d){
                return d.balance ? d.balance : 0;
            })
            .attr('x2',0)
            .attr('y2',function(d){
                return d.length;
            })
            .attr('transform',function(d){
                return 'rotate('+ d.scale(d.value) +')';
            });
    }

    function moveHands(){
        d3.select('#clock-hands').selectAll('line')
            .data(handData)
            .transition()
            .attr('transform',function(d){
                return 'rotate('+ d.scale(d.value) +')';
            });
    }

    function updateData(){
        //var t = new Date();
        handData[0].value = 12 ;
        //handData[1].value = t.getMinutes();
        if(handData[1].value < 60)
            handData[1].value += 1;
    }

    drawClock();

    setInterval(function(){
        updateData();
        moveHands();
    }, 100);

    d3.select(self.frameElement).style("height", height + "px");
}
