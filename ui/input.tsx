import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface NormalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  multiline?: false | never;
}

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  multiline: true;
}

type InputProps = NormalInputProps | TextAreaInputProps;

const Input: React.FC<InputProps> = (props) => {
  const { multiline = false, className = "", ...rest } = props;

  const baseClasses =
    "w-full border-b border-white bg-transparent text-gray-300 focus:text-white outline-none border-white py-8 px-4";

  return multiline ? (
    <textarea
      {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      className={`${baseClasses} min-h-24 resize-none ${className}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    />
  ) : (
    <input
      {...(rest as InputHTMLAttributes<HTMLInputElement>)}
      className={`${baseClasses} ${className}`}
    />
  );
};

export default Input;
