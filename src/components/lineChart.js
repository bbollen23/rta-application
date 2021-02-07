import React,{useState,useEffect} from 'react';
import * as d3 from 'd3';

import useWindowDimensions from '../utility/windowDimensions';

const LineChart = props => {
  

  var data = [
    {d:[3,3,3.5,3.5,3.5,4,4.1,4.1,4.1,4.3,4.3,4.8],color:""},
    {d:[2,2,2.4,2.9,3.4,4,4.1,4.1,4.1,4.3,4.3,4.8],color:""},
    {d:[2.3,2.1,2.3,2.8,3.1,3.3,3.5,3.4,3.8,4.1,4.3,4.8],color:""},
    {d:[2.1,2.5,3,3.3,3.3,3.1,3.6,4.1,4.1,4.3,4.3,4.8],color:""},
    {d:[1.7,2.1,2.3,2.8,3.1,3.2,3.2,3.7,4.1,4.3,4.3,4.8],color:""},
    {d:[1.1,1.4,1.7,2.2,2.7,3.2,3.3,3.2,3.2,3.2,3.2,3.2],color:""},
    {d:[4,4,4,4,4,4,4.1,4.1,4.1,4.6,5,5],color:""},
    {d:[4.3,4.3,4.3,4.3,4.4,4.3,4.1,4.1,4.1,4.3,4.3,4.8],color:""},
    {d:[2,2.5,2.5,2.6,2.2,2,2.3,2.6,3,3.1,3.1,3.3],color:""}
  ];

  const [viewWidth, viewHeight] = useWindowDimensions();



  // const _width = viewWidth*0.88-40-400;
  let value = 0.88/6;
  const _width = viewWidth >= 1920 ? value*4*viewWidth-40-50 : 0.88*viewWidth-40-50;
  const _height = viewHeight*0.35, svgId = "line-chart-" + props.id;

  
  const _margin = 25;
  const _innerWidth = _width - 2*_margin, _innerHeight = _height - 2*_margin

  const n = 12;

  const renderLineChart = () => {

    var categories = props.categories;
    console.log(categories);

    var tickLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9','Day 10', 'Day 11', 'Day 12']

    var _xScale = d3.scaleLinear().domain([1,n]).range([_margin,_innerWidth]);
    var _yScale = d3.scaleLinear().domain([0,5]).range([_innerHeight,_margin]);
  
    var line = d3.line().x((d,i)=>_xScale(i+1)+40).y(d=>_yScale(d)-20);
  
    var _data = data.filter((entry,index)=>categories[index].toggle);
  
    var _data = [];

    for(let i = 0; i < data.length; i++){
      if(categories[i].toggle){
        let entry = {
          ...data[i],
          color:categories[i].color
        }
        _data.push(entry);
      }
    }
    console.log(_data);
  

    function make_x_gridlines() {		
      return d3.axisBottom(_xScale)
        .ticks(5)
    }
    
    // gridlines in y axis function
    function make_y_gridlines() {		
      return d3.axisLeft(_yScale)
        .ticks(5)
    }
  



    var svg = d3.select("#" + svgId)       


        // svg.append("g")			
    //   .attr("class", "grid")
    //   .attr("transform", "translate(" + 20 + ", " + _innerHeight + ")")
    //   .call(make_x_gridlines()
    //       .tickSize(-_innerHeight)
    //       .tickFormat("")
    //   )

    // add the Y gridlines


    svg.append("g")			
      .attr("class", "grid")
      .attr("transform",'translate(' + (_margin + 40) + ',' + ('-20') + ')')
      .call(make_y_gridlines()
          .tickSize(-_innerWidth)
          .tickFormat("")
      )

  
    svg.append("g").attr('class','x-axis-none').attr('stroke','none').attr('transform',"translate(" + 40 + ", " + _innerHeight + ")").call(d3.axisBottom(_xScale).tickFormat((d,i)=>tickLabels[i]));
  
    svg.append("g").attr('class','y-axis-none').attr('stroke','none').attr('transform','translate(' + _margin + ',' + "-20" + ')').call(d3.axisLeft(_yScale).ticks(5));
  
    svg.selectAll('.line')
      .data(_data)
      .enter()
      .append("g")
      .attr("class","path-group")
      .append('path')
      .attr("stroke",d=>d.color)
      .datum(d=>d.d)
      .attr("class","line")
      .attr("d",line);


    var pathgroups = svg.selectAll('.path-group').data(_data).attr('fill',d=>d.color);
    

    var outerDots = pathgroups.selectAll('.dot-outer').data(d=>d.d).enter().append('circle')
    .attr("class", "dot-outer") // Assign a class for styling
    .attr("cx", function(d, i) { return _xScale(i+1)+40 })
    .attr("cy", function(d) { return _yScale(d)-20 })
    .attr("r", 8)  

    var dots = pathgroups.selectAll('.dot').data(d=>d.d).enter().append('circle')
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) { return _xScale(i+1)+40 })
      .attr("cy", function(d) { return _yScale(d)-20 })
      .attr("r", 5)  


    


  }



  useEffect(()=>{
    renderLineChart();
    console.log('rendered shit')

    return function cleanup(){
      d3.selectAll("#" + svgId + " > *").remove();
    }
  },[JSON.stringify(props.categories)])

  return(
    <svg id={svgId} class="line-chart" width={_width+25} height={_height}>
    </svg>
  )
}

export default LineChart