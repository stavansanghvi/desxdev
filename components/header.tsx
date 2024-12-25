import Image from "next/image";
import logo from "@/assets/logo.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import AnimatedBorder from "@/ui/animated-border";
import HeaderSm from "./header-sm";
import Link from "next/link";
import NavLinks from "./nav-links";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4 py-4 xl:px-[140px] 2xl:py-[40px] text-white">
        <Link href="/">
          <Image src={logo} alt="DesXDevLogo" />
        </Link>

        <nav className="hidden lg:block">
          <div className="rounded-full border-[1px] border-[#ffffff66] py-4 px-8 bg-[#ffffff1a]">
            <ul className="flex gap-4 text-base 2xl:text-lg font-normal">
             <NavLinks/>
            </ul>
          </div>
        </nav>

        <div className="hidden lg:flex contact-info items-center">
          <div className="rounded-full p-2 2xl:p-4 border-[1px] border-[#ffffff66] bg-[#ffffff1a] mr-4">
            <div className="2xl:block hidden">
              <Image src={phoneIcon} alt="Phone Icon" width={24} height={24} />
            </div>
            <div className="2xl:hidden block">
              <Image src={phoneIcon} alt="Phone Icon" width={16} height={16} />
            </div>
          </div>
          <a href="tel:+1234567890">+91 9054382207</a>
        </div>
        <div id="hamburger-btn" className="block lg:hidden"></div>
      </header>

      <AnimatedBorder />
      <HeaderSm />
    </>
  );
};

export default Header;
