export const Quote = ({ author = "Unknown", quote = "Error 404" }) => {
  console.log(author, quote);

  return (
    <>
      <blockquote className="blockquote text-end">
        <p className="mb-1">{author}</p>
        <footer className="blockquote-footer">{quote}</footer>
      </blockquote>
    </>
  );
};
