import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#101010] text-white font-sans flex flex-col items-center p-4">
      {/* Logo */}
      <div className="mt-[44px]">
        <Image
          height={90}
          width={390}
          alt="DESXDEV Logo"
          className="mx-auto h-12 w-auto"
          src="https://s3-alpha-sig.figma.com/img/3f17/c58b/ea908b1ead72396ba0a2f2aed7734ff8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZ5MLCrD0w5HjtNgyZ6TtVLFR0Gx-87PUoeAFpCqOf5~zu0m1yOWLdhYLPHp82GpeN4vfm765hhAmijEiNAaPdNNVGIDtmKh6EPcJhJ4sfGP9Xmm-GEzKMzo1FnU3y0vjoEUKueoKJD3RduPYqB2Q-Jd2vLKuwFfQCx4zvO0Wgbi3BZLZAXzB0PhPLKIuqxzJ7LtI1VB~63IIDJjc~aSadBpL3iV~NFGwMm8w-U8jXgmumNnYNeymEnZKb-nNucOAUQPgEFHVEwKiU-sdf6yOSsoZRJqMJq1yIx2kkQLDlTNIWN0CRq3Y8YSdLazR~YE7t1lh-MnhA8-P5vRL0BYAQ__"
        />
      </div>

      {/* Background gradient blur effect */}
      <div className="fixed bg-hero-logo-bg bg-no-repeat top-0 right-0 w-[422px] h-[476px]" />

      {/* Content container */}
      <div className="h-full relative m-auto text-center">
        {/* Main content */}
        <h1 className="text-5xl md:text-8xl 2xl:text-[9rem] font-bold mb-8">
          Coming Soon
        </h1>

        <p className="text-lg md:text-2xl 2xl:text-4xl 2xl:leading-[3rem] mb-4 text-gray-300">
          Delivering App Development, Web Development, UI/UX,
          <br />
          Logo and Branding and Digital Marketing.
        </p>

        <p className="text-gray-400 text-lg 2xl:text-3xl">
          Coming soon to elevate your digital presence.
        </p>
      </div>

      <div className="text-center 2xl:text-3xl">
        {/* Contact section */}
        <div className="space-y-4 text-gray-300">
          <h2 className="text-xl 2xl:text-3xl font-medium mb-4">
            For More Details:
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@desxdev.in"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[24px] w-[24px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              info@desxdev.in
            </a>

            <a
              href="tel:+919054382207"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[24px] w-[24px]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 90543 82207
            </a>
          </div>
        </div>

        {/* Sanskrit text */}
        <p className="mt-5 mb-4 font-medium text-gray-400">
          सुजनशीलता अनन्ता भवति।
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
