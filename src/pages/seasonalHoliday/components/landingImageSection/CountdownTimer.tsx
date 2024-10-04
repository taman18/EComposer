import React, { useEffect, useState } from "react";
import { TimerProps } from "./TimerProps.type";

const CountdownTimer: React.FC<TimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock: React.FC<{ value: number; label: string }> = ({
    value,
    label,
  }) => (
    <div
      className="bg-[#7D1DDE] text-white rounded px-2 py-2 mr-2"
      aria-label={`${value} ${label}`}
    >
      <p className="md:text-2xl text-base font-bold">{value}</p>
      <span className="md:text-light text-base font-normal">{label}</span>
    </div>
  );

  return (
    <div className="flex justify-start text-center pr-2" data-aos="fade-up">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
