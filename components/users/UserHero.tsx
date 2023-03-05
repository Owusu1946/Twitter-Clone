import Avatar from "../Avatar"

interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  return ( 
    <div>
      <div className="bg-neutral-700 h-56 relative">
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
   );
}
 
export default UserHero;