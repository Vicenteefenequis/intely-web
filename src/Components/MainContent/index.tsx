import React, { useEffect } from "react";

import {
  Container,
  Card,
  CardsWrapper,
  ProgressBadge,
  ScheduleWrapper,
  HoursWrapper,
  Hour,
  CardDiscpline,
  PictureWrapper,
  Picture,
  HourLine,
} from "./styles";

const MainContent: React.FC = () => {
  return (
    <Container>
      <CardsWrapper>
        <Card variants="green">
          <div>
            <h4>
              Your <strong>ratting</strong> <br /> is perfect:{" "}
            </h4>
            <ProgressBadge variants="green">
              <p>81%</p>
            </ProgressBadge>
          </div>
        </Card>
        <Card variants="white">
          <div>
            <h4>
              Your <strong>ratting</strong> <br /> is perfect:{" "}
            </h4>
            <ProgressBadge variants="white">
              <p>81%</p>
            </ProgressBadge>
          </div>
        </Card>
      </CardsWrapper>
      <ScheduleWrapper>
        <h1>Today's schedule </h1>
        <p>september,4 Friday</p>
      </ScheduleWrapper>

      <HoursWrapper id="hourwrapper">
        <HourLine>
          <Hour id="hour">
            <p>10 am</p>
          </Hour>
        </HourLine>

        <HourLine>
          <Hour id="hour">
            <p>11 am</p>
          </Hour>
        </HourLine>

        <HourLine>
          <Hour id="hour">
            <p>12 am</p>
          </Hour>
        </HourLine>

        <CardDiscpline>
          <h1>Mathematics</h1>
          <p>Properties of number</p>
          <PictureWrapper>
            <Picture />
            <Picture />
            <Picture />
            <Picture />
            <button>Invite</button>
          </PictureWrapper>
        </CardDiscpline>
      </HoursWrapper>
    </Container>
  );
};

export default MainContent;
