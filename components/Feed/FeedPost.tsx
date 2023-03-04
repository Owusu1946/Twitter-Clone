import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';

const FeedPost = () => {
  const router = useRouter();
  
  const handleGoToProfile = useCallback(() => {
    router.push('/profiles/123')
  }, [router]);


  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-start gap-3">
        <img
          onClick={handleGoToProfile}
          className="
            rounded-full 
            w-12 
            h-12 
            hover:opacity-90 
            transition 
            cursor-pointer
          "
          src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
        />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="text-white font-semibold cursor-pointer hover:underline">
              Elon Musk
            </p>
            <span className="text-neutral-500 cursor-pointer">
              @elonmusk
            </span>
            <span className="text-neutral-500">
              2h
            </span>
          </div>
          <div className="text-white mt-1">
            This is my very real Tweet!
          </div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
              <AiOutlineMessage size={20} />
              <p>
                300
              </p>
            </div>
            <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-red-500">
              <AiOutlineHeart size={20} />
              <p>
                234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedPost;
