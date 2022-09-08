import user from '../assets/Image.png'
import ln from '../assets/ln.svg'
import arrow from '../assets/right_arrow.svg'



function Slider() {
    return(
     <section className="slider">
          <div className="slider-item">
               <span className="item-header">
                    <span className="item-header--user">
                        <img src={user} alt="User" />
                        <i>
                            <h5>Irene Pereyra</h5>
                            Interaction Design Fellow ‘19
                        </i>
                    </span>

                    <img src={ln} alt="Icon"/>
               </span>
    
                <div className='slider-body'>
                    <p>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </p>
                    <span>
                        Education   ·   B.A. Visual Design
                    </span>
                </div>

                <div class="slider-arrows">
                    <span>
                        <img src={arrow} alt="" />
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                    </span>              
                </div>
          </div>

          <div className="slider-item">
               <span className="item-header">
                    <span className="item-header--user">
                        <img src={user} alt="User" />
                        <i>
                            <h5>Irene Pereyra</h5>
                            Interaction Design Fellow ‘19
                        </i>
                    </span>

                    <img src={ln} alt="Icon"/>
               </span>
    
                <div className='slider-body'>
                    <p>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </p>
                    <span>
                        Education   ·   B.A. Visual Design
                    </span>
                </div>

                <div class="slider-arrows">
                    <span>
                        <img src={arrow} alt="" />
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                    </span>              
                </div>
          </div>

          <div className="slider-item">
               <span className="item-header">
                    <span className="item-header--user">
                        <img src={user} alt="User" />
                        <i>
                            <h5>Irene Pereyra</h5>
                            Interaction Design Fellow ‘19
                        </i>
                    </span>

                    <img src={ln} alt="Icon"/>
               </span>
    
                <div className='slider-body'>
                    <p>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </p>
                    <span>
                        Education   ·   B.A. Visual Design
                    </span>
                </div>

                <div class="slider-arrows">
                    <span>
                        <img src={arrow} alt="" />
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                    </span>              
                </div>
          </div>

          <div className="slider-item">
               <span className="item-header">
                    <span className="item-header--user">
                        <img src={user} alt="User" />
                        <i>
                            <h5>Irene Pereyra</h5>
                            Interaction Design Fellow ‘19
                        </i>
                    </span>

                    <img src={ln} alt="Icon"/>
               </span>
    
                <div className='slider-body'>
                    <p>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program. </p>
                    <span>
                        Education   ·   B.A. Visual Design
                    </span>
                </div>

                <div class="slider-arrows">
                    <span>
                        <img src={arrow} alt="" />
                    </span>
                    <span>
                        <img src={arrow} alt="" />
                    </span>              
                </div>
          </div>
     </section>
     );
}


export default Slider;