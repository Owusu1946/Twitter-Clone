import { useMemo } from 'react';
import { BsHouseFill, BsBellFill, BsEnvelopeFill } from 'react-icons/bs';
import { FaHashtag, FaUser } from 'react-icons/fa';

import SidebarItem from './SidebarItem';
import SidebarLogo from './SidebarLogo';
import SidebarTweetButton from './SidebarTweetButton';

const isLoggedIn = false;

const items = [
  {
    icon: BsHouseFill,
    label: 'Home',
    href: '/',
  },
  {
    icon: FaHashtag,
    label: 'Explore',
    href: '/search',
  },
  {
    icon: BsBellFill,
    label: 'Notifications',
    href: '/notifications',
    auth: true,
  },
  {
    icon: FaUser,
    label: 'Profile',
    href: '/profiles/123',
    auth: true,
  },
]

const Sidebar = () => {
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (!isLoggedIn && item.auth) {
        return null;
      }

      return item;
    })
  }, []);

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col items-end">
          <div className="space-y-2 lg:w-[230px]">
            <SidebarLogo />
            {filteredItems.map((item) => (
              <SidebarItem 
                key={item.href} 
                href={item.href} 
                icon={item.icon} 
                label={item.label}
              />
            ))}
            {isLoggedIn && (
              <SidebarTweetButton />
            )}
          </div>
        </div>
      </div>
  )
};

export default Sidebar;
