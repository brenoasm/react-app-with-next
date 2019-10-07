import React from 'react';
import Head from 'next/head';

const ListOfItems = () => {
  return (
    <React.Fragment>
      <Head>
        <title>List of Items</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <div>List of Items</div>
    </React.Fragment>
  );
};

export default ListOfItems;
