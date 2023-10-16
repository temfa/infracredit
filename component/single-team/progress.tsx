import React from "react";
import styled from "styled-components";

interface Sample {
  width: string;
  bgColor: string;
}

export const ProgressStyled = styled.div<Sample>`
  width: ${({ width }) => width};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 16px;
  height: 100%;
`;
