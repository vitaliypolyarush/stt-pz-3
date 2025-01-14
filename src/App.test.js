import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

jest.mock("./api/anapioficeandfire", () => ({
  getBooks: jest.fn().mockResolvedValue([
      { name: "A Game of Thrones", url: "https://www.anapioficeandfire.com/api/books/1" },
      { name: "A Clash of Kings", url: "https://www.anapioficeandfire.com/api/books/2" },
  ]),
}));

describe("App Component", () => {
  it("renders list of API endpoints", async () => {
      render(<App />);
      const listItems = await waitFor(() =>
          screen.findAllByRole("listitem")
      );
      expect(listItems.length).toBeGreaterThan(0);
  });
});