import { Outlet } from "react-router-dom";
import MainHeader from "./../Components/MainHeader";
const RootLayout = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
