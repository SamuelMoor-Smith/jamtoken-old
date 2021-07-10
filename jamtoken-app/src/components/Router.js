import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharityPage from '../pages/CharityPage';
import StakePage from '../pages/StakePage';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/charities' component={CharityPage}></Route>
      <Route exact path='/stake' component={StakePage}></Route>
    </Switch>
  );
}

export default Main;