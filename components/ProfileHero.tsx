import Avatar from "./Avatar"

const ProfileHero = () => {
  return ( 
    <div>
      <div className="bg-neutral-700 h-56 relative">
        <div className="absolute -bottom-16 left-4">
          <Avatar size={32} hasBorder href="/profiles/123" />
        </div>
      </div>
    </div>
   );
}
 
export default ProfileHero;