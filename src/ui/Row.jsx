import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  /* Default (vertical) */
  flex-direction: column;
  gap: 1.6rem;

  /* Only override if type = horizontal */
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      align-items: center;
    `}
`;

export default Row;
