import React from 'react';
import { Helmet } from 'react-helmet'
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Platzi Conf Merch - Merch</title>
        </Helmet>
        <Products products={initialState.products} />
      </>
      
    )
}

export default Home
