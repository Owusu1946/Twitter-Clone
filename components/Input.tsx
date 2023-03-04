interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type = "text" }) => {
  return ( 
    <input 
      value={value}
      placeholder={placeholder}
      type={type}
      className="
        p-4 
        text-lg 
        bg-black 
        border-2
        border-neutral-800 
        rounded-md
        outline-none
        text-white
      " 
      />
   );
}
 
export default Input;