import url from 'utils/url'
import Leads from 'routes/Leads'

export default (store) => ({
  path: url.home,
  getComponent: Leads(store).getComponent,
})
