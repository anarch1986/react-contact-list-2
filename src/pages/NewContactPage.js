import { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";

import PageTitle from "../components/PageTitle";
import EditContactForm from "../components/EditContactForm";
import ContactsContext from "../state/contacts-context";

function NewContactPage() {
  const contactsContext = useContext(ContactsContext);
  const history = useHistory();

  function saveNewContact(newContact) {
    contactsContext.createContact(newContact).then(() => {
      history.push("/");
    });
  }

  return (
    <Fragment>
      <PageTitle
        pageTitle={"Add New Contact"}
      />
      <EditContactForm
        handleSaveContact={saveNewContact}
      />
    </Fragment>
  );
}

export default NewContactPage;
