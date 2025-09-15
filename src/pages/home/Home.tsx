import Navigator from "@/components/Navigator";
import DummyHome from "./components/DummyHome";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Welcome to
      </span>

      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-center text-6xl font-bold text-transparent">
        TAP React Template
      </h1>
      <DummyHome />
      <Button>Get Started</Button>
      <Navigator />
    </div>
  );
};

export default Home;
