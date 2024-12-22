"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import apos from "@/assets/icons/apos.svg";
import { LeftArrowButton, RightArrowButton } from "./arrow-buttons";
import { useState } from "react";

interface CarouselProps {
  items: Array<{ testimonial: string; name: string }>;
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: { origin: "center", perView: 1.8 },
    slideChanged(s) {
      setActiveSlide(s.track.details.rel);
    },
  });

  const getColor = (idx: number) =>
    idx === activeSlide ? "text-white" : "text-white/10";

  return (
    <div ref={sliderRef} className="keen-slider">
      <LeftArrowButton onClick={() => instanceRef?.current?.prev()} />
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`keen-slider__slide relative px-[130px] flex flex-col items-center justify-center h-full text-center border-l-[1px] border-r-[1px] border-white/20 ${getColor(
            idx
          )}`}
        >
          <Image src={apos} alt="" />
          <p className="text-lg font-normal max-w-[605px] mt-16">
            {item.testimonial}
          </p>
          <div className="w-[1px] h-6 bg-white mt-8 mb-6" />
          <p className="text-[20px] text-white font-semibold">{item.name}</p>
        </div>
      ))}
      <RightArrowButton onClick={() => instanceRef?.current?.next()} />
    </div>
  );
};

export default Carousel;