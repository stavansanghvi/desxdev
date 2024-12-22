interface ArrowButtonProps {
  onClick: () => void;
}

export const LeftArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="z-10 absolute top-1/2 left-0 transform -translate-y-1/2 bg-black border-white border-[1px] bg-opacity-50 p-4 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export const RightArrowButton = ({ onClick }: ArrowButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="z-10 absolute top-1/2 right-0 transform -translate-y-1/2 bg-black border-white border-[1px] bg-opacity-50 p-4 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};
