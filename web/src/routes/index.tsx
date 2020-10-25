import React from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// import Landing from '../src/pages/Landing/index';
import OrphanagesMap from '../pages/OrphanagesMap/index';
import Orphanages from '../pages/Orphanages/index';
import CreateOrphanages from '../pages/CreateOrphanages/index';
import Login from '../pages/Login/index';
import SignUp from '../pages/SignUp/index';
import CompletedRegistration from '../pages/CompletedRegistration/index';




function Routes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="transition" timeout={600}>
        <Switch location={location}>
          {/* <Route path="/" exact component={Landing} /> */}
          <Route component={Login} exact path="/"  />
          <Route component={SignUp} path="/register"   />
          <Route component={CompletedRegistration} path="/completed-registration"   />
          <Route component={CompletedRegistration} path="/completed-registration" isPrivate  />
          <Route component={OrphanagesMap} path="/app" isPrivate />
          <Route component={CreateOrphanages} path="/orphanages/create" isPrivate  />
          <Route component={Orphanages} path="/orphanages/:id" isPrivate />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Routes;
