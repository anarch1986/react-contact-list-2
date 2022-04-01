/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import PageTitle from "../components/PageTitle";
import ContactsContext from "../state/contacts-context";
import { colors } from "../theme.js";

function ContactDetailsPage() {
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

  function handleDeleteClick() {
    contactsContext.deleteContact(id).then(() => history.push("/"));
  }

  function handleEditClick() {
    history.push("/edit/" + id);
  }

  useEffect(() => {
    getContactById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // Because of the transition real div is needed instead of Fregment
    <div>
      <PageTitle
        pageTitle={contact.name.first + " " + contact.name.last + "'s Profile"}
      />
      <Container>
        <Row>
          <Col lg={{ span: 9, offset: 3 }}>
            <div
              css={css`
                display: flex;
                padding: 10px;
                margin: 10px 10px 30px 10px;
                text-align: center;

                @media (max-width: 992px) {
                  display: inline;
                }
              `}
            >
              <div
                css={css`
                  margin-right: 15px;
                `}
              >
                <img
                  alt="profile-pic"
                  src={contact.picture.large}
                  css={css`
                    height: 150px;
                    width: 150px;
                  `}
                />
              </div>
              <div
                css={css`
                  padding-left: 10px;
                `}
              >
                <div
                  css={css`
                    text-align: left;
                    word-break: break-all;
                    margin-bottom: 15px;
                    @media (max-width: 992px) {
                      margin-top: 15px;
                    }
                  `}
                >
                  {" "}
                  Email:{" "}
                  <span
                    css={css`
                      color: ${colors.red};
                    `}
                  >
                    {contact.email}
                  </span>
                </div>
                <div
                  css={css`
                    text-align: left;
                    word-break: break-all;
                    margin-bottom: 15px;
                  `}
                >
                  Phone: {contact.phone}
                </div>
                <div
                  css={css`
                    text-align: left;
                    word-break: break-all;
                    margin-bottom: 15px;
                  `}
                >
                  Address:{" "}
                  {contact.location.street.name +
                    " " +
                    contact.location.street.number +
                    ", " +
                    contact.location.city +
                    ", " +
                    contact.location.state}
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <Button
              css={css`
                margin-right: 15px;
              `}
              variant="outline-danger"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
            <Button
              css={css`
                margin-left: 15px;
              `}
              variant="outline-dark"
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactDetailsPage;
