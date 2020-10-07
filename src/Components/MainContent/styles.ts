import styled, { css } from "styled-components";

type ColorVariantProps = {
  variants?: "white" | "green";
};

const colorCardVariants = {
  green: css`
    background-color: #275e2e;
    color: #fff;
  `,
  white: css`
    background-color: #fff;
    color: #275e2e;
  `,
};

const colorBadgeVariants = {
  green: css`
    background-color: #638567;
    color: #fff;
  `,
  white: css`
    background-color: #efefef;
    color: #275e2e;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #f8f8f8;
  border: 1px solid #efefef;
  border-radius: 50px 50px 0px 0px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ProgressBadge = styled.div<ColorVariantProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 49px;
  border-radius: 10px;
  ${(props) => colorBadgeVariants[props.variants || "white"]};
`;

export const Card = styled.div<ColorVariantProps>`
  display: flex;
  align-items: flex-end;
  justify-content: start;
  padding: 12px;
  width: 261px;
  height: 273px;
  border-radius: 50px;
  border: 1px solid #efefef;
  ${(props) => colorCardVariants[props.variants || "white"]}

  > div {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 20px 20px;
  }
  h4 {
    line-height: 25px;
    font-weight: 400;
  }
  strong {
    font-weight: 700;
  }
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 25px;
    color: var(--primary-color);
    font-weight: 500;
  }
  p {
    font-size: 19px;
    color: var(--color-border);
  }
`;

export const HoursWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  width: 80%;
  margin: 0 0 0 auto;
  > div {
    margin-bottom: 47px;
  }
`;

export const Hour = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: var(--color-border);
  width: 86px;
  height: 29px;

  p {
    font-weight: 700;
    font-size: 16px;
    color: var(--primary-color);
  }
`;

export const CardDiscpline = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 154px;
  padding: 16px;
  margin-top: 42px;

  h1 {
    font-weight: 700;
    font-size: 16px;
    color: var(--primary-color);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;

    color: var(--text-color);
  }

  border: 1px solid var(--color-border);
  background: #ffffff;
  border-radius: 20px;
  left: calc(50% - 120px);
  top: 0;
`;

export const PictureWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;

  > div {
    margin-right: 12px;
  }

  button {
    background: var(--primary-color);
    border-radius: 50px;
    width: 80px;
    height: 30px;
    color: var(--secondary-color);
  }
`;
export const Picture = styled.div`
  width: 41px;
  height: 34px;
  background-color: var(--color-border);
  border-radius: 50%;
`;
export const HourLine = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  > div {
    margin-bottom: -15px;
  }
`;
