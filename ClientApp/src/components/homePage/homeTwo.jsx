import React from 'react';
import Drop from "../../img/drop.png";

const HomeTwo = (props) => {

  return <section className="homeTwo homeSection">
    <h1>What is this project?</h1>
    <div class="centerSection">
        <p className='italic'>This project has two goals:</p>
        <ul>
            <li><img src={Drop} alt="Bullet" />Understand which communities in Portland are <span className="emphasized">worried about climate change</span> and which communities are <span className="emphasized">engaged in political advocacy</span> for climate solutions</li>
            <li><img src={Drop} alt="Bullet" />Empower all communities to <span className="emphasized">advocate for climate solutions </span></li>
        </ul>
    </div>
  </section>
}

export default HomeTwo;