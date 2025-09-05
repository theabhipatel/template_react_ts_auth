import Navigator from "@/components/Navigator";

const Profile = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-center text-6xl font-bold text-transparent">
        Profile
      </h1>
      <Navigator />
    </div>
  );
};

export default Profile;
