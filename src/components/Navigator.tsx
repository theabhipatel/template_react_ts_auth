import { Link } from "react-router";

const Navigator = () => {
  return (
    <div className="mt-5 flex gap-3">
      <Link to={"/"} className="font-semibold underline hover:text-blue-600">
        Home
      </Link>
      <Link to={"/profile"} className="font-semibold underline hover:text-blue-600">
        Profile
      </Link>
    </div>
  );
};

export default Navigator;
