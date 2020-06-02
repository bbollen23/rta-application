import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.white,
    // boxShadow:theme.shadows[1]
  },
  tooltip: {
    height:35,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    maxWidth: 220,
    fontWeight:400,
    fontSize:'13pt',
    fontFamily:"'Noto Sans', sans-serif !important",
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
  },
}));

export default function MyTooltip(props) {
  const classes = useStyles();

  return <Tooltip arrow classes={classes} {...props} />;
}
