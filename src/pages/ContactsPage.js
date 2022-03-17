import { useState, useContext, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ContactsContext from "../state/contacts-context";
import PageTitle from "../components/PageTitle";
import ContactList from "../components/ContactList";
import LetterBar from "../components/LetterBar";

function ContactsPage() {
  const contactsContext = useContext(ContactsContext);

  const [contactsList, setContactList] = useState(contactsContext.contacts);

  function filterContacts(letter) {
    const filteredContacts = contactsContext.contacts.filter(
      (contact) => contact.name.last[0].toLowerCase() === letter.toLowerCase()
    );
    setContactList(filteredContacts);
  }

  function clearFilters() {
    setContactList(contactsContext.contacts);
  }

  return (
    <Fragment>
      <PageTitle pageTitle="Contacts"/>
      <Container>
        <Row>
          <Col>
            <LetterBar
              contactLetters={contactsContext.contacts.map(
                (contact) => contact.name.last[0]
              )}
              onLetterFilterHandler={filterContacts}
              onClearFilterHandler={clearFilters}
            />
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <ContactList contacts={contactsList} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ContactsPage;
