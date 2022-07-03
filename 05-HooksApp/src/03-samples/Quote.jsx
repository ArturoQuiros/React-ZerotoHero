import { useRef, useState } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ author = "Unknown", quote = "Error 404" }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  /*
  useLayoutEffect(() => {
    const { height, width } = console.log(pRef.current.getBoundingClientRect());
    setBoxSize({ height, width });
  }, [quote]);
*/
  return (
    <>
      <blockquote style={{ display: "flex" }} className="blockquote text-end">
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      {/*<code>{JSON.stringify(boxSize)}</code>*/}
    </>
  );
};
