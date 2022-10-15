import React from "react";
import NavBar from "./Components/Navbar/NavBar.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AccessoriesPage from "./Pages/AccessoriesPage.js";
import TreatsPage from "./Pages/TreatsPage.js";
import HomePage from './Pages/HomePage.js';
import CreateItemPage from "./Pages/CreateItemPage.js";
import './App.css';
import EditItemPage from "./Pages/EditItemPage.js";
import ItemPage from "./Pages/ItemPage.js";
import EditCartItem from "./Pages/EditCartItem.js";
import BasketPage from "./Pages/BasketPage.js";
import NotFoundPage from "./Pages/NotFoundPage.js";
import Invoice from "./Pages/InvoicePage.js";
import ProductManager from "./Pages/ProductManager.js";
import InvoiceManager from "./Pages/InvoiceManager.js";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        
        <Switch>
          <div>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/Treats">
              <TreatsPage />
            </Route>

            <Route exact path="/Accessories">
              <AccessoriesPage />
            </Route>

            <Route exact path="/Manager/CreateItem">
              <CreateItemPage />
            </Route>

            <Route exact path="/Manager/EditItem/:id">
              <EditItemPage />
            </Route>

            <Route exact path="/Item/:id">
              <ItemPage />
            </Route>

            <Route exact path="/Cart/EditCartItem/:id">
              <EditCartItem />
            </Route>

            <Route exact path="/Cart">
              <BasketPage />
            </Route>

            <Route exact path="/Invoice/:id">
              <Invoice />
            </Route>

            <Route exact path="/NotFound">
              <NotFoundPage />
            </Route>

            <Route exact path="/Manager/InvoiceManager">
              <InvoiceManager />
            </Route>

            <Route exact path="/Manager/ProductManager">
              <ProductManager />
            </Route>

          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// https://barkery-dogs.com/
