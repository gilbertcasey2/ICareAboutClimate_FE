import React from 'react';
import Drop from "../../img/drop.png";

const HomeTwo = (props) => {

  return <section className="homeTwo homeSection">
    <h1>What is this project?</h1>
    <div className="centerSection">
        <p className='italic'>This project has two goals:</p>
        <ul>
            <li><img src={Drop} alt="Bullet" /><p>Understand <span className='emphasized'>how concerned about climate change</span> different communities are across Portland, ME</p></li>
            <li><img src={Drop} alt="Bullet" /><p>Understand which communities are <span className="emphasized">engaged in political advocacy</span> for climate solutions</p></li>
        </ul>
    </div>
  </section>
}

export default HomeTwo;