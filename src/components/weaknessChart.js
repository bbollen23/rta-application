import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';

import wrap from '../utility/wordWrap';
import useWindowDimensions from '../utility/windowDimensions';


export default function WeaknessChart(props){

  const svgId = "weakness-chart-" + props.id;
  
  // const chartM

  const [viewWidth, viewHeight] = useWindowDimensions();
  const height = 0.35*viewHeight;
  // const width = 0.4*viewWidth;
  const width = viewWidth >= 1920 ? 0.44*viewWidth-40-100 : 0.88*viewWidth-40-100;
   //0.88 comes from the grade page's view width that it takes up. 40 is from the two left paddings of 20px each, and the extra 100 is space taken from te right.
  const innerHeight = height*0.75;
  const innerWidth = width*0.9;

  
  


  const data = [
    {'concept':'Long Division','frequency':1},
    {'concept':'Exponents','frequency':3},
    {'concept':'LCM','frequency':6},
    {'concept':'GCF','frequency':7},
    {'concept':'Remainders','frequency':8},
    {'concept':'Multiplication Tables','frequency':9},
    {'concept':'Reducing Mixed Numbers','frequency':11},
    {'concept':'Adding Fractions','frequency':14},
  ]

  const data_old = [
    {'concept':'Long Division','frequency':3},
    {'concept':'Exponents','frequency':4},
    {'concept':'LCM','frequency':6},
    {'concept':'GCF','frequency':4},
    {'concept':'Remainders','frequency':9},
    {'concept':'Multiplication Tables','frequency':7},
    {'concept':'Reducing Mixed Numbers','frequency':9},
    {'concept':'Adding Fractions','frequency':16},
  ]

  var renderChart = () => {
    var _id = svgId;

    var _svg = d3.select("#" + _id);

    var _concepts = data.map(d=>d.concept);
    console.log(data.map(d=>d.frequency));
    var _maxY = Math.max(...data.map(d=>d.frequency));
    console.log(_maxY);

    console.log(_concepts)

    var _xScale = d3.scaleBand().domain(_concepts).rangeRound([0,innerWidth]).padding(0.5)
    var _yScale = d3.scaleLinear().domain([0,_maxY+2]).range([innerHeight,0])

    var _bars = _svg.selectAll('rect').data(data);
    var oldBars = _svg.selectAll('.old-bars').data(data_old)

    // _svg.append('clipPath')
    //   .attr('id','barClipPath')
    //   .append('rect')
    //   .attr('x',100)
    //   .attr('y',40)
    //   .attr('width',innerWidth)
    //   .attr('height',innerHeight)

      function make_x_gridlines() {		
        return d3.axisBottom(_xScale)
          .ticks(12)
      }
      
      // gridlines in y axis function
      function make_y_gridlines() {		
        return d3.axisLeft(_yScale)
          .ticks(16)
      }
  
      // _svg.append("g")			
      //   .attr("class", "grid")
      //   .attr('transform','translate(100,' + (innerHeight+40) + ")")
      //     .call(make_x_gridlines()
      //       .tickSize(-innerHeight)
      //       .tickFormat("")
      //   )
  
      _svg.append("g")			
        .attr("class", "grid")
        .attr('transform','translate(100,' + 40 + ")")

        .call(make_y_gridlines()
            .tickSize(-innerWidth)
            .tickFormat("")
        )


    _bars.enter().append('rect')
      .attr('class','weakness-bar')
      .attr('y',innerHeight+40)
      .attr('height',0)
      .attr('x',(d,i)=>_xScale(d.concept)+100)
      .attr('width',(_xScale.bandwidth()/3.5))
      .attr('clip-path','url(#barClipPath)')
    .transition()
      .duration(1000)
      .attr('y',(d,i)=>{return _yScale(d.frequency)+40})
      .attr('height',d=>innerHeight-_yScale(d.frequency))

    oldBars.enter().append('rect')
      .attr('class','weakness-bar--past')
      .attr('y',innerHeight+40)
      .attr('height',0)
      .attr('x',(d,i)=>_xScale(d.concept)+100+(_xScale.bandwidth()*0.35))
      .attr('width',(_xScale.bandwidth()/3.5))
      .attr('clip-path','url(#barClipPath)')
    .transition()
      .duration(1000)
      .attr('y',(d,i)=>{return _yScale(d.frequency)+40})
      .attr('height',d=>innerHeight-_yScale(d.frequency))
    


    _svg.append('g')
      .attr('class','y-axis-none')
      .attr('transform','translate(100,' + 40 + ")")
      .call(d3.axisLeft(_yScale));

    _svg.append('g')
      // .style('font-size','11pt')
      .style('font-family'," 'Roboto', sans-serif")
      .attr('class','x-axis-none')
      .attr('transform','translate(100,' + (innerHeight+40) + ")")
      .call(d3.axisBottom(_xScale))
    .selectAll(".tick text")
      .attr('transform','translate(0,10)')
      .attr('text-anchor','middle')
      .attr('x',0)
      .call(wrap,2*_xScale.bandwidth());





    

    console.log(_xScale.bandwidth());


  }

  useEffect(()=>{
    renderChart();
    return function cleanup(){
      d3.selectAll("#" + svgId + " > *").remove();
    }
  },[viewWidth,viewHeight])


  return(
    <div style={{padding:"0px 20px"}}>
      <svg className="weakness-frequency" width={width} height={height} id={svgId}/>
    </div>
  )

}