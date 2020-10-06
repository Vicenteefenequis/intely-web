import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Container, ProgressWrapper, CardProgress } from "./styles";

const ServerData: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate: any) => {
    setDate(newDate);
    console.log(newDate);
  };

  return (
    <Container>
      <Calendar
        onChange={onDateChange}
        value={date}
        showNeighboringMonth={false}
        locale={"en-US"}
        selectRange={true}
      />

      <ProgressWrapper>
        <h1>Homework Progress</h1>
        <CardProgress variants="green" />
        <CardProgress />
        <CardProgress />
      </ProgressWrapper>
    </Container>
  );
};

export default ServerData;
