import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EditContactForm from "../components/EditContactForm";

describe("EditContactForm", () => {
  test("has first name error message when First Name is not filled", () => {
    render(<EditContactForm />);
    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);
    const firstNameError = screen.getByText(
      "Please provide a valid First Name",
      { exact: false }
    );
    expect(firstNameError).toBeInTheDocument();
  });

  test("does't have first name error message when First Name is filled", () => {
    render(<EditContactForm />);
    const firstNameInput = screen.getByLabelText("First Name", {
      exact: false,
    });
    const submitButton = screen.getByRole("button");
	fireEvent.change(firstNameInput, { target: { value: "First" } });
    userEvent.click(submitButton);
    const firstNameError = screen.queryByText(
      "Please provide a valid First Name",
      { exact: false }
    );
    expect(firstNameError).not.toBeInTheDocument();
  });

  test("has last name error message when First Name is filled", () => {
    render(<EditContactForm />);
    const firstNameInput = screen.getByLabelText("First Name", {
      exact: false,
    });
    const submitButton = screen.getByRole("button");
	fireEvent.change(firstNameInput, { target: { value: "First" } });
    userEvent.click(submitButton);
    const lastNameError = screen.queryByText(
      "Please provide a valid Last Name",
      { exact: false }
    );
    expect(lastNameError).toBeInTheDocument();
  });
});


