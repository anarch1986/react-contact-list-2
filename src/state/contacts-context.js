import { createContext, useState } from "react";

const ContactsContext = createContext({
  contacts: [],
  getAllContacts: () => {},
  createContact: (contact) => {},
  updateContact: (updatedContact) => {},
  deleteContact: (id) => {},
});

export function ContactsContextProvider(props) {
  const [loadedContacts, setContacts] = useState([]);

  async function getAllContactsHandler() {
    const response = await fetch(
      "https://randomuser.me/api/?nat=gb&results=10"
    );
    const responseJson = await response.json();
    const contacts = [];

    for (const key in responseJson.results) {
      const contact = {
        uid: key,
        ...responseJson.results[key],
      };
      contacts.push(contact);
    }
    setContacts(() => {
      return contacts;
    });
  }

  async function createContactHandler(contact) {
    const orderedContacts = loadedContacts.sort((a, b) => (a.uid > b.uid) ? 1 : -1)
    contact.uid = (orderedContacts[orderedContacts.length - 1].uid)+1
    loadedContacts.push(contact)
  }

  async function updateContactHandler(updatedContact) {
    const oldContact = loadedContacts.filter((contact) => contact.uid !== updatedContact.uid)[0]
    loadedContacts[oldContact] = updatedContact
  }

  async function deleteContactHandler(id) {
    setContacts(loadedContacts.filter((contact) => contact.uid !== id));
  }

  const context = {
    contacts: loadedContacts,
    getAllContacts: getAllContactsHandler,
    createContact: createContactHandler,
    updateContact: updateContactHandler,
    deleteContact: deleteContactHandler,
  };

  return (
    <ContactsContext.Provider value={context}>
      {props.children}
    </ContactsContext.Provider>
  );
}

export default ContactsContext;
