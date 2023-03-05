import { useRouter } from "next/router";

import useUser from "@/hooks/useUser";

import Feed from "@/components/Feed";
import Header from "@/components/Header";
import UserBio from "@/components/users/UserBio";
import UserHero from "@/components/users/UserHero";



const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser } = useUser(userId as string);

  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <Feed posts={[1]} />
    </>
   );
}
 
export default UserView;