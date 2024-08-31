import { Link } from "react-router-dom";
import { GalleryData } from "../../App";
import { useContext } from "react";
import "./MainGallery.css";

export default function MainGallery() {
  const passedValue = useContext(GalleryData);
  // console.log(passedValue);

  return (
    <div className="gallery">
      {passedValue.imagesData.map((image) => (
        <div
          key={image.id}
          id="gallery-item"
          className={image.className}
          // onClick={() => handleViewImage(index)}
        >
          <Link to={`/maingallery/${image.id}`}>
            <img
              src={image.images.thumbnail}
              alt={image.name}
              className="gallery-image"
            />

            <div className="titles-wrapper">
              <h3 className="gallery-title">{image.name}</h3>
              <p className="galley-artist-name">{image.artist.name}</p>
            </div>
            <div className="cover"></div>
          </Link>
        </div>
      ))}
    </div>
  );
}
