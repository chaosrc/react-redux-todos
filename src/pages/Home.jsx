import React from "react";
import { Route } from 'react-router-dom'
import { User } from './User'
import { Dashboard } from "./Dashboard";

export const Home = ({ match }) => {
  return (
    <>
      <h3>Home</h3>
      <Route path={`${match.path}/user`} component={User}></Route>
      <Route path={`${match.path}/dashboard`} component={Dashboard}></Route>
    </>
  );
};
