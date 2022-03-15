import { Route, Switch } from "react-router-dom";

import "./App.scss";
import ContactsPage from "./pages/ContactsPage";
import NewContactPage from "./pages/NewContactPage";
import EditContactPage from "./pages/EditContactPage";
import ContactDetailsPage from "./pages/ContactDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddNewButton from "./components/AddNewButton"


function App(props) {



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
      <Footer/>
      <AddNewButton/>
    </div>
  );
}

export default App;
