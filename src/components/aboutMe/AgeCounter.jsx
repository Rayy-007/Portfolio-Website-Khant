import React, { useState, useEffect } from "react";

const AgeCounter = () => {
  const birthdate = new Date("2002-01-21");
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateAge = () => {
      const currentDate = new Date();
      const timeDifference = currentDate - birthdate;

      const years = Math.floor(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
      const months = Math.floor(
        (timeDifference % (365.25 * 24 * 60 * 60 * 1000)) /
          (30.44 * 24 * 60 * 60 * 1000)
      );
      const days = Math.floor(
        (timeDifference % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );
      const hours = Math.floor(
        (timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      const minutes = Math.floor(
        (timeDifference % (60 * 60 * 1000)) / (60 * 1000)
      );
      const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

      setAge({ years, months, days, hours, minutes, seconds });
    };

    const intervalId = setInterval(calculateAge, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>{`${age.years} years, ${age.months} months, ${age.days} days, ${age.hours} hours, ${age.minutes} minutes, ${age.seconds} seconds`}</span>
  );
};

export default AgeCounter;
