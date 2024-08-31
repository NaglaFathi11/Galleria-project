import "./ViewImage.css";
// import { GalleryData } from "../../App";
// import { useContext } from "react";

export default function ViewImage(props) {
  //   const { imagesData } = useContext(GalleryData);

  function CloseImagesSection() {
    props.UpdateImageIsVisible(false);
  }

  return (
    <>
      {props.imagesIsVisible ? (
        <div id="container">
          <div className="view-image">
            <img src={props.handleImages(props.image)} />
            <button onClick={CloseImagesSection}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
