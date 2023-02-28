import React from 'react';
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      ">
        <Icon size={28} color="white" />
      </div>
      <div className="
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-xl 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-2xl">
          {label}
        </p>
      </div>
    </div>
  );
}

export default SidebarItem;