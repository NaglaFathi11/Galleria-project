import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GalleryData } from "../../App";

export default function Header() {
  const passedValue = useContext(GalleryData);

  return (
    <div id="header-wrapper">
      <Link to={"/"}>
        <img src="/assets/shared/logo.svg" alt="" />
      </Link>
      <button
        onClick={() =>
          passedValue.UpdateIsSlideshowActive(!passedValue.isSlideshowActive)
        }
      >
        {passedValue.isSlideshowActive ? "Stop slideshow" : "Start slideshow"}
      </button>
      {/* <button onClick={() => passedValue.UpdateIsSlideshowActive(false)}>
        Stop slideshow
      </button> */}
    </div>
  );
}
