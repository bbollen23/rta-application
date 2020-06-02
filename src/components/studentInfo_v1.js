import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Avatar from "@material-ui/core/Avatar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import RadarChart from './radarChart';
import MySlider from './slider';
import { StyledTab,StyledTabs,a11yProps, TabPanel } from './studentInfoTabs';
import LineChart from './lineChart';


// import React, { useRef, useLayoutEffect, useState } from "react";

// const ComponentWithDimensions = props => {
//   const targetRef = useRef();
//   const [dimensions, setDimensions] = useState({ width:0, height: 0 });

//   useLayoutEffect(() => {
//     if (targetRef.current) {
//       setDimensions({
//         width: targetRef.current.offsetWidth,
//         height: targetRef.current.offsetHeight
//       });
//     }
//   }, []);

//   // return (
//   //   <div ref={targetRef}>
//   //     <p>{dimensions.width}</p>
//   //     <p>{dimensions.height}</p>
//   //   </div>
//   // );
// };

// export default ComponentWithDimensions;




const useStyles = makeStyles(theme => ({
  root:{
    width:'75vw',
    maxWidth:'none !important',
    minHeight:'50vh',
    display:'flex',
    flexDirection:'column'
  },
  dialogContentRoot:{
    display:'flex',
    flexDirection:'column',
    flex:1
  },
  list:{
    display:'flex',
    flexDirection:'row',
    flex:1,
    margin:"0px 30px",
    // justifyContent:'space-between'
  },
}));

const MyAvatar = withStyles(props=>({
  root:{
    backgroundColor: props => props.color || '#4caf50',
    fontSize: props => props.size === "small" ? "1.0rem" : "1.25rem"
  },
}))(Avatar)




const marks = [{value:1, label: "Day 1"}, {value:12, label:"Day 12"}]

const extendedMarks = [{value:1, label: "Day 1"}, {value:2, label: "Day 2"}, {value:3, label: "Day 3"}, {value:4, label: "Day 4"}, {value:5, label: "Day 5"}, {value:6, label: "Day 6"}, {value:7, label: "Day 7"}, {value:8, label: "Day 8"},{value:9, label: "Day 9"}, {value:10, label: "Day 10"}, {value:11, label: "Day 11"}, {value:12, label:"Day 12"}]


