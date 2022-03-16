/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ContactsContext from "../data/contacts-context";
import { colors } from "../theme.js";
import ContactList from "../components/ContactList";
import LetterBar from "../components/LetterBar";

function ContactsPage() {
  const contactsContext = useContext(ContactsContext);

  const [contactsList, setContactList] = useState(contactsContext.contacts);

  function filterContacts(letter) {
    const filteredContacts = contactsContext.contacts.filter(contact => contact.name.last[0].toLowerCase() === letter.toLowerCase())
    setContactList(filteredContacts)
  }

  function clearFilters() {
    setContactList(contactsContext.contacts)
  }

  return (
    <Container>
      <Row>
        <Col>
          <div onClick={clearFilters}
            css={css`
              margin: 20px 0 0 0;
              font-size: 32px;

              &:hover {
                cursor: pointer;
                }
            `}
          >
            <b>Contacts</b>
          </div >
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            className="mx-auto"
            css={css`
              background-color: ${colors.red};
              height: 3px;
              width: 60px;
              margin: 0 0 20px 0;
            `}
          ></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <LetterBar contactLetters={contactsContext.contacts.map((contact) => contact.name.last[0])} onLetterFilterHandler={filterContacts} />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ContactList contacts={contactsList} />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsPage;
