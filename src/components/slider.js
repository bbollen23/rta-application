import {withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const MySlider = withStyles({
  root: {
    height: 4,
    width:'75%'
  },
  thumb: {
    height: 14,
    width: 14,
    // backgroundColor: '#fff',
    backgroundColor:"#1976d2",
    marginTop: -6,
    marginLeft: -8,
    // border: '1px solid #F3F3E9',
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  active: {},
  valueLabel: {
    fontSize:'0.8em',
    textAlign:'center',
    color:"#1976d2",
    padding:'5px',
    '& *': {
      width:'35px',
      height:'35px',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
  },
  track: {
    height: 4,
    borderRadius: 2,
    backgroundColor:"#1976d2"
  },
  rail: {
    height: 4,
    borderRadius: 2,
  },
  mark:{
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3
  }
})(Slider);

export default MySlider;

