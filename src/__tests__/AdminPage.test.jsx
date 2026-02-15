import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminPage from "../pages/AdminPage";

test("submits form and calls addProduct", () => {
  const mockAddProduct = vi.fn();

  render(
    <BrowserRouter>
      <AdminPage addProduct={mockAddProduct} />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText("Product Name"), {
    target: { value: "New Hoodie" }
  });

  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "New Description" }
  });

  fireEvent.change(screen.getByPlaceholderText("Origin"), {
    target: { value: "USA" }
  });

  fireEvent.change(screen.getByPlaceholderText("Price"), {
    target: { value: "99" }
  });

  fireEvent.click(screen.getByRole("button", { name: /add product/i }));

  expect(mockAddProduct).toHaveBeenCalledTimes(1);

  expect(mockAddProduct).toHaveBeenCalledWith({
    name: "New Hoodie",
    description: "New Description",
    origin: "USA",
    price: 99
  });
});
