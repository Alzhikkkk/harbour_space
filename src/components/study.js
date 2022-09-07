

function Study() {
    return(
     <section className="study">
        <div className='study-left'>
             <span className='study-left--scolarship'>
                   <h3>Scholarship value</h3>
                   <p>€31,300</p>
             </span>

             <span className='study-left--tuition'>
                  <span className='study-tuition--up'>
                        <i>
                            <h3>Tuition covered</h3>
                            €20,900
                        </i>
                        <i>
                            <h3>Remaining</h3>
                            €2,000
                        </i>
                  </span>

                  <span className='study-tuition--up'>
                        <i>
                            <h3>Living stipend</h3>
                            €8,400 (€700/month)
                        </i>
                  </span>
             </span>
        </div>
        
        <div className='study-right'>
                 
              <span className='study-right--commitment'>
                     
                     <span className='commitment-study'>
                           <h3>Study commitment</h3>
                           <h5>3 hours / day</h5>
                           <p>You will complete 15 modules to graduate. Daily classes are 3 hours, plus coursework to complete in your own time. </p>
                     </span>

                     <span className='commitment-study'>
                            <h3>Work commitment</h3>
                            <h5>4 hours / day</h5>
                            <p>Immerse yourself in the professional world during your apprenticeship. You’ll learn the ropes from the best and get to apply your newly acquired knowledge in the field from day one.  </p>
                     </span>
              </span>

              <span className='study-contract'>
                  <span className="graduation">
                    <h1>Graduation</h1>
                  </span>
                    <span className='commitment-study'>
                           <h3>A full-time contract</h3>
                           <h5>1 Year / Full-Time</h5>
                           <p>You’ll be guaranteed a 1 year contract with SCG upon graduation. </p>
                     </span>
              </span>


        </div>
          
     </section>
     );
}

export default Study;