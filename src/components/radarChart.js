import * as d3 from 'd3';
import React,{useState,useEffect} from 'react';

import wrap from '../utility/wordWrap';
import useWindowDimensions from '../utility/windowDimensions';


export default function RadarChart(props){
  const svgId = "radarChart-" + props.id, radarRange = [0,1,2,3,4,5]

  const [viewWidth, viewHeight] = useWindowDimensions();
  const height = 500;
  const width = 500;
  const radius = (width - 170)/10; //Words are wrappe to fit into 80 pixels --> two sets means 160,added 10 for buffer zone
  const innerHeight = height*0.85;
  const innerWidth = width*0.8;

  // const radarCategories = ['Operations of Arithmetic', 'Addition of Mixed Numbers', 'Sovling Equations by Inspection', 'Subtraction of Fractions', 'Long Division','Evaluating Equations', 'Comparing and Ordering Integers', 'Fractional Parts WP', 'Multiplication & Division WP'];

  const radarCategories = ['Multiplying 3-Digit Numbers','Unknown Numbers in Multiplication','Multiplying Fractions','Reducing Fractions','Properties of Operations','Factors & Divisibility','Comparing and Separating WP','Multiplication & Division WP','Equal Groups WP']


  // const colors = d3.schemeSet3;
  // const colors = d3.schemeCategory10;
  // const colors = d3.schemePaired;

  // const colors = d3.interpolateCool;
  const colors = d3.interpolatePuBu;
  //  const colors = d3.interpolateRainbow;



  const radarValues = [
    // [2,4,0,0,0,0,0,0,0],
    // [2,4,4,3,0,0,0,0,0],
    // [2,4,4,3,3,2,0,0,0],
    // [2,4,4,3,3,2,1,0,0],
    // [2,4,4,3,3,2,1,5,0],
    // [2,4,4,3,3,2,1,5,5],


    [2,  2.2,3.1,3.5,2  ,1  ,3.3,0.6,3  ],
    [2.4,2.2,3.4,3.9,2  ,1  ,5  ,1.1,3.5],
    [2.4,2.2,3.8,4  ,2  ,1  ,5  ,1.6,3.9],
    [2.9,2.7,3.7,4  ,2  ,1  ,5  ,1.9,4.3],
    [3.3,3.2,4  ,4  ,2  ,1  ,5  ,2.2,4.7],
    [3.4,3.7,4.2,4  ,2  ,1  ,5  ,2.4,4.7],
    [3.9,4  ,4.2,4  ,2  ,1.2,5  ,2.9,4.7],
    [4  ,4  ,4.2,4  ,2  ,1.4,5  ,3.4,4.7],
    [4  ,4  ,4.2,4  ,2  ,1.9,5  ,3.8,4.7],
    [4  ,4  ,4.3,4  ,2.5,2.4,5  ,4  ,4.7],
    [4  ,4  ,4.4,4  ,3  ,2.9,5  ,4  ,4.7],
    [4  ,4  ,4.4,4  ,3.5,3.3,5  ,4  ,4.7],

  ];


  const renderGridLines = () => {
    let _categories = radarCategories;
    let _centerX = width*0.5;
    let _centerY = height*0.5;

    let _svg = d3.select("#" + svgId);

    let _points = [],_gridLines = [],_labels=[];

    let n = _categories.length;

    let inc = (2*Math.PI)/n;

    for(let i = 0; i < n;i++){
      _points.push({
        x:Math.cos(i*inc-(Math.PI/2)),
        y:Math.sin(i*inc-(Math.PI/2))
      });
    }

    for(let j = 0; j < n;j++){
      let start = _points[j],end = j === (n-1) ? _points[0] : _points[j+1];
      let K = radarRange.length;
      for(let k = 1; k < K; k++){
        _gridLines.push({
          x1:start.x*radius*k + _centerX,
          y1:start.y*radius*k + _centerY,
          x2:end.x*radius*k + _centerX,
          y2:end.y*radius*k + _centerY})
      }


      _gridLines.push({
        x1:_centerX,
        y1:_centerY,
        x2:end.x*radius*(K-1) + _centerX,
        y2:end.y*radius*(K-1) + _centerY
      })

      _labels.push({
        text:_categories[j],
        x:end.x*radius*(K-1)*1.3 + _centerX,
        y:end.y*radius*(K-1)*1.3 + _centerY,
      })
    }

    let gridLines = _svg.selectAll('.line').data(_gridLines);
    let labels = _svg.selectAll('.label').data(_labels);

    gridLines.enter().append('line').attr('class','grid-line').attr('stroke-width','1').attr('x1',d=>d.x1).attr('x2',d=>d.x2).attr('y1',d=>d.y1).attr('y2',d=>d.y2);

    labels.enter().append('text').attr('class','label').attr('x',d=>d.x).attr('y',d=>d.y).attr('text-anchor','middle').text(d=>d.text).call(wrap,80)

  }


  const renderChart = (color,values,index,end) => {

    let _values = values;
    let _centerX = width*0.5;
    let _centerY = height*0.5;
    let _color = color;

    let _svg = d3.select("#" + svgId);

    let _points = [], _polyGonPoints=[];

    let n = _values.length;

    let inc = (2*Math.PI)/n;

    for(let i = 0; i < n;i++){
      _points.push({
        x:Math.cos(i*inc-(Math.PI/2)),
        y:Math.sin(i*inc-(Math.PI/2))
      });
    }


    for(let m = 0; m < n; m++){
      let _point = _points[m];
      _polyGonPoints.push({
        x:_point.x*radius*_values[m] + _centerX,
        y:_point.y*radius*_values[m] + _centerY
      })
    }

    let chart = _svg.selectAll(".chart").data([_polyGonPoints]);
    let vertices = _svg.selectAll('.chart-vertices').data(_polyGonPoints);

    chart.enter().append("polygon").attr('class','chartPoly')
    .attr("points",function(d) { 
        return d.map(function(d) {
            return [d.x,d.y].join(",");
        }).join(" ");
    })
    .attr('stroke-opacity',0)
    .attr("stroke",'white')
    .attr("stroke-width",1)
    .attr("fill",_color)
    .attr("fill-opacity",d=>(index+1) === end ? 0.7 : 0.7)
    // .attr("fill-opacity",0.3)
    .transition()
    .duration(300)
    .attr('stroke-opacity',1)

    // vertices.enter().append('circle')
    // .attr('cx',d=>d.x)
    // .attr('cy',d=>d.y)
    // .attr('r',2)
    // .attr('fill',"#ced1d8")

  }



  useEffect(()=> {
    renderGridLines();
    let [start,end] = props.days;
    if(!props.lock){
      for(let i = end-1; i >= start-1 ; i --){
        let value = radarValues[i];
        // let color = colors[i%12]
        let color = colors(0.4*(i/12)+0.6);
        renderChart(color,value,i,end);
      }  
    } else{
      // let colorStart = colors[(start-1)%12]
      // let colorEnd = colors[(end-1)%12]

      let colorStart = colors(0.4*((start-1)/12)+0.6)
      let colorEnd = colors(0.4*((end-1)/12)+0.6)

      renderChart(colorEnd,radarValues[end-1],end-1,end)
      renderChart(colorStart,radarValues[start-1],start-1,end)
    }
    
    // renderChart(colors[(start-1)%12],radarValues[start-1],start-1,end);
    // renderChart(colors[(end-1)%12],radarValues[end-1],end-1,end);


    return function cleanup(){
      d3.selectAll("#" + svgId + " > *").remove();
    }
  },[props.days,props.lock])

  return(
    <svg width={width} height={height} id={svgId}></svg>
  )
}


