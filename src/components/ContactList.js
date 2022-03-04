import { Container, Row } from "react-bootstrap";
import ContactCard from "./ContactCard";

function ContactList() {
  return (
    <Container>
      <Row>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </Row>
    </Container>
  );
}

export default ContactList;
