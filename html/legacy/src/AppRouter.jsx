import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App, Login, Dashboard , Leads, SalesSteps, LeadsLists, Templates ,LeadDetails,TemplateEditor,IndividualLeadList } from './containers'


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
                  <Route path="individualLeadList" component={IndividualLeadList} />
                  <Route path="templates" component={Templates} />
                  <Route path="templateEditor" component={TemplateEditor}></Route>
              </Route>
              <Route path="/login" component={Login} />
            </Route>
        </Router>
    );
  }
}

export default AppRouter;