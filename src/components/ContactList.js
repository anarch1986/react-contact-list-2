import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import ContactCard from "./ContactCard";

function ContactList(props) {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    setContactList([])
    setTimeout(() => {
      setContactList(props.contacts)
    }, 100)
  }, [props]);

  

  return (
    <Container>
      <Row>
        {contactList.map((contactItem) => (
          <Col className="fadeIn" lg={4} key={contactItem.uid}>
            <ContactCard contact={contactItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContactList;
