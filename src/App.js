import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Route, Redirect } from "react-router-dom";
import { ContactForm } from "./components/contacts/ContactForm";
import { ContactProvider } from "./components/contacts/ContactProvider";
import { Home } from "./components/home/Home";

function App() {
  return (
    <>
      <Route
        render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
          if (localStorage.getItem("app_user_id")) {
            return (
              <>
                <Route exact path="/" render={(props) => <Home {...props} />} />

                <ContactProvider>
                  <Route
                    path="/create-contact"
                    render={(props) => <ContactForm {...props} />}
                  />
                </ContactProvider>
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login" render={(props) => <Login {...props} />} />
      <Route path="/register" render={(props) => <Register {...props} />} />
    </>
  );
}

export default App;
