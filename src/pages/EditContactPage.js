import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import EditContactForm from "../components/EditContactForm";
import ContactsContext from "../state/contacts-context";

function EditContactPage() {
  const contactsContext = useContext(ContactsContext);
  const { id } = useParams();
  const history = useHistory();

  const [contact, setContact] = useState({
    name: {
      first: "",
      last: "",
    },
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
  });

  function getContactById(id) {
    const foundContacts = contactsContext.contacts.filter(
      (contact) => contact.uid === id
    );
    setContact(foundContacts[0]);
  }

  function saveEditedContact(updatedContact) {
    contactsContext.updateContact(updatedContact).then(() => {
      history.push("/");
    });
  }

  useEffect(() => {
    getContactById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageTitle
        pageTitle={contact.name.first + " " + contact.name.last + "'s Profile"}
      />
      <EditContactForm
        contact={contact}
        handleSaveContact={saveEditedContact}
      />
    </div>
  );
}

export default EditContactPage;
