import { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ContactsContext from "../state/contacts-context";
import PageTitle from "../components/PageTitle";
import ContactList from "../components/ContactList";
import LetterBar from "../components/LetterBar";

function ContactsPage(props) {
  const contactsContext = useContext(ContactsContext);

  const [contactsList, setContactList] = useState(contactsContext.contacts);
  // Store old search string here than you do not need to hack the flow by adding a time gap :)
  const [oldSearchString, setOldSearchString] = useState("");

  useEffect(() => {
    if (props.contactSearch && props.contactSearch.trim() !== "" && props.contactSearch.trim() !== oldSearchString.trim()) {
      const filteredContacts = contactsContext.contacts.filter(
        (contact) =>
          (contact.name.first.toLowerCase() + contact.name.last.toLowerCase())
            .includes(props.contactSearch.trim().toLowerCase())
      );
      setContactList(filteredContacts);
      setOldSearchString(props.contactSearch)
    } else {
      setContactList(contactsContext.contacts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.contactSearch]);

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
    <div>
      <PageTitle pageTitle="Contacts" />
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
    </div>
  );
}

export default ContactsPage;
