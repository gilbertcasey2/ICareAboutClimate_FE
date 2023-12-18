import React from 'react';
import HomeOne from './homePage/homeOne';
import HomeTwo from './homePage/homeTwo';
import HomeThree from './homePage/homeThree';
import HomeFour from './homePage/homeFour';

const Home = (props) => {

  return <section className="home">
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
  </section>
}

export default Home;