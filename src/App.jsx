import styled from 'styled-components';
import MainContainer from './components/MainContainer';
function App() {
  const Centered = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <Centered>
      <MainContainer/>
    </Centered>
  );
}

export default App;
