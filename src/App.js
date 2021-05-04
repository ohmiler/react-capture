import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const App = () => {
  
  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

    return (
      <PhotoContextProvider>
        <BrowserRouter>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/search/photos" />}
              />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
}

export default App;