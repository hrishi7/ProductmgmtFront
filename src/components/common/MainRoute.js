import React from "react";
import { Switch, Route } from "react-router-dom";

/**public routes */
import Login from "./Login";

/**Customer private routes */
import DailyUsage from "../DailyUsage";
import InvoiceDetails from "../InvoiceDetails";
import PrivateRoute from "../PrivateRoute";

function MainRoute() {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Switch>
        <PrivateRoute
          exact
          path="/invoice-details"
          component={InvoiceDetails}
        />
        <PrivateRoute exact path="/" component={InvoiceDetails} />
      </Switch>
      <Switch>
        <PrivateRoute exact path="/daily-usage" component={DailyUsage} />
      </Switch>
    </div>
  );
}
export default MainRoute;
