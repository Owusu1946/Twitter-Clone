import React, { useCallback } from 'react';
import { IconType } from "react-icons";
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href: string;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, auth }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    if (auth) {
      loginModal.onOpen();
    } else {
      router.push(href);
    }
  }, [router, href, auth, loginModal]);

  return (
    <div onClick={onClick} className="flex flex-row items-center">
      <div className="
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
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
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">
          {label}
        </p>
      </div>
    </div>
  );
}

export default SidebarItem;