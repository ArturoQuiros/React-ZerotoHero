import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

const title = "";
const url = "";

describe("Tests on GifItem", () => {
  test("Match to Snapshot?", () => {
    const { container } = render(<GifItem title={title} url={url}></GifItem>);
    expect(container).toMatchSnapshot();
  });

  test("must show the img with the URL", () => {
    render(<GifItem title={title} url={url}></GifItem>);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });
});