export default function StudentInfo(props) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const [days, setDays] = useState([1,12]);
  const [reportDay, setReportDay] = useState(1);
  const handleClose = () => {
    props.setStudentOpen(false);
  };

  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });

  // holds the timer for setTimeout and clearInterval
  let movement_timer = null;

  // the number of ms the window size must stay the same size before the
  // dimension state variable is reset
  const RESET_TIMEOUT = 100;

  const test_dimensions = () => {
    // For some reason targetRef.current.getBoundingClientRect was not available
    // I found this worked for me, but unfortunately I can't find the
    // documentation to explain this experience
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }

  // This sets the dimensions on the first render
  useLayoutEffect(() => {
    test_dimensions();
  }, []);

  // every time the window is resized, the timer is cleared and set again
  // the net effect is the component will only reset after the window size
  // is at rest for the duration set in RESET_TIMEOUT.  This prevents rapid
  // redrawing of the component for more complex components such as charts
  window.addEventListener('resize', ()=>{
    clearInterval(movement_timer);
    movement_timer = setTimeout(test_dimensions, RESET_TIMEOUT);
  })





  const handleChange = (event,newDays) => {
    if(newDays !== days){
      setDays(newDays);
    }
  }

  const handleTabChange = (event,newTabValue) => {
    setTabValue(newTabValue)
  }

  const handleReportChange = (event, newReportDay) => {
    if(newReportDay !== reportDay){
      setReportDay(newReportDay);
    }
  }


  return (
    <Dialog
      classes={{paperWidthSm:classes.root}}
      open={props.studentOpen}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >

      <DialogContent
        classes={{root:classes.dialogContentRoot}}
      >
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginBottom:'15px'}}>
          <div style={{fontSize:'1.8em',fontWeight:'300',fontStyle:'italic'}}>
            Jane Doe
          </div>
          <StyledTabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <StyledTab label="Statistics" {...a11yProps(0)}/>
            <StyledTab label="Weaknesses" {...a11yProps(1)}/>
            <StyledTab label="Reports" {...a11yProps(2)}/>
          </StyledTabs>
        </div>


        {/* ----------------- First Tab --------------------------- */}

        <TabPanel value={tabValue} index={0}>
          <div style={{display:'grid',gridTemplateColumns:'500px auto',gridTemplateRows:'auto auto'}}>

            {/* ----------------------- First Column --------------------------- */}


            <div style={{margin:'15px', display:'flex',flexDirection:'column',gridRow:'1 / span 2'}}>

              <RadarChart id={1} days={days}/>

              <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <MySlider
                  value={days}
                  onChange={handleChange}
                  valueLabelFormat={inputValue=>{return `Day ${inputValue}` }}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  marks={marks}
                  min={1}
                  max={12}
                />
              </div>

            </div>

            {/* ----------------------- Second Column --------------------------- */}



            <div id="student-info-statistics" style={{padding:'10px',gridColumn:2,gridRow:1}}>

              <div style={{padding:"0px 0px",marginTop:"10px",display:'flex',flexDirection:'column',marginBottom:'20px'}}>
                <List classes={{root:classes.list}}>
                  <ListItem button key={1}>
                    <div className="list-label-container" >
                      <div>
                        <div>Best Concept</div>
                        <div>Evaluating Equations</div>
                      </div>
                      <MyAvatar>5.0</MyAvatar>
                    </div>
                  </ListItem>
                  <ListItem button key={2}>
                    <div className="list-label-container" >
                      <div>
                        <div>Worst Concept</div>
                        <div>Fractional Parts Word Problems</div>
                      </div>
                      <MyAvatar>3.2</MyAvatar>
                    </div>
                  </ListItem>
                </List>
                <List classes={{root:classes.list}}>
                  <ListItem button key={3}>
                    <div className="list-label-container" >
                      <div>
                        <div>Fastest Growing Concept</div>
                        <div>Topic Three</div>
                      </div>
                      <MyAvatar size="small">+2.5</MyAvatar>
                    </div>
                  </ListItem>
                  <ListItem button key={4}>
                    <div className="list-label-container" >
                      <div>
                        <div>Slowest Growing Concept</div>
                        <div>Topic Four</div>
                      </div>
                      <MyAvatar size="small">+0.1</MyAvatar>
                    </div>
                  </ListItem>
                </List>
              </div>



            </div>


            <div ref={targetRef} style={{gridColumn:2,gridRow:2,display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <LineChart id={1} height={400} width={700}/>
            </div>

          </div>
        </TabPanel>

        {/* ----------------- Second Tab --------------------------- */}


        <TabPanel value={tabValue} index={1} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
            There are currently no weaknesses for this scholar.
          </div>
        </TabPanel>


        {/* --------------------- Thrid tab --------------------------- */}


        <TabPanel value={tabValue} index={2}>
          <div style={{display:'grid',gridTemplateRows:'1fr 0.5fr'}}>
            <Paper style={{display:'grid',gridTemplateRows:'auto auto auto',gridTemplateColumns:"1fr 1fr",padding:'10px'}}>

              <div style={{gridColumnStart:1,padding:'20px 10px'}}>
                <div style={{fontWeight:'500',fontSize:'1.5em',fontStyle:'italic'}}>{`Day ${reportDay}`}</div>
                <div style={{fontSize:'1.2em'}}>02/28/20</div>
              </div>
              <div style={{justifySelf:'end',padding:'20px 10px',transform:"scale(1.3)",marginRight:'30px',alignSelf:'center'}}>
                <Chip
                  // icon={<FaceIcon />}
                  avatar={<Avatar>B</Avatar>}
                  label="Brian Bollen"
                  clickable
                  color="primary"
                />
              </div>
              <div style={{padding:'10px 20px 10px 10px',borderTop:"1px solid rgb(230, 228, 228)"}}>
                <Typography variant="h6" gutterBottom>
                  Updated Scores
                </Typography>
                <div style={{display:'flex',flexDirection:'column',padding:"5px 15px"}}>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div>Topic 1</div>
                    <div style={{color:'green'}}>+0.2 (4.2)</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div>Topic 2</div>
                    <div style={{color:'green'}}>+0.3 (3.9)</div>
                  </div>
                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div>Topic 3</div>
                    <div>No Change</div>
                  </div>
                </div>
              </div>

              <div style={{padding:'10px 10px 10px 20px',borderTop:"1px solid rgb(230, 228, 228)",borderLeft:"1px solid rgb(230, 228, 228)"}}>
                <Typography variant="h6" gutterBottom>
                  Updated Weaknesses
                </Typography>
                <div style={{padding:"5px 15px"}}>
                  <Chip
                    icon={<ErrorOutlineIcon />}
                    label="Multiplication"
                    clickable
                    color="secondary"
                  />
                </div>
              </div>
              <div style={{gridRowStart:3,gridColumnEnd:-1,gridColumnStart:1,padding:'10px',borderTop:"1px solid rgb(230, 228, 228)"}}>
                <Typography variant="h6" gutterBottom>
                  Comments
                </Typography>
                <p>Here are some comments about how the student did this time around.</p>
              </div>

            </Paper>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'flex-end'}}>
              <MySlider
                value={reportDay}
                onChange={handleReportChange}
                valueLabelFormat={inputValue=>{return `Day ${inputValue}`}}
                valueLabelDisplay="auto"
                marks={extendedMarks}
                min={1}
                max={12}
              />
            </div>
          </div>
        </TabPanel>




        <DialogContentText>
        </DialogContentText>

      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>

    </Dialog>
  );
}




