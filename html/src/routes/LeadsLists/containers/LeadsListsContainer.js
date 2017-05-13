import {connect} from 'react-redux'
import LeadsLists from '../components/LeadsLists'
import {getLeadsListsAttempt,updateLeadsListAttempt,deleteLeadsListAttempt} from '../redux/leadsListActions'

const mapActionCreators = {getLeadsListsAttempt,updateLeadsListAttempt,deleteLeadsListAttempt}

const mapStateToProps = ({
  leadsLists: {
    leadsLists
  },
}) => ({
  leadsLists
})

export default connect(mapStateToProps, mapActionCreators)(LeadsLists)
