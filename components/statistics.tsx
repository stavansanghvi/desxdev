import AnimatedBorder from "@/ui/animated-border";
import Counter from "@/ui/counter";

const Statistics: React.FC = () => {
  return (
    <>
      <div className="container flex flex-col flex-nowrap md:flex-wrap md:flex-row lg:flex-nowrap items-center justify-center gap-8 py-16 md:py-[130px] px-8 2xl:px-0">
        <Counter end={0o6} text="Creative Designers" />
        <Counter end={12} text="Developers" />
        <Counter end={200} text="Clients" />
        <Counter end={0o3} text="Years of Work Experience" />
      </div>
      <AnimatedBorder />
    </>
  );
};

export default Statistics;
