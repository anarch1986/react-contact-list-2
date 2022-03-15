import { createContext, useState } from "react";

const ContactsContext = createContext({
  contacts: [],
  getAllContacts: () => {},
  getContact: (contact) => {},
  createContact: (contact) => {},
  updateContact: (contact) => {},
  deleteContact: (contact) => {},
});

export function ContactsContextProvider(props) {
  const [loadedContacts, setContacts] = useState([]);

  async function getAllContactsHandler() {
    const response = await fetch(
      "https://randomuser.me/api/?results=10"
    );
    const responseJson = await response.json();
    const contacts = [];

    for (const key in responseJson.results) {
      const contact = {
        id: key,
        ...responseJson.results[key],
      };
      contacts.push(contact);
    }

    console.log(contacts)
    
    setContacts(() => {
      return contacts;
    });
  }

  async function createContactHandler(contact) {
    return
  }

  //function removeMeetupHanlder(meetupId) {}

  const context = {
    contacts: loadedContacts,
    getAllContacts: getAllContactsHandler,
    createContact: createContactHandler,
  };

  return (
    <ContactsContext.Provider value={context}>
      {props.children}
    </ContactsContext.Provider>
  );
}

export default ContactsContext;

