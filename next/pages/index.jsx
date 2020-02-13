import Link from 'next/link';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout.jsx';

const useStyles = makeStyles(theme => ({
  ohana: {
    width: 160
  },
  title: {
    textAlign: 'center',
    fontWeight: 100
  }
}));

export default function Blog() {
  const c = useStyles();
  return (
    <Layout>
      <Box display="flex" alignItems="center" justifyContent="center" my={2}>
        <img className={c.ohana} src="https://firebasestorage.googleapis.com/v0/b/vocabiapp.appspot.com/o/img%2Fprincesa.png?alt=media&token=bdff613e-ed36-4b61-819f-36d39f4513f6" alt="Ohana"/>
      </Box>

      <Typography variant="h4" component="h1" className={c.title}>Level up your vocabulary!</Typography>

      <Box display="flex" alignItems="center" justifyContent="center" mt={6}>
        <Link href="/signup">
          <Button variant="contained" color="primary">Get Started</Button>
        </Link>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <Link href="/login">
          <Button variant="contained" color="primary">I already have an account</Button>
        </Link>
      </Box>
    </Layout>
  );
}