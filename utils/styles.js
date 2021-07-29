import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh', // vh : viewport height and min is minimum
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyle;
