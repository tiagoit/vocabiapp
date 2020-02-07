import Link from 'next/link';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Button variant="contained" color="primary" href="/">
      Go to the main page
    </Button>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/dashboard">
      <a style={linkStyle}>Dashboard</a>
    </Link>
  </div>
);

export default Header;
