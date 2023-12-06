import styled from "styled-components";

interface Sample {
  width: string;
  height: string;
  maxwidth: string;
}

const PopupStyled = styled.div<Sample>`
  width: ${({ width }) => width};
  /* max-width: 760px; */
  max-width: ${({ maxwidth }) => maxwidth};
  height: ${({ height }) => height};
  border-radius: 16px;
  background: #fff;
  padding: 16px 48px;
  box-sizing: border-box;
`;

export default PopupStyled;
