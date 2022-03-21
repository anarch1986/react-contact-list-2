import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactsPage from "../pages/ContactsPage";
import ContactsContext from "../state/contacts-context";

const contacts = [
  {
    name: {
      first: "Alpha",
      last: "Beta",
    },
    uid: "1",
    picture: {
      large: "",
    },
    email: "",
    phone: "",
    location: {
      street: {
        name: "",
        number: "",
      },
      city: "",
      state: "",
    },
  },
  {
    name: {
      first: "Gamma",
      last: "Delta",
    },
    uid: "1",
    picture: {
      large: "",
    },
    email: "",
    phone: "",
    location: {
      street: {
        name: "",
        number: "",
      },
      city: "",
      state: "",
    },
  },
];

describe("ContactsPage", () => {
  test("has the filtered contact", () => {
    render(<ContactsPage />);
    const titleText = screen.getByText("Contacts");
    expect(titleText).toBeInTheDocument();
  });

  test("has the right letters for filtering", () => {
    render(
      <ContactsContext.Provider value={{ contacts: contacts }}>
        <ContactsPage />
      </ContactsContext.Provider>
    );
    const firstLetter = document.getElementById("B-letter");
    const secondLetter = document.getElementById("D-letter");
    expect(firstLetter).toBeInTheDocument();
    expect(secondLetter).toBeInTheDocument();
  });
});
