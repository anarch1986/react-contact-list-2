/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { PageTransition } from "@steveeeie/react-page-transition";

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

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [oldSearchString, setOldSearchString] = useState("");

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
    // This one is a pretty dirty hack, but it's needed for the contact list update
    setTimeout(()=>{
      setOldSearchString(incomingString)
    }, 10)
  }

  function renderApp() {
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div
          css={css`
            height: 100%;
          `}
        >
          <Header handleSearch={contactSearcHandler} />
          <Route
            render={({ location }) => {
              return (
                <PageTransition
                  preset="moveToLeftFromRight"
                  transitionKey={location.pathname}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <ContactsPage contactSearch={searchString} oldSearch={oldSearchString}/>
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
                </PageTransition>
              );
            }}
          />
          <Footer />
          <AddNewButton />
        </div>
      );
    }
  }

  return renderApp();
}

export default App;
