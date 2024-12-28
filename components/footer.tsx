import logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

import fb from "@/assets/icons/fb.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import ig from "@/assets/icons/ig.svg";
import AnimatedBorder from "@/ui/animated-border";

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon = ({ src, alt, href }: SocialIconProps) => {
  return (
    <div className="rounded-full border-white border-[1px] p-2 w-10 h-10 flex items-center justify-center">
      <Link href={href} target="_blank">
        <Image src={src} alt={alt} />
      </Link>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <>
      <div className="px-20 xl:px-[140px] py-16 md:py-[93px]">
        <Image src={logo} alt="DesXDevLogo" />

        <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap items-start justify-between mt-8 md:mt-24">
          {/* Quick Links */}
          <div className="w-1/2 xl:w-auto">
            <h3 className="mt-8 xl:mt-0 mb-4 xl:mb-8">Quick Links</h3>
            <nav>
              <ul className="text-lg font-normal">
                <li className="mb-4">
                  <a href="#about-us">About us</a>
                </li>
                <li className="mb-4">
                  <a href="#services">Services</a>
                </li>
                <li className="mb-4">
                  <a href="#blog">Blog</a>
                </li>
                <li className="mb-4">
                  <a href="#contact-us">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Address */}
          <div className="w-1/2 xl:w-auto">
            <h3 className="mt-8 xl:mt-0 mb-4 xl:mb-8">Address</h3>
            <address>
              <Link
                href="https://maps.app.goo.gl/tAHHhb3XdiNXGHZL7"
                target="_blank"
              >
                <p>1234, Street Name, City Name, Country Name</p>
              </Link>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mt-8 xl:mt-0 mb-4 xl:mb-8">Contact</h3>
            <Link href="tel:+1234567890">
              <p>+91 9054382207</p>
            </Link>
          </div>

          {/* Email */}
          <div>
            <h3 className="mt-8 xl:mt-0 mb-4 xl:mb-8">Email</h3>
            <Link href="mailto:info@desxdev.in">
              <p className="underline">info@desxdev.in</p>
            </Link>
          </div>

          {/* Social */}
          <div>
            <h3 className="mt-8 xl:mt-0 mb-4 xl:mb-8">Social</h3>
            <div className="flex gap-4">
              <SocialIcon src={fb} alt="Facebook" href="https://facebook.com" />
              <SocialIcon
                src={linkedin}
                alt="LinkedIn"
                href="https://linkedin.com"
              />
              <SocialIcon
                src={ig}
                alt="Instagram"
                href="https://instagram.com"
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatedBorder rainbow={false} />
      <div className="bg-black text-white text-center py-4">
        <p>&copy; DESXDEV. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
