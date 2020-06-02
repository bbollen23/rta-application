import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';



import RadarChart from './radarChart';
import MySlider from './slider';
import {StyledTab,StyledTabs,a11yProps, TabPanel} from './studentInfoTabs';



const useStyles = makeStyles(theme => ({
  root:{
    width:'50vw',
    maxWidth:'none !important',
    minHeight:'50vh',
    display:'flex',
    flexDirection:'column'
  },
  dialogContentRoot:{
    display:'flex',
    flexDirection:'column',
    flex:1,
    overflowX:'hidden'
  },
}));




const marks = [
  {
    value:1,
    label: "Day 1"
  },
  {
    value:12,
    label:"Day 12"
  }
]


export default function StudentInfo(props) {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const [days, setDays] = useState([1,12]);
  const [reportDay, setReportDay] = useState({transition:0,day:1});
  const handleClose = () => {
    props.setStudentOpen(false);
  };

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
      setReportDay({transition:1,day:newReportDay});
      setTimeout(()=>{
        setReportDay({transition:0,day:newReportDay});
      },400)
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
        
          <TabPanel value={tabValue} index={0}>
            <div style={{display:'grid',gridTemplateRows:'auto auto',gridTemplateColumns:'repeat(2,1fr)'}}>
              <div style={{margin:'15px'}}>
                <RadarChart id={1} days={days}/>
              </div>
              <div style={{margin:'15px',padding:'20px'}}>
                <div style={{display:'flex',flexDirection:'row',fontSize:'1.2em',fontWeight:500,justifyContent:'center'}}>Statistics</div>

              </div>
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
          </TabPanel>
          <TabPanel value={tabValue} index={1} style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
              There are currently no weaknesses for this scholar.
            </div>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <div style={{display:'grid',gridTemplateRows:'400px auto'}}>
              <div style={{gridRowStart:1}}>
                <div></div>


                <Slide in={reportDay.transition === 0 && reportDay.day === 1}  direction="left" mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <div>
                      
                    </div>
                  </Paper>
                </Slide>

                <Slide in={reportDay.transition === 0 && reportDay.day === 2} direction="left" mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                      <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                  </Paper>
                </Slide>

                <Slide in={reportDay.transition === 0 && reportDay.day === 2} direction="left" mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                      <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                  </Paper>
                </Slide>

                <Slide in={reportDay.transition === 0 && reportDay.day === 2} direction="left" mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                      <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                  </Paper>
                </Slide>

                <Slide in={reportDay.transition === 0 && reportDay.day === 2} direction="left" mountOnEnter unmountOnExit>
                  <Paper elevation={4} className={classes.paper}>
                    <svg className={classes.svg}>
                      <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
                    </svg>
                  </Paper>
                </Slide>



              </div>
              <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <MySlider
                  value={reportDay.day}
                  onChange={handleReportChange}
                  valueLabelFormat={inputValue=>{return `Day ${inputValue}`}}
                  valueLabelDisplay="auto"
                  marks={marks}
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




