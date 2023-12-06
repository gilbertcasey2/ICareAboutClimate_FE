import React from 'react';
import HomeOne from './homePage/homeOne';
import HomeTwo from './homePage/homeTwo';

const Home = (props) => {

  return <section className="home">
      <HomeOne />
      <HomeTwo />
  </section>
}

export default Home;