"use client";

import React from "react";
import CountUp from "react-countup";

interface CounterProps {
  end: number;
  text: string;
}

const Counter: React.FC<CounterProps> = ({ end, text }) => {
  return (
    <div>
      <div className="text-7xl font-bold">
        <CountUp
          end={end}
          duration={1}
          suffix="+"
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={0.3}
        />
      </div>
      <p className="text-2xl">{text}</p>
    </div>
  );
};

export default Counter;
