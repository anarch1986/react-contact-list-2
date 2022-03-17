/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";

import { colors } from "../theme.js";
import { ReactComponent as VodafoneLogo } from "../assets/images/vodafone_logo.svg";
import { Fragment } from "react";

function Header() {
  const history = useHistory();
  const location = useLocation();

  function inputHandler(inputEvent) {
    console.log(inputEvent.target.value.toLowerCase());
  }

  function searchHandler(event) {
    event.preventDefault();
    alert("SEARCHING");
  }

  function handleOnLogoClick() {
    history.push("/");
  }

  return (
    <Container
      css={css`
        padding: 25px 0 20px 0;
      `}
    >
      <Row>
        <Col
          lg={6}
          css={css`
            &:hover {
              cursor: pointer;
            }
          `}
        >
          <VodafoneLogo
            css={css`
              height: 65px;
              padding-right: 300px;
              @media (max-width: 992px) {
                padding-right: 0;
              }
            `}
            onClick={handleOnLogoClick}
          />
        </Col>
        {location.pathname === "/" && (
          <Fragment>
            <Col
              lg={4}
              css={css`
                @media (max-width: 992px) {
                  padding-top: 20px;
                }
              `}
            >
              <input
                css={css`
                  min-width: 400px;
                  text-align: left;
                  padding: 5px 10px;
                  border: 1px solid ${colors.grey};
                  border-radius: 4px;

                  @media (max-width: 850px) {
                    min-width: 300px;
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
            <Col
              lg={1}
              css={css`
                @media (max-width: 992px) {
                  padding-top: 20px;
                }
              `}
            >
              <button
                className="btn btn-primary"
                css={css`
                  background-color: ${colors.red};
                  border-color: ${colors.white};

                  &:hover {
                    background-color: ${colors.red};
                    border-color: ${colors.red};
                  }

                  &:not(:hover) {
                    background-color: ${colors.red};
                    border-color: ${colors.red};
                  }
                `}
                onClick={searchHandler}
              >
                Search
              </button>
            </Col>
          </Fragment>
        )}
      </Row>
    </Container>
  );
}

export default Header;
