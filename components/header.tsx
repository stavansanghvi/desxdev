import Image from "next/image";
import logo from "@/assets/logo.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import AnimatedBorder from "@/ui/animated-border";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center px-[140px] py-[40px] text-white">
        <Image src={logo} alt="DesXDevLogo" />

        <nav>
          <div className="rounded-full border-[1px] border-[#ffffff66] py-4 px-8 bg-[#ffffff1a]">
            <ul className="flex gap-4 text-lg font-normal">
              <li>
                <a href="#about-us">About us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="contact-info flex items-center">
          <div className="rounded-full p-4 border-[1px] border-[#ffffff66] bg-[#ffffff1a] mr-4">
            <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
          </div>
          <a href="tel:+1234567890">+91 9054382207</a>
        </div>
      </header>
      <AnimatedBorder />
    </>
  );
};

export default Header;
