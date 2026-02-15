import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";

const mockProducts = [
  {
    id: 1,
    name: "Test Hoodie",
    description: "Test description",
    origin: "USA",
    price: 50
  }
];

test("updates product price when update button is clicked", () => {
  const mockUpdateProduct = vi.fn();
  const mockDeleteProduct = vi.fn();

  render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <Routes>
        <Route
          path="/products/:id"
          element={
            <ProductDetailPage
              products={mockProducts}
              updateProduct={mockUpdateProduct}
              deleteProduct={mockDeleteProduct}
            />
          }
        />
      </Routes>
    </MemoryRouter>
  );

  const input = screen.getByDisplayValue("50");

  fireEvent.change(input, { target: { value: "75" } });

  fireEvent.click(screen.getByRole("button", { name: /update price/i }));

  expect(mockUpdateProduct).toHaveBeenCalledWith(1, { price: 75 });
});
