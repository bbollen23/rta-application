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
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'flex-start',flex:1,height:'500px', flexWrap:"wrap"}}>
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

  const [data,setData] = useState({0:{key:0,label:'Multiplying 3-Digit Numbers',toggle:true,color:colors[0]},1:{key:1,label:'Unknown Numbers in Multiplication',toggle:true,color:colors[1]},2:{key:2,label:'Multiplying Fractions',toggle:true,color:colors[2]},3:{key:3,label:'Reducing Fractions',toggle:true,color:colors[3]},4:{key:4,label:'Properties of Operations',toggle:true,color:colors[4]},5:{key:5,label:'Factors & Divisibility',toggle:true,color:colors[5]},6:{key:6,label:'Comparing and Separating WP',toggle:true,color:colors[6]},7:{key:7,label:'Multiplication & Division WP',toggle:true,color:colors[7]},8:{key:8,label:'Equal Groups WP',toggle:true,color:colors[8]}})


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
      <Paper elevation={2} className="card" style={{display:'flex',flexDirection:'column',alignItems:'center',padding:0,gridColumn:"1 / span 2"}}>
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>
        <div style={{padding:'20px'}}>
          <RadarChart id={1} days={days} lock={lock}/>

          <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
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
            <Fab size="small" style={{position:'relative',left:'60px',top:"-5px"}} color="secondary" aria-label="add" onClick={handleLockChange}>
              {lock ? <LockTwoToneIcon/> : <LockOpenTwoToneIcon/>}
            </Fab>
          </div>
        </div>
      </Paper>

      <Paper className="card" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',padding:0,gridColumn:"3 / span 4"}}>
        <div className="title-container">
          <div className="title min">Performance by Concept</div>
        </div>
        <div style={{padding:'20px',flex:1,display:'flex',width:"calc(100% - 40px)",justifyContent:'flex-start',alignItems:"center"}}>
          <LineChart id={1} categories={data} height={500} width={850}/>
          <CategoryChips data={data} handleToggle={handleToggle}/>
        </div>
      </Paper>


      <Paper className="card" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',padding:0,gridColumn:"1 / span 3", gridRow:"2"}}>
        <div className="title-container">
          <div className="title min">Weakness Timeline</div>
        </div>
        <div style={{padding:'20px',flex:1,display:'flex',width:"calc(100% - 40px)",justifyContent:'flex-start'}}>
          <WeaknessTimeline width={900} id={1} height={250}/>
        </div>
      </Paper>
    
      <Paper className="card" style={{display:'flex',flexDirection:'column',alignItems:'flex-start',padding:0,gridColumn:"4 / span 3", gridRow:"2"}}>
        <div className="title-container">
          {/* <Typography variant="h5" component="h2">Frequency of Weaknesses</Typography> */}
          <div className="title min">Daily Reports</div>
        </div>
        <div style={{padding:'0px',flex:1,display:'flex',width:"100%",justifyContent:'flex-start'}}>
          {/* <WeaknessTimeline width={900} height={250}/> */}
          <ReportTable setReportOpen={handleSetReportOpen}/>
          <DailyReport open={reportOpen} handleClose={()=>handleSetReportOpen(false)}/>
        </div>
      </Paper>

    </div>
  )
}
