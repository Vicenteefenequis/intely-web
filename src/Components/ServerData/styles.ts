import styled, { css } from "styled-components";
import { shade } from "polished";

type ColorVariantProps = {
  variants?: "white" | "green";
};

const colorCardVariants = {
  green: css`
    background-color: var(--primary-color);
    color: #ffffff;
    p {
      font-size: 12px;
      font-weight: 500;
      color: ${shade("0.1", "#ffff")};
    }
  `,
  white: css`
    background-color: #efefef;
    color: var(--primary-color);
    p {
      color: var(--color-border);
      font-weight: 500;
      font-size: 12px;
    }
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
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    width: 100%;

    li {
      width: 80%;
      > div {
        margin-bottom: 24px;
      }
    }
  }

  h1 {
    color: var(--primary-color);
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const CardProgress = styled.div<ColorVariantProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;

  border-radius: 10px;

  ${(props) => colorCardVariants[props.variants || "white"]}
`;
