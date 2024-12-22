import AnimatedBorder from "@/ui/animated-border";
import Counter from "@/ui/counter";

const Statistics: React.FC = () => {
  return (
    <>
      <div className="container flex items-center justify-between py-[130px]">
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
