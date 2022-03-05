import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as VodafoneLogo } from "../assets/images/vodafone_logo.svg";
import classes from "./Header.module.scss";

function Header() {
  function inputHandler(inputEvent) {
    console.log(inputEvent.target.value.toLowerCase())
  }

  return (
    <Container className={classes.appHeader}>
      <Row>
        <Col md={6}>
          <VodafoneLogo className={classes.logo} />
        </Col>
        <Col md={6}>
          <input
            className={classes.searchBar}
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
