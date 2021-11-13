import { makeStyles } from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    width: '90%',
    overflowX: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '50px',
    padding: '10px',
    margin: '10px',
  },

  row: {
    '& > *': {
      fontSize: 14,
    },
  },

  tr: {
    height: '40px !important',
  },

  th: {
    maxWidth: '125px',
    minWidth: '125px',
    padding: '0 !important',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    textAlign: 'center !important',
  },

  td: {
    height: '40px !important',
    padding: '5px !important',
    textAlign: 'center !important',
  },

  search: {
    margin: '80px !important',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0.3, 2),
    // height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    border: '1px solid #203040',
    borderRadius: '8px',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      position: 'absolute',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default useStyles;
