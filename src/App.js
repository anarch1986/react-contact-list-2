/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import { PageTransition } from "@steveeeie/react-page-transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.scss";
import ContactsPage from "./pages/ContactsPage";
import NewContactPage from "./pages/NewContactPage";
import EditContactPage from "./pages/EditContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AddNewButton from "./components/AddNewButton";
import ContactsContext from "./state/contacts-context";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");

  const contactsContext = useContext(ContactsContext);

  useEffect(() => {
    setIsLoading(true);
    contactsContext.getAllContacts().then(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function contactSearcHandler(incomingString) {
    setSearchString(incomingString)
  }

  // You can put it in a separate file. Now it is okey, but in case of many routes better not to be here. Try to keep App.js simple.
  // You can make transitions between view changes with TransitionGroup. 
  // With react-page-transition lib the contacts list page was not working well. On my screen the footer was over the cards, because the lib makes the height 100%. I saw you tried to handle it with custom css adding height and positioning in the footer
  // So, react-page-transition lib would be rigid here, especially when you have dynamic content like getting data from the server.
  function Container() {
    const location = useLocation();

    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit:300 }}
          classNames="fade"
          mountOnEnter={false}
          unmountOnExit={true}
        >
          <Switch location={location}>
            <Route exact path="/">
              <ContactsPage contactSearch={searchString} />
            </Route>
            <Route path="/new">
              <NewContactPage />
            </Route>
            <Route exact path="/edit/:id">
              <EditContactPage />
            </Route>
            <Route exact path="/details/:id">
              <ContactDetailsPage />
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }

  // It is a good thing if renderApp is as simple as possible in App.js
  function renderApp() {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <Router>
          <div className="site">
            <Header handleSearch={contactSearcHandler} />
            <Container />
            <Footer />
            <AddNewButton />
          </div>
        </Router>
      );
    }
  }

  return renderApp();
}

export default App;
