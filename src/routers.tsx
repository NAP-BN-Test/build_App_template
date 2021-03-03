import * as React from 'react';
import {Scene, Router, ActionConst, Tabs} from 'react-native-router-flux';
import Test from './view/test';

const Routers = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="test" component={Test} hideNavBar={true} />
      </Scene>
    </Router>
  );
};

export default Routers;
