import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles =  makeStyles({
  menu:{
    color:'white',
    backgroundColor:'rgb(82,147,212)',
    textTransform:'none',
    fontSize:'13pt',
    padding:'5px 0px 5px 20px',
    marginRight:'20px'
  }
})


export default function ChangeCampusMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [campus, setCampus] = useState('Marana Campus')

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = campus => {
    if(campus!=="no-change"){
      setCampus(campus);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" classes={{root:classes.menu}} aria-haspopup="true" onClick={handleClick}>
        {campus}
        <ExpandMore />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={()=>handleClose('no-change')}
      >
        <MenuItem onClick={()=>handleClose('Marana Campus')}>Marana Campus</MenuItem>
        <MenuItem onClick={()=>handleClose('East Campus')}>East Campus</MenuItem>
        <MenuItem onClick={()=>handleClose('Sierra Vista Campus')}>Sierra Vista Campus</MenuItem>
      </Menu>
    </div>
  );
}