/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";

import { colors } from "../theme.js";

function PageTitle(props) {
  return (
    <Container>
      <Row>
        <Col>
          <div
            css={css`
              margin: 20px 0 0 0;
              font-size: 32px;
            `}
          >
            <b>{props.pageTitle}</b>
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
    </Container>
  );
}

export default PageTitle;
