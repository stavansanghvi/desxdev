import React from "react";
import chevronIcon from "@/assets/icons/chevron.svg";
import Image from "next/image";

interface AccordionProps {
  number: number;
  title: string;
  content: string;
  active: boolean;
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = (props) => {
  const { number, title, content, active = false, onClick } = props;

  return (
    <div className="border-b border-white" onClick={onClick}>
      <button
        className="w-full flex items-start justify-between py-6 text-left group"
        aria-expanded={active}
      >
        <div className="flex-1 pr-8">
          <div className="flex gap-3 text-xl font-medium mb-2">
            <span className="text-white">{number}.</span>
            <span>{title}</span>
          </div>

          <div
            className={`text-white text-base transition-all  ${
              active
                ? "max-h-96 opacity-100 mt-2 duration-700"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {content}
          </div>
        </div>

        <div
          className={`flex-shrink-0 w-5 h-5 mt-1.5 text-white transition-transform duration-500 ${
            active ? "rotate-180" : ""
          }`}
        >
          <Image src={chevronIcon} alt="Chevron Icon" />
        </div>
      </button>
    </div>
  );
};

export default Accordion;
