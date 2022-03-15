/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";

import { colors } from '../theme.js'
import ContactList from "../components/ContactList";

function ContactsPage() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            css={css`
              padding: 20px 0 0 0;
              font-size: 32px;
            `}
          >
            <b>Contacts</b>
          </div>
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
        <Col xl={12}>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactsPage;
