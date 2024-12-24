import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  const { description, icon, title, color = "#FFA6CA" } = props;

  //   const gradientStart = `rgba(${color}, 0.2)`;
  //   const gradientEnd = `rgba(${color}, 0.3)`;

  return (
    <div className="grid-item bg-black text-white overflow-hidden group w-96 md:w-[430px] h-[300px] text-left relative">
      {/* Gradient Overlay */}
      <div
        className="absolute left-0 bottom-0 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"
        style={{
          background: `linear-gradient(to bottom,
            #000000 25%,
            ${color} 100%
          )`,
        }}
      />

      <div className="absolute inset-0 inset-y-6 px-0 md:px-[44px] z-10">
        <Image src={icon} alt={title} width={42} height={42} />
        <p className="grid-title text-2xl font-semibold mb-[11px] mt-[26px]">{title}</p>
        <p className="text-[17px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
