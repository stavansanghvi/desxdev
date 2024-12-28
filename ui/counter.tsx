"use client";

import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  end: number;
  text: string;
}

const Counter: React.FC<CounterProps> = ({ end, text }) => {
  return (
    <div className="text-center w-80 md:text-left my-4 md:my-0">
      <div className="text-5xl md:text-7xl font-bold">
        <CountUp
          end={end}
          duration={1}
          formattingFn={(value) => (value < 10 ? `0${value}+` : `${value}+`)}
          // suffix="+"
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={0.3}
        />
      </div>
      <p className="text-lg md:text-2xl">{text}</p>
    </div>
  );
};

export default Counter;
