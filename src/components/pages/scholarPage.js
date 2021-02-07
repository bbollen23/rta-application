import React, {useState, useEffect} from 'react';

import RadarChart from '../radarChart';
import MySlider from '../slider';
import LineChart from '../lineChart';
import WeaknessTimeline from '../weaknessTimeline';
import ReportTable from '../reportTable';
import DailyReport from '../dailyReport';


import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import { Chip } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import * as d3 from 'd3';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));


const CategoryChip = withStyles(props=>({
  colorPrimary:{
    backgroundColor:props => props.overrideColor,
    opacity:props => props.toggled ? 1 : 0.3
  }
}))(Chip)



const CategoryChips = props => {

  const classes = useStyles();

  const data = props.data;
  


  return(
    <div className="category-chips">
      {Object.values(data).map(entry => {


        return(
          <CategoryChip
            overrideColor={entry.color + " !important"}
            toggled={entry.toggle}
            key={entry.key}
            label={entry.label}
            className={classes.chip}
            color={'primary'}
            deleteIcon={<CheckCircleIcon/>}
            onDelete={()=>props.handleToggle(entry.key)}
          />
        )
      })}
    </div>
  )
}


export default function ScholarPage(){
  const marks = [{value:1, label: "Day 1"}, {value:12, label:"Day 12"}]
  const [days, setDays] = useState([1,12]);
  const [reportDay, setReportDay] = useState(1);
  const [lock,setLock] = useState(false);
  const [reportOpen,setReportOpen] = useState(false);

  const colors = d3.schemeCategory10;

  const [data,setData] = useState({
    0:{
        key:0,
        label:'Multiplying 3-Digit Numbers',
        toggle:true,
        color:colors[0]
      },
    1:{
        key:1,
        label:'Unknown Numbers in Multiplication',
        toggle:true,
        color:colors[1]
      },
    2:{
        key:2,
        label:'Multiplying Fractions',
        toggle:true,
        color:colors[2]}
        ,
    3:{
        key:3,
        label:'Reducing Fractions',
        toggle:true,
        color:colors[3]
      },
    4:{
        key:4,
        label:'Properties of Operations',
        toggle:true,
        color:colors[4]
      },
    5:{
        key:5,
        label:'Factors & Divisibility',
        toggle:true,
        color:colors[5]
      },
    6:{
        key:6,label:'Comparing and Separating WP',
        toggle:true,
        color:colors[6]
      },
    7:{
        key:7,
        label:'Multiplication & Division WP',
        toggle:true,
        color:colors[7]
      },
    8:{
        key:8,
        label:'Equal Groups WP',
        toggle:true,
        color:colors[8]
      }
  })


  const handleDaysChange = (event,newDays) => {
    if(newDays !== days){
      setDays(newDays);
    }
  }

  const handleToggle = key => {
    setData({
      ...data,
      [key]:{
        ...data[key],
        toggle:!data[key].toggle
      }
    })
  }

  const handleSetReportOpen = bool =>{
    setReportOpen(bool);
  }

  const handleLockChange = () => {
    setLock(!lock);
  }

  return(
    <div className="page-container" id="scholar">


      <Paper elevation={2} className="card performance-by-concept-container-radar">
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>
        <div className="radar-chart-container">
          <RadarChart id={1} days={days} lock={lock}/>

          <div className="title-container slider-container">
            <MySlider
              value={days}
              onChange={handleDaysChange}
              valueLabelFormat={inputValue=>{return `Day ${inputValue}` }}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              marks={marks}
              min={1}
              max={12}
            />
            <Fab size="small" className="lock" color="secondary" aria-label="add" onClick={handleLockChange}>
              {lock ? <LockTwoToneIcon/> : <LockOpenTwoToneIcon/>}
            </Fab>
          </div>
        </div>
      </Paper>




      <Paper className="card performance-by-concept-container-line">
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>

        <div className="line-chart-container">
          <LineChart id={1} categories={data} height={500} width={950}/>
          <CategoryChips data={data} handleToggle={handleToggle}/>
        </div>
      </Paper>


      <Paper className="card weakness-timeline-container">
        <div className="title-container">
          <div className="title min">Weakness Timeline</div>
        </div>
        <div className="weakness-timeline-inner-container">
          <WeaknessTimeline width={900} id={1} height={250}/>
        </div>
      </Paper>
    
      <Paper className="card reports-table-container">
        <div className="title-container">
          {/* <Typography variant="h5" component="h2">Frequency of Weaknesses</Typography> */}
          <div className="title min">Daily Reports</div>
        </div>
        <div className="reports-table-inner-container">
          {/* <WeaknessTimeline width={900} height={250}/> */}
          <ReportTable setReportOpen={handleSetReportOpen}/>
          <DailyReport open={reportOpen} handleClose={()=>handleSetReportOpen(false)}/>
        </div>
      </Paper>

    </div>
  )
}
