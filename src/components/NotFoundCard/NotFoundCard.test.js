import { render, screen } from "@testing-library/react";
import NotFoundCard from "./NotFoundCard";

describe("NotFoundCard", () => {
  it("should render not found message and not found gif", () => {
    render(<NotFoundCard error="NotFoundMessage" />);

    var notFoundMessage = screen.getByText("NotFoundMessage");
    var notFoundImg = screen.getByRole("img");

    expect(notFoundMessage).toBeInTheDocument();
    expect(notFoundImg).toBeInTheDocument();
  });
});
