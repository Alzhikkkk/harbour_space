import ava from '../assets/edit2.png';

function About() {
    return(
     <section className="about">
          <div className="about-left">
               <img src={ava} alt="Ava"/>
          </div>

          <div className="about-right">
              <h1>About the apprenticeship</h1>
              <p>Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  </p>
          </div>
     </section>
     );
}

export default About;