import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useContext, /*useRef*/ } from "react";

import "./App.scss";
import ContactsPage from "./pages/ContactsPage";
import NewContactPage from "./pages/NewContactPage";
import EditContactPage from "./pages/EditContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AddNewButton from "./components/AddNewButton"
import ContactsContext from "./data/contacts-context";


function App(props) {
  const [isLoading, setIsLoading] = useState(true);

  const contactsContext = useContext(ContactsContext);

  useEffect(() => {
    setIsLoading(true);
    contactsContext.getAllContacts().then(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderApp() {
    if (isLoading) {
      return <Loader/>
    } else {
      return <div>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <ContactsPage />
        </Route>
        <Route path="/new-contact">
          <NewContactPage />
        </Route>
        <Route path="/edit-contact">
          <EditContactPage />
        </Route>
        <Route path="/contact-details/:contactId">
          <ContactDetailsPage />
        </Route>
      </Switch>
      <Footer/>
      <AddNewButton/>
    </div>
    }
  }

  return (
    renderApp()
  );
}

export default App;
