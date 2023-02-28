import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  return (
    <div>
      <div className="
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-blue-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      ">
        <FaFeather size={24} color="white" />
      </div>
      <div className="
        hidden 
        lg:block 
        p-4
        rounded-full
        bg-blue-500
        hover:bg-opacity-90 
        cursor-pointer
      ">
        <p className="hidden lg:block text-center font-semibold text-white text-2xl">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
