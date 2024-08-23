// div.tsx
import styled from "styled-components";

interface FlexContainerProps {
  justifyContent?: string;
  width?: string;
  marginBottom?: string;
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  width: ${(props) => props.width || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
`;

interface StyledDivProps {
  padding?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  marginTop?: string;
}

const StyledDiv = styled.div<StyledDivProps>`
  border: 1px solid #eeeeee;
  padding: ${(props) => props.padding || "6px"};
  border-radius: 4px;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: flex;
  align-items: center;
  box-shadow: ${(props) => props.boxShadow || "none"};
  margin-top: ${(props) => props.marginTop || "0"};
`;

export { FlexContainer, StyledDiv };
