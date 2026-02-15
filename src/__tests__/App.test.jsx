import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Admin" })).toBeInTheDocument();
});
