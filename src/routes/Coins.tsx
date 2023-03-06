import styled from "styled-components";

const Title = styled.h1`
  color: ${(prop) => prop.theme.accentColor};
`;

function Coins() {
  return <Title>COIN</Title>;
}

export default Coins;
