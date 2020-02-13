import Container from '@material-ui/core/Container';
import Header from './Header';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <Container maxWidth="md">
      { props.children }
    </Container>
  </React.Fragment>
);

export default Layout;
