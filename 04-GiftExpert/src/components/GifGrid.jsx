import { getGifs } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export default GifGrid;
