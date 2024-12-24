"use client";

import Input from "@/ui/input";

const ContactUsForm: React.FC = (props) => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Input
            placeholder="Enter your name"
            required
            autoComplete="fullname"
          />
          <Input
            placeholder="Enter your email address"
            required
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            autoComplete="email"
          />
          <Input
            placeholder="Enter your mobile number"
            required
            type="tel"
            pattern="\d+$"
            autoComplete="tel"
            title="Enter a valid contact number"
          />
        </div>
        <div className="mt-8">
          <Input rows={4} placeholder="Enter your message" multiline />
        </div>
        <div className="mt-[70px]">
          <button className="bg-white text-black px-8 py-2 rounded-full hover:bg-white/80">
            Send a message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
