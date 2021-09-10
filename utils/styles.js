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
  grow: {
    flexGrow: 1,
  },
  footer: {
    textAlign: 'center',
    marginTop: 10,
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default useStyle;
