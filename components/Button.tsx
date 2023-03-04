interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, secondary, fullWidth, onClick, large }) => {
  return ( 
    <button
      onClick={onClick}
      className={`
        rounded-full
        font-semibold
        hover:bg-opacity-90
        transition
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${secondary ? 'bg-white' : 'bg-sky-500'}
        ${secondary ? 'text-black' : 'text-white'}
        ${large ? 'text-xl' : 'text-md'}
        ${large ? 'px-5' : 'px-4'}
        ${large ? 'py-3' : 'py-2'}
      `}
    >
      {label}
    </button>
   );
}
 
export default Button;