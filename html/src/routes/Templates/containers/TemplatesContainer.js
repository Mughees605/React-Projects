import {connect} from 'react-redux'
import Templates from '../components/Templates'
import {getPremiumTemplatesAttempt, getTemplatesAttempt} from '../redux/templatesActions'

const mapActionCreators = {getTemplatesAttempt, getPremiumTemplatesAttempt}

const mapStateToProps = ({
  templates: {
    templates,
    premiumTemplates,
  },
}) => ({
  templates,
  premiumTemplates,
})

export default connect(mapStateToProps, mapActionCreators)(Templates)
