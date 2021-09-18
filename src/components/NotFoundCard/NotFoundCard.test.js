import { render, screen } from "@testing-library/react";
import NotFoundCard from "./NotFoundCard";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key) => key }),
}));

describe("NotFoundCard", () => {
  it("should render not found message and not found gif", () => {
    render(<NotFoundCard error="NotFoundMessage" />);

    var notFoundMessage = screen.getByText("NotFoundMessage");
    var notFoundImg = screen.getByRole("img");

    expect(notFoundMessage).toBeInTheDocument();
    expect(notFoundImg).toBeInTheDocument();
  });
});
