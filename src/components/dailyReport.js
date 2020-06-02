import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
  root:{
    width:'40vw',
    maxWidth:'none !important',
    minHeight:'40vh',
    display:'flex',
    flexDirection:'column'
  },
  dialogContentRoot:{
    display:'flex',
    flexDirection:'row',
    flex:1,
    justifyContent:'space-between'
  },
  list:{
    display:'flex',
    flexDirection:'row',
    flex:1,
    margin:"0px 30px",
    // justifyContent:'space-between'
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));


const WeaknessChip = withStyles(props=>({
  colorPrimary:{
    backgroundColor:props => props.overrideColor,
    // opacity:props => props.toggled ? 1 : 0.3,
    marginLeft:"10px"
  }
}))(Chip)


const DailyReport = props => {
  const classes = useStyles();

  const handleClose = () => {
    props.handleClose();
  }


  return(
    <Dialog
      classes={{paperWidthSm:classes.root}}
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      // aria-labelledby="alert-dialog-slide-title"
      // aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">{"Jane Doe's Daily Report"}</DialogTitle>
      <DialogContent classes={{root:classes.dialogContentRoot}}>
        {/* <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText> */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',flex:1}}>
          <div>
            <Typography variant="h6">Day 12</Typography>
            05/21/20
          </div>
          <div>
            <Typography variant="h6">Tutor</Typography>
            <div style={{display:'flex',alignItems:'center'}}>
              <Avatar src={"/self_avatar_1.jpg"} className={classes.large}/>
              <div style={{marginLeft:'8px',fontSize:'22px',fontWeight:400}}>Brian Bollen</div>
            </div>
          </div>
          <div>
            <Typography variant="h6">Updated Scores</Typography>
            {/* Here are the updated scores bitches */}
            <div style={{display:'grid',gridTemplateRows:'repeat(3,1fr)',gridTemplateColumns:"1fr 0.5fr",marginLeft:'10px'}}>
              <div>Equal Groups WP: </div> <span style={{color:"green"}}>+0.1</span>
              <div>Properties of Operations: </div> <span style={{color:"green"}}>+0.5</span>
              <div>Reducing Fractions:</div>  <span style={{color:"green"}}>+0.2</span>
            </div>
          </div>
          <div>
            <Typography variant="h6">Updated Weaknesses</Typography>
            <WeaknessChip color="primary" icon={<RemoveIcon/>}overrideColor={"rgb(44,160,44)"} label="Multiplication Tables" />
            <WeaknessChip color="primary" icon={<AddIcon/>}overrideColor={"rgb(214,39,40)"} label="Adding Fractions" />
            {/* Here are the updated scores bitches */}
          </div>
          <div style={{gridColumn:"span 2"}}>
            <Typography variant="h6">Comments</Typography>
            Jane did great today! Really seeing an improvement in her confidence and overall mathematical abilities.
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default DailyReport;