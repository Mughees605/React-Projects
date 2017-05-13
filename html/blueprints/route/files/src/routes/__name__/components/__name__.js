import React, {Component} from 'react'
import PropTypes from 'prop-types'
import s from './<%= camelEntityName %>.scss'

class <%= pascalEntityName %> extends Component {
  render() {
    return (
      <div className={s.<%= camelEntityName %>}>
        <h4><%= pascalEntityName %></h4>
      </div>
    )
  }
}

<%= pascalEntityName %>.propTypes = {

}

export default <%= pascalEntityName %>
