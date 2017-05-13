import CoreLayout from 'layouts/CoreLayout'
import DashboardLayout from 'layouts/DashboardLayout'
import Login from './Login'
import Leads from './Leads'
import Home from './Home'
import SalesSteps from './SalesSteps'
import LeadsLists from './LeadsLists'
import Templates from './Templates'
import LeadDetails from './LeadDetails'
import TemplateEditor from './TemplateEditor'
import IndividualLeadList from './IndividualLeadList'
import url from 'utils/url'

export default store => ({
  component: CoreLayout,
  childRoutes: [
    {
      component: DashboardLayout,
      childRoutes: [
        Login(store),
        Home(store),
        Leads(store),
        SalesSteps(store),
        LeadsLists(store),
        Templates(store),
        LeadDetails(store),
        TemplateEditor(store),
        IndividualLeadList(store),
        {
          path: '*',
          onEnter: ({location: {pathname}}, replace) => {
            url.home !== pathname && replace(url.home)
          },
        },
      ],
    },
  ],
  onChange: (prevRoute, route, replace) => {
    url.login !== route.location.pathname && !store.getState().user.uid && replace(url.login)
  }
})
