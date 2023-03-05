import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

import useUser from "@/hooks/useUser";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ userId, isLarge, hasBorder }) => {
  const router = useRouter();

  const { data: fetchedUser } = useUser(userId);

  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);

  return (
    <div>
      <Image
        width={isLarge ? 128 : 48}
        height={isLarge ? 128 : 48}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.image || '/images/placeholder.png'}
        className={`
          ${hasBorder ? 'border-4 border-black' : ''}
          rounded-full 
          hover:opacity-90 
          transition 
          cursor-pointer
        `}
      />
    </div>
  );
}
 
export default Avatar;