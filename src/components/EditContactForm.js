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
    let isValid = true;
    if (validateFiled(firstNameInputRef.current.value)) {
      contact.name.first = firstNameInputRef.current.value;
      setIsFirstNameError(false);
    } else {
      setIsFirstNameError(true);
      isValid = false;
    }

    if (validateFiled(lastNameInputRef.current.value)) {
      contact.name.last = lastNameInputRef.current.value;
      setIsLastNameError(false);
    } else {
      setIsLastNameError(true);
      isValid = false;
    }

    if (validateEmail(emailInputRef.current.value)) {
      contact.email = emailInputRef.current.value;
      setIsEmailError(false);
    } else {
      setIsEmailError(true);
      isValid = false;
    }

    if (validateFiled(phoneInputRef.current.value)) {
      contact.phone = phoneInputRef.current.value;
      setIsPhoneError(false);
    } else {
      setIsPhoneError(true);
      isValid = false;
    }

    return isValid;
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
            </Form.Group>
            <div
              css={css`
                text-align: left;
                padding-left: 210px;
                @media (max-width: 1200px) {
                  padding-left: 150px;
                }
                @media (max-width: 992px) {
                  padding-left: 220px;
                }
                @media (max-width: 768px) {
                  padding-left: 170px;
                }
                @media (max-width: 576px) {
                  padding-left: 160px;
                }
                @media (max-width: 470px) {
                  padding-left: 140px;
                }
                @media (max-width: 400px) {
                  padding-left: 120px;
                }
              `}
            >
              {isFirstNameError ? (
                <small
                  css={css`
                    color: ${colors.red};
                  `}
                >
                  Please provide a valid First Name
                </small>
              ) : (
                <small>&nbsp;</small>
              )}
            </div>
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
            <div
              css={css`
                text-align: left;
                padding-left: 210px;
                @media (max-width: 1200px) {
                  padding-left: 150px;
                }
                @media (max-width: 992px) {
                  padding-left: 220px;
                }
                @media (max-width: 768px) {
                  padding-left: 170px;
                }
                @media (max-width: 576px) {
                  padding-left: 160px;
                }
                @media (max-width: 470px) {
                  padding-left: 140px;
                }
                @media (max-width: 400px) {
                  padding-left: 120px;
                }
              `}
            >
              {isLastNameError ? (
                <small
                  css={css`
                    color: ${colors.red};
                  `}
                >
                  Please provide a valid Last Name
                </small>
              ) : (
                <small>&nbsp;</small>
              )}
            </div>
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
            <div
              css={css`
                text-align: left;
                padding-left: 210px;
                @media (max-width: 1200px) {
                  padding-left: 150px;
                }
                @media (max-width: 992px) {
                  padding-left: 220px;
                }
                @media (max-width: 768px) {
                  padding-left: 170px;
                }
                @media (max-width: 576px) {
                  padding-left: 160px;
                }
                @media (max-width: 470px) {
                  padding-left: 140px;
                }
                @media (max-width: 400px) {
                  padding-left: 120px;
                }
              `}
            >
              {isEmailError ? (
                <small
                  css={css`
                    color: ${colors.red};
                  `}
                >
                  Please provide a valid Email
                </small>
              ) : (
                <small>&nbsp;</small>
              )}
            </div>
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
            <div
              css={css`
                text-align: left;
                padding-left: 210px;
                @media (max-width: 1200px) {
                  padding-left: 150px;
                }
                @media (max-width: 992px) {
                  padding-left: 220px;
                }
                @media (max-width: 768px) {
                  padding-left: 170px;
                }
                @media (max-width: 576px) {
                  padding-left: 160px;
                }
                @media (max-width: 470px) {
                  padding-left: 140px;
                }
                @media (max-width: 400px) {
                  padding-left: 120px;
                }
              `}
            >
              {isPhoneError ? (
                <small
                  css={css`
                    color: ${colors.red};
                  `}
                >
                  Please provide a valid Phone number
                </small>
              ) : (
                <small>&nbsp;</small>
              )}
            </div>
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
