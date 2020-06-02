import React, { useState,useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
import MoodIcon from '@material-ui/icons/Mood';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({
  // root: {
  //   display: 'flex',
  //   '& > *': {
  //     margin: theme.spacing(1),
  //   },
  // },
  // pink: {
  //   color: theme.palette.getContrastText(pink[500]),
  //   backgroundColor: pink[500],
  // },
  // green: {
  //   color: '#fff',
  //   backgroundColor: green[500],
  // },
  colorDefault:{
    width:'60px',
    height:'60px',
    backgroundImage:"linear-gradient(180deg, #1976d2 0%, #0d47a1 100%)"
  }
}));

const BadgeAvatar = withStyles(props=>({
  colorDefault:{
    backgroundImage:props => {
      console.log(props.color);
      switch(props.color){
        case "orange":{
          return "linear-gradient(180deg, #ffa726 0%, #f57c00 100%)"; 
        }
        case "green":{
          return "linear-gradient(180deg, #66bb6a 0%, #43a047 100%)";
        }
        case "purple":{
          return "linear-gradient(180deg, #9618e0 0%, #68308a 100%)";
        }
        default:{
          return "linear-gradient(180deg, #1976d2 0%, #0d47a1 100%)";
        }
      }
    },
    width:'60px',
    height:'60px',
  }
}))(Avatar)

const StatsBadge = props => {
  const classes = useStyles();

  const [slide,setSlide] = useState([0,0,0,0]);

  useEffect(()=>{
    setTimeout(()=>{
      setSlide([1,0,0,0]);
      setTimeout(()=>{
        setSlide([1,1,0,0]);
        setTimeout(()=>{
          setSlide([1,1,1,0]);
          setTimeout(()=>{
            setSlide([1,1,1,1])
          },100)      
        },100)    
      },100);
    },100)
  },[])

  if(props.icon === 1){
    return(
      <Slide direction={"down"} in={slide[3]} mountOnEnter>
        <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>This week's absences</div>
            <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
              <div style={{fontSize:'1.5em',fontWeight:500}}>5 New Absences</div>
              <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid grey",borderRadius:"5px",color:'grey',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}>&#xb1;0</div>
            </div>
          </div>
          <BadgeAvatar color={"orange"}><ScheduleIcon fontSize={"large"}/></BadgeAvatar>
        </Paper>
      </Slide>
    )  
  } else if(props.icon === 2){
    return(
      <Slide direction={"down"} in={slide[0]}mountOnEnter >

      <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>New Mastery Students</div>
          <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <div style={{fontSize:'1.5em',fontWeight:500}}>8 New Students</div>
            <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid green",borderRadius:"5px",color:'green',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> + 3</div>
          </div>
        </div>
        <BadgeAvatar color={"green"} ><SchoolIcon fontSize={"large"}/></BadgeAvatar>
      </Paper>
      </Slide>
    )  
  }  else if(props.icon === 3){
    return(
      <Slide direction={"down"} in={slide[1]}mountOnEnter >

      <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>Number of Weaknesses Fixed</div>
          <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <div style={{fontSize:'1.5em',fontWeight:500}}>7 Fixed Weaknesses</div>
            <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid red",borderRadius:"5px",color:'red',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> - 1</div>
          </div>
        </div>
        <BadgeAvatar props><BuildIcon fontSize={"large"}/></BadgeAvatar>
      </Paper>
      </Slide>
    )  
  } else if(props.icon === 4){
    return(
      <Slide direction={"down"} in={slide[2]}mountOnEnter >

      <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>Improved Students</div>
          <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
            <div style={{fontSize:'1.5em',fontWeight:500}}>73 Improved Students</div>
            <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid green",borderRadius:"5px",color:'green',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> + 12</div>
          </div>
        </div>
        <BadgeAvatar color={"purple"}><MoodIcon fontSize={"large"}/></BadgeAvatar>
      </Paper>
      </Slide>
    )  
  }

  // return(
  //     <React.Fragment>
  //     <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
  //       <div>
  //         <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>New Mastery Students</div>
  //         <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
  //           <div style={{fontSize:'1.5em',fontWeight:500}}>8 New Students</div>
  //           <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid green",borderRadius:"5px",color:'green',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> + 3</div>
  //         </div>
  //       </div>
  //       <BadgeAvatar color={"green"} ><SchoolIcon fontSize={"large"}/></BadgeAvatar>
  //     </Paper>

  //     <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
  //       <div>
  //         <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>Number of Weaknesses Fixed</div>
  //         <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
  //           <div style={{fontSize:'1.5em',fontWeight:500}}>7 Fixed Weaknesses</div>
  //           <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid red",borderRadius:"5px",color:'red',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> - 1</div>
  //         </div>
  //       </div>
  //       <BadgeAvatar props><BuildIcon fontSize={"large"}/></BadgeAvatar>
  //     </Paper>

  //     <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
  //       <div>
  //         <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>Improved Students</div>
  //         <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
  //           <div style={{fontSize:'1.5em',fontWeight:500}}>73 Improved Students</div>
  //           <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid green",borderRadius:"5px",color:'green',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}> + 12</div>
  //         </div>
  //       </div>
  //       <BadgeAvatar color={"purple"}><MoodIcon fontSize={"large"}/></BadgeAvatar>
  //     </Paper>

  //       <Paper style={{display:'flex',flexDirection:'row',padding:'24px',margin:'20px',justifyContent:'space-between',alignItems:'center'}}>
  //         <div>
  //           <div style={{textTransform:'uppercase',color:'rgb(115,115,115)',marginBottom:'5px'}}>This week's absences</div>
  //           <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
  //             <div style={{fontSize:'1.5em',fontWeight:500}}>5 New Absences</div>
  //             <div style={{position:"relative",left:"10px",top:"2px",border:"1px solid grey",borderRadius:"5px",color:'grey',fontSize:"0.9em",padding:"1px 12px 2px 12px"}}>&#xb1;0</div>
  //           </div>
  //         </div>
  //         <BadgeAvatar color={"orange"}><ScheduleIcon fontSize={"large"}/></BadgeAvatar>
  //       </Paper>
  //     </React.Fragment>
  //   )  
}

export default StatsBadge;