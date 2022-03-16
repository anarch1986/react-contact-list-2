import { Container, Row, Col } from "react-bootstrap";

import ContactCard from "./ContactCard";

function ContactList(props) {
  return (
    <Container>
      <Row>
        {props.contacts.map((contactItem) => (
          <Col lg={4}>
            <ContactCard key={contactItem.uid} contact={contactItem} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContactList;
