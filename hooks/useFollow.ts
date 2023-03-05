import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

  const loginModal = useLoginModal();

  const isFollowing = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId);
  }, [currentUser, userId]);

  const onFollow = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      await axios.post('/api/follow', { userId });
      mutateCurrentUser();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [currentUser, loginModal, userId, mutateCurrentUser]);

  const onUnfollow = useCallback(async () => {
    try {
      await axios.delete('/api/follow', { data: { userId } });
      mutateCurrentUser();
      toast.success('Success');
    } catch (error) {
      toast.error('Something went wrong');
    }
  }, [userId, mutateCurrentUser]);

  return {
    isFollowing,
    onFollow,
    onUnfollow
  }
}

export default useFollow;
