var displayLineChart = function(player)
{
var playerName = player.Name
d3.json("Roster.json", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.players.filter(function(d) {  if( d.name == playerName) {return d};});
	var newData = []; 
	for (var key in filteredData[0]["ratings"][0]) {
		var newObj ={};
		switch (key) {
     			case "spd":  newObj.Rating = "Speed"; break;
			case "pss": newObj.Rating = "Pass"; break;
      			case "dnk": newObj.Rating = "Dunk"; break;
      			case "ft": newObj.Rating = "Free Throw";break;
			case "fg": newObj.Rating = "Field Goals"; break;
			case "jmp": newObj.Rating = "Jump"; break;
      			case "reb": newObj.Rating = "Rebounding"; break;
      			case "hgt": newObj.Rating = "Height"; break;
			case "endu": newObj.Rating = "Endurance"; break;
			case "drb": newObj.Rating = "Def Rebounding"; break;
			case "oiq": newObj.Rating = "Off IQ"; break;
			case "tp": newObj.Rating = "Turnover %"; break;
			case "diq": newObj.Rating = "Def IQ"; break;
			case "stre": newObj.Rating = "Stretch"; break;
			case "ins": newObj.Rating = "Ins"; break;
			 }
		newObj.RatingValue =parseInt( filteredData[0]["ratings"][0][key]); 
		newData.push(newObj);
	}
	
	newData = newData.sort(function (a, b) {
            return d3.ascending(a.RatingValue, b.RatingValue);
        })
  	//data.sort(function(a, b) { return a.value - b.value; });
	var svgline =  d3.select("#linechart").append("svg").attr("width",560).attr("height",300),
    	margin = {top: 20, right: 20, bottom: 30, left: 120},
    	width = +svgline.attr("width") - margin.left - margin.right,
   	 height = +svgline.attr("height") - margin.top - margin.bottom;
  
	var tooltip = d3.select("#linechart").append("div").attr("class", "toolTip");
  

	var g = svgline.append("g")
		.attr("transform", "translate("+ margin.left + "," + margin.top  + ")");
  
 	 //var x = d3.scaleLinear().range([0, width]);
	//var y = d3.scaleBand().range([height, 0]).padding(.1);
	//var color = d3.scaleOrdinal(d3.schemeCategory10);
	
	 var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(newData, function (d) {
                return d.RatingValue;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(newData.map(function (d) {
                return d.Rating;
            }));


	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	  var yAxis = d3.svg.axis()
            .scale(y)
            //no tick marks
            .tickSize(0)
            .orient("left");
	
	
  	x.domain([0, d3.max(newData, function(d){ return  d.RatingValue ; })])
        y.domain(newData.map(function(d) { return d.Rating }));
 	//color.domain(newData.map(function(d) { return d.Rating }));
    
	g.append("g")
        .attr("class", "x axis")
       	.attr("transform", "translate(0," + 480 + ")")
      	.call(xAxis);

    	g.append("g")
        .attr("class", "y axis")
	.call(yAxis);

	 var bars = g.selectAll(".bar")
            .data(newData)
            .enter()
            .append("g");

	
   // g.selectAll(".bar")
    //        .data(newData)
     //       .enter()
      //      .append("g")
	 
      bars.append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.rangeBand())
        .attr("y", function(d) { return y(d.Rating); })
        .attr("width", function(d) { return x(d.RatingValue); })
	// .style('fill',function(d,i) {return color(i);})
        
	
	bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.Rating) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.RatingValue) + 3;
            })
            .text(function (d) {
                return d.RatingValue;
            })
});
}
