import React from 'react';
import Head from 'next/head';

// TODO: Tratar o title para ser algo referente ao error e o componente tbm
function ErrorPage({ statusCode }) {
  return (
    <React.Fragment>
      <Head>
        <title>Topper</title>
      </Head>
      <div>
        {statusCode === 404 ? <p>Error 404</p> : <p>Big fucking error</p>}
      </div>
    </React.Fragment>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return { statusCode };
};

export default ErrorPage;
