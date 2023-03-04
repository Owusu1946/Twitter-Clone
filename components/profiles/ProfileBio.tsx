import { BiCalendar } from "react-icons/bi";

import Button from "../Button";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

const isLoggedIn = false;

const ProfileBio = () => {
  return ( 
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {isLoggedIn ? (
        <Button onClick={() => {}} secondary label="Follow" />
        ) : (
          <div className="flex flex-row items-center gap-2">
            <LoginModal />
            <RegisterModal />
          </div>
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            Code With Antonio
          </p>
          <p className="text-md text-neutral-500">
            @codewithantonio
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">
            As a software engineer with 7+ years of experience, I created Code With Antonio to share my love for programming and help others learn and grow in the field.
          </p>
          <div 
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-500
          ">
            <BiCalendar size={24} />
            <p>
              Joined March 2023
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">0</p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">0</p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default ProfileBio;