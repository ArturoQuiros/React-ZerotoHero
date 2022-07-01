import { useState } from "react";
import { useEffect } from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
