import styled from 'styled-components'
import logo from '../assets/Logo.svg'
export const Button = styled.button`
      width:150px;
      height:50px;
      border-radius: 50px;
      font-size: 14px;
      background-color:  rgb(82, 57, 150);
      border: 1px solid transparent;
      color:#fff;
`;
function Interaction() {
    return (
      <section className='interaction'>
           <div className='interaction-left'>
               <h3>Interaction Design Apprenticeship</h3>
               <span className='interaction-left--logo'>
                     <img src={logo} alt="logo"/>
                     <p>Powered By: <h1>ZeptoLab</h1></p>
                </span>
           </div>

           <div className='interaction-right'>
                <span className='interaction-right--text'>
                        <h1>A fully funded work-study program to launch your tech career</h1>
                        <p>
                        Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship. 
                        </p>
                        <p><h1>Position</h1>: Marketing Perfomance</p>
                </span>
                
                <div className='interaction-right--all'>
                    <span className='interaction-right--application'>
                        <h1>Application closes in</h1>
                        <p>6 Day  :  22 Hrs  :  56 Min  :  13 Seg </p>
                    </span>
                    <span className='interaction-right--application info'>
                        <span className='info-left'>
                            <i>Location</i> <p>Bangkok</p>
                            <i>Start Date </i><p>30 June 2020</p>
                        </span>

                        <span className='info-right'>
                            <i>Duration </i><p>1 Year Full-Time</p>
                            <i>End Date</i> <p>3 Aug 2020</p>
                        </span>
                    </span>
                </div>
           </div>
           <Button>Apply Now</Button>
      </section>
    );
  }
  
  export default Interaction;