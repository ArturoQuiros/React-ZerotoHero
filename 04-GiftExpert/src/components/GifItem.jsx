const GifItem = ({ url, title }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt="{title}" />
        <p>{title}</p>
      </div>
    </>
  );
};

export default GifItem;
