import { render, screen } from "@testing-library/react";
import AddNewButton from "../components/AddNewButton";

describe("AddNewButton", () => {
  test("has a '+' sign in the button", () => {
    render(<AddNewButton />);
    const addNewButtonText = screen.getByText("+");
    expect(addNewButtonText).toBeInTheDocument();
  });
});
