interface AnimatedBorderProps {
  rainbow?: boolean;
}
const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ rainbow = true }) => {
  return <div className={`animated-border ${rainbow ? "rainbow" : ""}`} />;
};

export default AnimatedBorder;
