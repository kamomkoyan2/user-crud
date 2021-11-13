import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    '& > *': {
      marginTop: 20,
    },
  },
});

export default useStyles;
