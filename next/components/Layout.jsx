import Head from 'next/head';

import Header from './Header';

const AppHead = () => (
  <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
  </Head>
);

const Layout = (props) => (
  <div>
    <AppHead />  
    <Header />
    { props.children }
  </div>
);

export default Layout;
