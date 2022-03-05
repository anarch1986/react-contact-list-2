import { Route, Switch } from "react-router-dom";

import "./App.scss";
import ContactsPage from "./pages/ContactsPage";
import NewContactPage from "./pages/NewContactPage";
import EditContactPage from "./pages/EditContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
