import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  src?: string;
  href: string;
  size?: number;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, href, size = 12, hasBorder }) => {
  const router = useRouter();

  const onClick = useCallback(() => {
    router.push(href);
  }, [router, href]);

  return ( 
    <img
      onClick={onClick}
      className={`
        ${hasBorder ? 'border-4 border-black' : ''}
        rounded-full 
        w-${size} 
        h-${size} 
        hover:opacity-90 
        transition 
        cursor-pointer
      `}
      src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
    />
   );
}
 
export default Avatar;