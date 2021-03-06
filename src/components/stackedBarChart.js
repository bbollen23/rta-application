import * as d3 from 'd3';
import React, {useState, useEffect} from 'react';

import useWindowDimensions from '../utility/windowDimensions';
import wrap from '../utility/wordWrap';



const StackedBarChart = props => {
  const svgId = "stacked-barChart-" + props.id; 

  const [viewWidth, viewHeight] = useWindowDimensions();
  const height = 0.35*viewHeight;
  const width = viewWidth >= 1920 ? 0.66*viewWidth-40-100 : 0.88*viewWidth-40-100;
   //0.88 comes from the grade page's view width that it takes up. 40 is from the two left paddings of 20px each, and the extra 100 is space taken from te right.

  const innerWidth = width*0.8;
  const innerHeight = height*0.85;

  const [data, setData] = useState([{'concept':'Multiplying 3-Digit Numbers','0':20,'1':15,'2':18,'3':27,'4':20},
  {'concept':'Unknown Numbers in Multiplication','0':10,'1':21,'2':16,'3':10,'4':43},
  {'concept':'Multiplying Fractions','0':0,'1':22,'2':25,'3':15,'4':38},
  {'concept':'Reducing Fractions','0':10,'1':15,'2':15,'3':15,'4':45},
  {'concept':'Properties of Operations','0':5,'1':5,'2':6,'3':34,'4':50},
  {'concept':'Factors & Divisibility','0':2,'1':11,'2':7,'3':60,'4':20},
  {'concept':'Comparing and Separating WP','0':12,'1':10,'2':11,'3':50,'4':17},
  {'concept':'Multiplication & Division WP','0':8,'1':21,'2':12,'3':47,'4':12},
  {'concept':'Equal Groups WP','0':8,'1':10,'2':20,'3':55,'4':7}])

  var renderChart = () => {
    var _id = svgId;

    var _svg = d3.select("#"+_id)

    var stack = d3.stack().keys(['0','1','2','3','4']).order(d3.stackOrderNone).offset(d3.stackOffsetNone);
    
    var series = stack(data,d=>d.concept)

    var color = d3.scaleOrdinal(d3.schemeBlues[6])
    .domain(series.map(s => s.key)); 


    var _concepts = data.map(d=>d.concept); 
    var _yRange = data.map((d,i)=>innerHeight-(i*(innerHeight/data.length)));
    
    //The series above genereates a two dimensional array with the beginning and ends of each rectangle. 

    var _yScale = d3.scaleBand().domain(_concepts).rangeRound([innerHeight,0]).padding(0.2)
    var _xScale = d3.scaleLinear().domain([0,100]).range([0,innerWidth]) //takes in the actual values


    var _groups = _svg.selectAll('.group').data(series);

    var _bars = _groups.enter()
      .append('g')
      .attr('class','group')
      .attr('fill',(d,i)=>{return color(i+1)})
      .selectAll('.rect').data(d=>d);

    var _percentages = _groups.enter()
      .append('g')
      .attr('class','group')
      .selectAll('.percent-text')
      .data(d=>d);


    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max-700)+700);
    }

    var _randomArray = [getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250),getRandomInt(1250)]

    var inc = 0; 
    _bars.enter().append('rect')
      .attr('x',200)
      .attr('y',(d,i)=>_yScale(_concepts[i])+30)
      .attr('height',_yScale.bandwidth())
      .attr('stroke-width',1)
      .attr('stroke','rgb(125,125,125)')
    .transition()
      .duration((d,i)=>{return _randomArray[i%9]})
      .attr('x',d=>_xScale(d[0])+200)
      .attr('width',d=>{return _xScale(d[1]-d[0])})

    _percentages.enter().append("text")
      .attr('x',200)
      .attr('y',(d,i)=>_yScale(_concepts[i])+48)
      .attr('class','percentage-value')
      .attr('height',_yScale.bandwidth())
    .transition()
      .duration((d,i)=>{return _randomArray[i%9]})
      .attr('x',d=>_xScale(d[1])+155)
      .text((d,i)=>{
        let value = d.data[Math.floor(inc/9)]
        inc = inc + 1;
        return value + "%";
      })

    _svg.append('g')
      .attr('class','y-axis')
      .attr('transform','translate(200,30)' )
      .call(d3.axisLeft(_yScale))
    .selectAll(".tick text")
      .call(wrap,200);

  }

  useEffect(()=>{
    renderChart();
    return function cleanup(){
      d3.selectAll("#" + svgId + " > *").remove();
    }
  },[viewWidth,viewHeight])

  return(
    <div style={{padding:"0px 20px"}}>
      <svg width={width} height={height} id={svgId}/>
    </div>
  )
}



export default StackedBarChart;