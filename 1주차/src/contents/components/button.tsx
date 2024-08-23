import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "50px"};
  background-color: ${(props) => props.backgroundColor || "#b1d0ff"};
  color: ${(props) => props.color || "#ffffff"};
  border: 1px solid ${(props) => props.backgroundColor || "#b1d0ff"};
  border-radius: 4px;
  box-sizing: border-box;
`;

export default Button;
