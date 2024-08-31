import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GalleryData } from "../../App";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./GalleryDetails.css";

export default function GalleryDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { imagesData, isSlideshowActive } = useContext(GalleryData);
  const mobile = useMediaQuery("(max-width: 870px)");

  // handel image size in large and small screen
  const handleImages = (image) => {
    let large = image.images.hero.large;
    let small = image.images.hero.small;
    return mobile ? small : large;
  };

  // Next and previous BTNS
  const PrivioustBTN = () => {
    const isFirstSlider = slider === 0;
    const newIndex = isFirstSlider ? imagesData.length - 1 : slider - 1;
    setSlider(newIndex);
    navigate(`/maingallery/${imagesData[newIndex].id}`);
  };

  const NextBTN = () => {
    const isLastSlider = slider === imagesData.length - 1;
    const newIndex = isLastSlider ? 0 : slider + 1;
    setSlider(newIndex);
    navigate(`/maingallery/${imagesData[newIndex].id}`);
  };

  //SliderShow
  const [slider, setSlider] = useState(
    imagesData.findIndex((image) => image.id === parseInt(id))
  );

  useEffect(() => {
    if (isSlideshowActive) {
      const interval = setInterval(() => {
        NextBTN();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [slider, isSlideshowActive]);

  const image = imagesData[slider];

  return (
    <>
      {image ? (
        <>
          <div key={image.id} id="details-wrapper" className={image.className}>
            <div className="image-content">
              <img
                src={handleImages(image)}
                alt={image.name}
                className={mobile ? "small-img" : "large-img"}
              />
              <div className="artist-name">
                <h1>{image.name}</h1>
                <p>{image.artist.name}</p>
              </div>
              <img
                src={image.artist.image}
                alt={image.artist.name}
                className="arist-img"
              />
            </div>
            <div className="description">
              <p>{image.description}</p>
              <strong>{image.year}</strong>
              <a href={image.source} target="_blank">
                Go to source
              </a>
            </div>
          </div>
          <footer>
            <progress
              className="footer-line"
              max="100"
              value={(slider + 1) * (100 / imagesData.length)}
            ></progress>
            <div className="footer-content">
              <div className="footer-name">
                <h1>{image.name}</h1>
                <p>{image.artist.name}</p>
              </div>
              <div className="slideshow-btns">
                <button onClick={PrivioustBTN}>
                  <img src="/assets/shared/icon-back-button.svg" alt="" />
                </button>
                <button onClick={NextBTN}>
                  <img src="/assets/shared/icon-next-button.svg" alt="" />
                </button>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <h3>No image found</h3>
      )}
    </>
  );
}
