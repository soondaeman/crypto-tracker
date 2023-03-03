import styled from 'styled-components';

const Title = styled.div`
  color: ${(props) => props.theme.textColor};
  font-weight: ${(props) => props.theme.bold};
  font-size: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
