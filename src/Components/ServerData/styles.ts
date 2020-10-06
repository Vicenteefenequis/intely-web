import styled, { css } from "styled-components";

type ColorVariantProps = {
  variants?: "white" | "green";
};

const colorCardVariants = {
  green: css`
    background-color: #15b82a;
  `,
  white: css`
    background-color: #efefef;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  > div {
    border: none;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  > div {
    margin-bottom: 16px;
  }

  h1 {
    margin-bottom: 8px;
  }
`;

export const CardProgress = styled.div<ColorVariantProps>`
  width: 200px;
  height: 50px;

  border-radius: 20px;

  ${(props) => colorCardVariants[props.variants || "white"]}
`;
