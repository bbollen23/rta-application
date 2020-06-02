import * as d3 from 'd3';
import React, {useState,useEffect} from 'react';

import wrap from '../utility/wordWrap';


const PercentageCircle = (props) => {
  const svgId = "mastery-percentage-" + props.id;


  const renderCircle = () => {
    
  
    var color = d3.interpolateRdYlGn(2*props.percentage - 0.8);

    var _outerRadius = ((props.size-25)/2);
    var _innerRadius = _outerRadius - 7;

    var tau = 2 * Math.PI;
    var arc = d3.arc()
    .innerRadius(_innerRadius)
    .outerRadius(_outerRadius)
    .startAngle(0);

    var svg = d3.select("#"+svgId),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // Add the background arc, from 0 to 100% (tau).
    var background = g.append("path")
      .datum({endAngle: tau})
      .style("fill", "#ddd")
      .attr("d", arc);

    var foreground = g.append("path")
      .datum({endAngle: 0})
      .style("fill", color)
      .attr("d", arc);

    setTimeout(()=>{
    foreground.transition()
        .duration(750)
        .attrTween("d", arcTween(props.percentage*tau));
    },500)

    function arcTween(newAngle){
      return function(d){
        var interpolate = d3.interpolate(0,newAngle);
        return function(t) {
          d.endAngle=interpolate(t);
          return arc(d);
        }
      }
    }

    var percentageText = svg.append('text').attr('transform',"translate(" + width / 2 + "," + height / 2 + ")").text(props.percentage*100 + '%').attr('class','percentage');
    var belowText = svg.append('text').attr('x',(width/2)).attr('y',(height/2)+40).text('of scholars are above mastery').attr('class','belowPercentage').call(wrap,100);

  // labels.enter().append('text').attr('x',d=>d.x).attr('y',d=>d.y).attr('text-anchor','middle').text(d=>d.text).attr('fill','grey').attr('font-size','10pt').call(this.wrap,80)
    
  }

  useEffect(()=>{
    renderCircle();
  })

  return(
    <svg id={svgId} width={props.size} height={props.size}>
      {/* <circle r="100" cx="125" cy="125" stroke="#6cbdbd" stroke-width="3" fill="white">
      </circle> */}
    </svg>
  )
}

export default PercentageCircle;