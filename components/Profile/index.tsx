import FeedPost from "../Feed/FeedPost";
import ProfileBio from "./ProfileBio";
import ProfileHeader from "./ProfileHeader";
import ProfileHero from "./ProfileHero";

const Profile = () => {
  return (     
    <>
      <ProfileHeader />
      <ProfileHero />
      <ProfileBio />
      <FeedPost />
    </>
  );
}
 
export default Profile;