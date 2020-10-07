import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Container, ProgressWrapper, CardProgress } from "./styles";
import CircularProgressWithLabel from "../shared/CircularProgressWithLabel";
import { motion } from "framer-motion";
const ServerData: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const onDateChange = (newDate: any) => {
    setDate(newDate);
    console.log(newDate);
  };

  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
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
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0].map((index) => (
            <motion.li key={index} className="item" variants={item}>
              <CardProgress variants="green">
                <CircularProgressWithLabel value={progress} />
                <div>
                  <h4>Physics</h4>
                  <p>September, 7 Monday</p>
                </div>
              </CardProgress>
              <CardProgress>
                <CircularProgressWithLabel value={progress} />
                <div>
                  <h4>Biology</h4>
                  <p>September, 7 Monday</p>
                </div>
              </CardProgress>
              <CardProgress>
                <CircularProgressWithLabel value={progress} />
                <div>
                  <h4>Chemistry</h4>
                  <p>September, 7 Monday</p>
                </div>
              </CardProgress>
            </motion.li>
          ))}
        </motion.ul>
      </ProgressWrapper>
    </Container>
  );
};

export default ServerData;
