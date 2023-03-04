const ProfileHero = () => {
  return ( 
    <div>
      <div className="bg-neutral-700 h-56 relative">
        <img
          className="
            rounded-full 
            w-36 
            h-36
            border-4
            border-black
            hover:opacity-90 
            transition 
            cursor-pointer
            absolute
            -bottom-16
            left-4
          "
          src="https://pbs.twimg.com/profile_images/1631807251475251200/R15rBPca_200x200.jpg" 
        />
      </div>
    </div>
   );
}
 
export default ProfileHero;