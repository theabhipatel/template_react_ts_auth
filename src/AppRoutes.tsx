import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

/** [📌 TODO ] : Have to make routes dynamic with support children. */

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
