import { BiImage } from 'react-icons/bi';
import { HiOutlineGif } from 'react-icons/hi2';
import { IoLocationSharp } from 'react-icons/io5';

import Avatar from './Avatar';
import Button from './Button';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';

const isLoggedIn = false;

interface FormProps {
  placeholder: string;
}

const Form: React.FC<FormProps> = ({ placeholder }) => {
  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {isLoggedIn ? (
        <div className="flex flex-row gap-4">
          <Avatar href="/profiles/123" />
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
              placeholder={placeholder}>
            </textarea>
            <hr 
              className="
                opacity-0 
                peer-focus:opacity-100 
                h-[1px] 
                w-full 
                border-neutral-800 
                transition"
            />
            <div className="mt-4 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-6">
                <BiImage 
                  size={26} 
                  className="text-sky-500 cursor-pointer"
                />
                <HiOutlineGif 
                  size={26} 
                  className="text-sky-500 cursor-pointer"
                />
                <IoLocationSharp 
                  size={26}
                  className="text-sky-500 cursor-pointer"
                />
              </div>
              <Button onClick={() => {}} label="Tweet" />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">Welcome to Twitter</h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <LoginModal />
            <RegisterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
