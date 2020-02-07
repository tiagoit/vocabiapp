import Head from 'next/head';

import Header from './Header';
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
    </Head>
    <Header />
    { props.children }
  </div>
);

export default Layout;
