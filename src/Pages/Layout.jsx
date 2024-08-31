import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import MainGallery from "../Pages/MainGallery/MainGallery";

export default function Layout() {
  return (
    <>
      <Header />
      <MainGallery />

      <Outlet />
    </>
  );
}
