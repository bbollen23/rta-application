import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import wrap from '../utility/wordWrap';

const WeaknessTimeline = props => {
  const svgId = "weaknessTimeline-" + props.id;
  const margin = {top: 20, right: 10, bottom: 20, left: 10};

  const width = props.width - margin.left - margin.right;
  const height = props.height - margin.top - margin.bottom;

  const chartMargin = {top:10,right:10,bottom:50,left:150} //The margin that tells us how far the actual axes and physical chart is moved from the boundary, to leave space fore labels and such
  const chartWidth = width - chartMargin.right - chartMargin.left;
  const chartHeight = height - chartMargin.top - chartMargin.bottom;

  const renderChart = () => {
    var data = [{label:'Multiplication Tables',x1:4,x2:8},{label:'Adding Fractions',x1:1,x2:3},{label:'GCF',x1:2,x2:9},{label:'LCM',x1:1,x2:6},{label:'Remainders',x1:7,x2:12},{label:'Exponents',x1:6,x2:11}]

    var dotData = [];

    data.forEach(entry=>{
      dotData.push([entry.x1,entry.x2]);
    })


    var weaknesses = data.map(d=>d.label);
    // var yScale = d3.scaleLinear().domain([0,data.length-1]).range([chartHeight,0]);
    var xScale = d3.scaleLinear().domain([1,12]).range([0,chartWidth]);
    var yScale = d3.scaleBand().domain(weaknesses).rangeRound([chartHeight,0]).padding(0.4)

    var svg = d3.select("#" + svgId).attr('transform','translate('+ (margin.left) +',0)');

    var xAxis = svg.append("g")
      .attr('class','x-axis')
      .attr('stroke','none')
      .attr('transform','translate(' + (margin.left + chartMargin.left) + ',' + (margin.top + chartMargin.top + chartHeight)+')')
      .call(d3.axisBottom(xScale).tickFormat(d=>
        { return "Day " + d }
      ));

    var yAxis = svg.append("g")
      .attr('class','y-axis-none')
      .attr('stroke','none')
      .attr('transform','translate(' + (margin.left + chartMargin.left) + ',' +  (margin.top + chartMargin.top) +')')
      .call(d3.axisLeft(yScale))
    .selectAll(".tick text")
      .call(wrap,150);;


    function make_x_gridlines() {		
      return d3.axisBottom(xScale)
        .ticks(12)
    }
    
    // gridlines in y axis function
    function make_y_gridlines() {		
      return d3.axisLeft(yScale)
        .ticks(5)
    }

    svg.append("g")			
      .attr("class", "weakness-grid")
      .attr("transform", "translate(" + (margin.left+chartMargin.left) + ", " + (chartHeight+margin.top+chartMargin.top) + ")")
      .call(make_x_gridlines()
          .tickSize(-chartHeight)
          .tickFormat("")
      )

    // svg.append("g")			
    //   .attr("class", "weakness-grid")
    //   .attr("transform",'translate(' + (margin.left+chartMargin.left) + ',' + (margin.top+chartMargin.top) + ')')
    //   .call(make_y_gridlines()
    //       .tickSize(-width)
    //       .tickFormat("")
    //   )



    var lines = svg.selectAll('.weakness-line').data(data);

    lines.enter()
      .append('rect')
      .attr('class','weakness-line')
      .attr('rx',7)
      .attr('ry',7)
      .attr('y',d=>(yScale(d.label)+margin.top+chartMargin.top))
      .attr('height',yScale.bandwidth())
      .attr('x',d=>(margin.left + chartMargin.left) )
    .transition()
      .duration(750)
        .attr('x',d=>(xScale(d.x1)+ margin.left + chartMargin.left) )
        .attr('width',d=>(xScale(d.x2 - d.x1+1)) )
      // .attr('stroke-width',1)
      // .attr('stroke','black')

    // var dotGroups = svg.selectAll('.dot-group').data(dotData);
    
    // dotGroups.enter().append('g')
    //   .attr('transform',(d,i)=> {return 'translate(0,' + (yScale(data[i].label)+margin.top+chartMargin.top) + ')'})
    //   .attr('class','dot-group')
    // .selectAll('.dot')
    //   .data(d=>d)
    //   .enter()
    //   .append('circle')
    //   .attr('class','dot')
    //   .attr('cx',d=>xScale(d)+margin.left+chartMargin.left)
    //   .attr('cy',2)
    //   .attr('r',5)
    //   .attr('fill','red');
    
    // .data(d=>d).enter().append('circle').attr('class','dot').attr('x',xScale(d=>d)+margin.left+chartMargin.left).attr('y',0).attr('r',3);

    // dots.enter().append('circle').app


  }

  useEffect(()=>{
    renderChart();
  },[])

  return(<svg id={svgId} width={props.width} height={props.height}></svg>)
}

export default WeaknessTimeline;
