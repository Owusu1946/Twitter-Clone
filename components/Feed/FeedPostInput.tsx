import { BiImage } from 'react-icons/bi';
import { HiOutlineGif } from 'react-icons/hi2';
import { IoLocationSharp } from 'react-icons/io5';

const FeedPostInput = () => {
  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      <div className="flex flex-row gap-4">
        <img
          className="
            rounded-full 
            w-12 
            h-12 
            hover:opacity-90 
            transition 
            cursor-pointer
          "
          src="https://pbs.twimg.com/profile_images/1625905201306644486/sNTicEIp_normal.jpg" 
        />
        <div className="w-full">
          <textarea 
            className="
              peer
              resize-none 
              mt-3 
              w-full 
              bg-black 
              ring-0 
              outline-none 
              text-[20px] 
              placeholder-neutral-500 
              text-white
            "
            placeholder="What's happening?">
          </textarea>
          <hr className="opacity-0 peer-focus:opacity-100 h-[1px] w-full border-neutral-800 transition" />
          <div className="mt-4 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-6">
              <BiImage size={26} className="text-sky-500 cursor-pointer" />
              <HiOutlineGif size={26} className="text-sky-500 cursor-pointer" />
              <IoLocationSharp size={26} className="text-sky-500 cursor-pointer" />
            </div>
            <div className="rounded-full px-4 py-2 bg-sky-500 text-white font-semibold cursor-pointer hover:bg-opacity-90 transition">
              Tweet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPostInput;
