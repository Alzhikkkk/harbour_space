import styled from 'styled-components'
import About from '../components/about';
import Interaction from '../components/interaction';
import Study from '../components/study';

const Container = styled.main`
    width:100%;
    padding: 0 15%;
    box-sizing:border-box;
`;
function Main() {
    return (
      <Container className='main'>
          <Interaction />
          <About />
          <Study />
      </Container>
    );
  }
  
  export default Main;