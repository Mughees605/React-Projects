import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import { App, Dashboard , Leads, SalesSteps, LeadsLists, Templates ,LeadDetails,TemplateEditor } from './containers'


class AppRouter extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
              <IndexRoute component={Dashboard} />            
              <Route path="dashboard" component={Dashboard} >
                  <IndexRoute component={Leads} />
                  <Route path="leads" component={Leads} />
                  <Route path="leads/:id" component={LeadDetails} />
                  <Route path="salesSteps" component={SalesSteps} />
                  <Route path="leadsLists" component={LeadsLists} />
                  <Route path="templates" component={Templates} />
                  <Route path="templateEditor" component={TemplateEditor}></Route>
              </Route>
            </Route>
        </Router>
    );
  }
}

export default AppRouter;