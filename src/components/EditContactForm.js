/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

import { colors } from "../theme.js";

function EditContactForm(props) {
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

  const firstNameInputRef = useRef()
  const lastNameInputRef = useRef()
  const emailInputRef = useRef()
  const phoneInputRef = useRef()


  useEffect(() => {
    if (props.contact) {
      console.log(props.contact)
      firstNameInputRef.current.value = props.contact.name.first
      lastNameInputRef.current.value = props.contact.name.last
      emailInputRef.current.value = props.contact.email
      phoneInputRef.current.value = props.contact.phone
      setContact(props.contact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.contact]);

  function handleOnClick() {
    contact.name.first = firstNameInputRef.current.value
    contact.name.last = lastNameInputRef.current.value
    contact.email = emailInputRef.current.value
    contact.phone = phoneInputRef.current.value
    props.handleSaveContact(contact)
  }


  return (
    <Container>
      <Row>
        <Col lg={{ span: 6, offset: 3 }}>
          <Form
            css={css`
              margin-top: 10px;
            `}
          >
            <Form.Group
              css={css`
                display: flex;
              `}
            >
              <Form.Label
                css={css`
                  width: 50%;
                  color: ${colors.grey};
                  text-align: left;
                `}
              >
                First name
              </Form.Label>
              <Form.Control
                css={css`
                  text-align: left;
                `}
                type="text" ref={firstNameInputRef}
              />
            </Form.Group>
            <Form.Group
              css={css`
                display: flex;
                margin-top: 15px;
              `}
            >
              <Form.Label
                css={css`
                  width: 50%;
                  color: ${colors.grey};
                  text-align: left;
                `}
              >
                Last name
              </Form.Label>
              <Form.Control
                css={css`
                  text-align: left;
                `}
                type="text" ref={lastNameInputRef}
              />
            </Form.Group>
            <Form.Group
              css={css`
                display: flex;
                margin-top: 15px;
              `}
            >
              <Form.Label
                css={css`
                  width: 50%;
                  color: ${colors.grey};
                  text-align: left;
                `}
              >
                Email
              </Form.Label>
              <Form.Control
                css={css`
                  text-align: left;
                `}
                type="email" ref={emailInputRef}
              />
            </Form.Group>
            <Form.Group
              css={css`
                display: flex;
                margin-top: 15px;
              `}
            >
              <Form.Label
                css={css`
                  width: 50%;
                  color: ${colors.grey};
                  text-align: left;
                `}
              >
                Phone
              </Form.Label>
              <Form.Control
                css={css`
                  text-align: left;
                `}
                type="tel" ref={phoneInputRef}
              />
            </Form.Group>
            <Button
              variant="outline-dark"
              css={css`
                margin-top: 30px;
              `}
              onClick={handleOnClick}
            >
              Save Contact
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditContactForm;
