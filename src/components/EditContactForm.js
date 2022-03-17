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

  const [isFirstNameError, setIsFirstNameError] = useState(false);
  const [isLastNameError, setIsLastNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);

  function validateFiled(field) {
    if (field && field !== "" && field.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  useEffect(() => {
    if (props.contact) {
      firstNameInputRef.current.value = props.contact.name.first;
      lastNameInputRef.current.value = props.contact.name.last;
      emailInputRef.current.value = props.contact.email;
      phoneInputRef.current.value = props.contact.phone;
      setContact(props.contact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.contact]);

  function validateForm() {
    let isValid = true
    if (validateFiled(firstNameInputRef.current.value)) {
      contact.name.first = firstNameInputRef.current.value;
      setIsFirstNameError(false);
    } else {
      setIsFirstNameError(true);
      isValid = false
    }

    if (validateFiled(lastNameInputRef.current.value)) {
      contact.name.last = lastNameInputRef.current.value;
      setIsLastNameError(false);
    } else {
      setIsLastNameError(true);
      isValid = false
    }

    if (validateEmail(emailInputRef.current.value)) {
      contact.email = emailInputRef.current.value;
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
      isValid = false
    }

    if (validateFiled(phoneInputRef.current.value)) {
      contact.phone = phoneInputRef.current.value;
      setIsPhoneError(false);
    } else {
      setIsPhoneError(true);
      isValid = false
    }

    return isValid
  }

  function handleOnClick() {
    if (validateForm()) {
      props.handleSaveContact(contact);
    }
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
                type="text"
                ref={firstNameInputRef}
              />
              <br />
            </Form.Group>
            {isFirstNameError && (
              <small
                css={css`
                  color: ${colors.red};
                `}
              >
                Please provide a valid First Name
              </small>
            )}

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
                type="text"
                ref={lastNameInputRef}
              />
            </Form.Group>
            {isLastNameError && (
              <small
                css={css`
                  color: ${colors.red};
                `}
              >
                Please provide a valid Last Name
              </small>
            )}
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
                type="email"
                ref={emailInputRef}
              />
            </Form.Group>
            {isEmailError && (
              <small
                css={css`
                  color: ${colors.red};
                `}
              >
                Please provide a valid Email
              </small>
            )}
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
                type="tel"
                ref={phoneInputRef}
              />
            </Form.Group>
            {isPhoneError && (
              <small
                css={css`
                  color: ${colors.red};
                `}
              >
                Please provide a valid Phone number
              </small>
            )}
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
