import Feed from "@/components/Feed";
import Header from "@/components/Header";
import ProfileBio from "@/components/ProfileBio";
import ProfileHero from "@/components/ProfileHero";

const ProfileView = () => {
  return ( 
    <>
      <Header showBackArrow label="Code with Antonio" />
      <ProfileHero />
      <ProfileBio />
      <Feed posts={[1]} />
    </>
   );
}
 
export default ProfileView;