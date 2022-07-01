import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {images.map(({ id, title }) => (
        <ul>
          <li key={id}>{title}</li>
        </ul>
      ))}
    </>
  );
};

export default GifGrid;
