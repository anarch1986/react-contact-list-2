/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as VodafoneLogo } from "../assets/images/vodafone_logo.svg";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  function inputHandler(inputEvent) {
    console.log(inputEvent.target.value.toLowerCase());
  }

  function handleOnLogoClick() {
    history.push("/");
  }

  return (
    <Container
      css={css`
        padding: 25px 0 50px 0;
      `}
    >
      <Row>
        <Col
          md={6}
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
        >
          <VodafoneLogo
            css={css`
              height: 65px;
            `}
            onClick={handleOnLogoClick}
          />
        </Col>
        <Col md={6}>
          <input
            css={css`
              min-width: 400px;
              text-align: left;
              padding: 5px 10px;
              border: 1px solid #aaaaaa;
              border-radius: 4px;

              @media (max-width: 850px) {
                min-width: 300px;
              }

              @media (max-width: 768px) {
                display: none;
              }

              &:focus {
                outline-width: 0;
              }
            `}
            type="text"
            id="header-search"
            onChange={inputHandler}
            placeholder="Search for contact"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
