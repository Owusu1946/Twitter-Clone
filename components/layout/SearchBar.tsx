import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div 
      className="
        relative 
        hidden
        lg:block
        col-span-1
        h-full
        px-6
        py-2
    ">
      <input 
      className="
        peer
      bg-neutral-700
      placeholder-neutral-400
      text-white
      focus:bg-black
      focus:border-sky-500
        w-full
        pl-10
        pr-4
        py-2
        rounded-full
        border-[1px]
        border-transparent
        outline-none
        transition
      "
      placeholder="Search Twitter" />
      <BsSearch size={18} className="
        text-neutral-400 
        absolute 
        top-5 
        left-9
        peer-focus:text-sky-500
      " 
      />
    </div>
  );
};

export default SearchBar;
