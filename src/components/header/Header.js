import { Container, Row, Col } from "react-bootstrap";
import { ReactComponent as VodafoneLogo } from "../../assets/images/vodafone_logo.svg";
import { useHistory } from "react-router-dom";

import classes from "./Header.module.scss";

function Header() {
  const history = useHistory();

  function inputHandler(inputEvent) {
    console.log(inputEvent.target.value.toLowerCase());
  }

  function handleOnLogoClick() {
    history.push("/");
  }

  return (
    <Container className={classes.appHeader}>
      <Row>
        <Col md={6} className={classes.logoContainer}>
          <VodafoneLogo className={classes.logo} onClick={handleOnLogoClick}/>
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
