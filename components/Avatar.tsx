import { useRouter } from "next/router";
import { useCallback } from "react";

interface AvatarProps {
  src?: string;
  href: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ src, href, isLarge, hasBorder }) => {
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
        ${isLarge ? 'w-32' : 'w-12'}
        ${isLarge ? 'h-32' : 'h-12'}
        hover:opacity-90 
        transition 
        cursor-pointer
      `}
      src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
    />
   );
}
 
export default Avatar;