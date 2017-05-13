import {connect} from 'react-redux'
import Leads from '../components/Leads'
import {
  fetchLeads
} from 'routes/Leads/modules/Leads'
 
const mapActionCreators = {fetchLeads}

const mapStateToProps = state => ({ leads : state.leads })

export default connect(mapStateToProps, mapActionCreators)(Leads)
