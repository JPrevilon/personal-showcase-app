import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShopPage from "../pages/ShopPage";

const mockProducts = [
  {
    id: 1,
    name: "Test Hoodie",
    description: "Test description",
    origin: "USA",
    price: 50
  },
  {
    id: 2,
    name: "Test Tee",
    description: "Another description",
    origin: "USA",
    price: 30
  }
];

test("renders products from props", () => {
  render(
    <BrowserRouter>
      <ShopPage products={mockProducts} loading={false} error={null} />
    </BrowserRouter>
  );

  expect(screen.getByText("Test Hoodie")).toBeInTheDocument();
  expect(screen.getByText("$50")).toBeInTheDocument();
});

test("filters products based on search input", () => {
  render(
    <BrowserRouter>
      <ShopPage products={mockProducts} loading={false} error={null} />
    </BrowserRouter>
  );

  const searchInput = screen.getByPlaceholderText("Search products...");

  // Type into search
  fireEvent.change(searchInput, { target: { value: "Hoodie" } });

  expect(screen.getByText("Test Hoodie")).toBeInTheDocument();
  expect(screen.queryByText("Test Tee")).not.toBeInTheDocument();
});

test("shows no products message when search does not match", () => {
  render(
    <BrowserRouter>
      <ShopPage products={mockProducts} loading={false} error={null} />
    </BrowserRouter>
  );

  const searchInput = screen.getByPlaceholderText("Search products...");

  fireEvent.change(searchInput, { target: { value: "xyz" } });

  expect(screen.getByText("No products found.")).toBeInTheDocument();
});
