"use client";

import AnimatedBorder from "@/ui/animated-border";
import Carousel from "@/ui/carousel";
import FadeInMotion from "@/ui/fade-in-motion";
import Typography from "@/ui/typography";

const mockTestimonials = [
  {
    id: 1,
    name: "John Doe",
    testimonial:
      "[Your Name/Company] made our wedding day unforgettable! From the very beginning, they understood exactly what we wanted and executed our vision flawlessly. Every detail, from the decor to the timing of the ceremony, was handled with professionalism and care. We couldn’t have asked for a better experience.",
  },
  {
    id: 2,
    name: "Jane Smith",
    testimonial:
      "[Your Name/Company] made our wedding day unforgettable! From the very beginning, they understood exactly what we wanted and executed our vision flawlessly. Every detail, from the decor to the timing of the ceremony, was handled with professionalism and care. We couldn’t have asked for a better experience.",
  },
  {
    id: 3,
    name: "Sam Wilson",
    testimonial:
      "[Your Name/Company] made our wedding day unforgettable! From the very beginning, they understood exactly what we wanted and executed our vision flawlessly. Every detail, from the decor to the timing of the ceremony, was handled with professionalism and care. We couldn’t have asked for a better experience.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <FadeInMotion>
      <div
        id="testimonials"
        className="container text-center flex flex-col items-center justify-center py-20 md:py-[142px] px-8 md:px-0"
      >
        <div className="mb-[95px]">
          <Typography variant="h2">What our Clients say</Typography>
          <Typography variant="h4" className="mt-6">
            Hear from those who have experienced the impact of our innovative
            solutions and exceptional service.
          </Typography>
        </div>

        <Carousel items={mockTestimonials} />
      </div>
      <AnimatedBorder />
    </FadeInMotion>
  );
};

export default Testimonials;
