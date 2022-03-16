import { Fragment, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import ContactsContext from "../data/contacts-context";

function ContactDetailsPage() {
  const contactsContext = useContext(ContactsContext);
  const { id } = useParams();

const [contact, setContact] = useState({});

function getContactById(id) {
  const foundContacts = contactsContext.contacts.filter(
    (contact) => contact.uid === id
  );
  setContact(foundContacts[0]);
}

  return (
    <Fragment>
      <PageTitle pageTitle={id} />
    </Fragment>
  );
}

export default ContactDetailsPage;
