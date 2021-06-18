import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {HomeRoutes.map((route) => {
              return (
                <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                  {route.children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
    </Switch>
  );
});
