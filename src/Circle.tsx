import styled from 'styled-components';

//Container 컴포넌트의 prop 타입 지정
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

//styled component
const Container = styled.div<ContainerProps>`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background-color: ${(prop) => prop.bgColor};
  border: 2px solid ${(prop) => prop.borderColor};
`;

//Circle 컴포넌트의 prop 타입 지정
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
