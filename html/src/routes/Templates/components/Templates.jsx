import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col, Panel, Row} from 'react-bootstrap'
import {Link} from 'react-router'
import s from './Templates.scss'
import cn from 'classnames'
import url from 'utils/url'

class Templates extends Component {
  componentDidMount() {
    this.props.getTemplatesAttempt()
    this.props.getPremiumTemplatesAttempt()
  }

  render() {
    const {templates, premiumTemplates} = this.props

    return (
      <div className='template-container'>

        <Row className='new-template-row'>
          <Col
            md={6}
            sm={6}
            xs={6}
          >
            <h1 className='template-heading'>Templates</h1>
          </Col>
          <Col
            md={6}
            sm={6}
            xs={6}
          >
            <Link
              to={url.addTemplate}
              className={cn(s.btn, s['pull-right'], 'template-button')}
            >
              New Template
            </Link>
          </Col>
        </Row>

        <div className='container1'>
          <div className={s.row}>
            <Col
              md={6}
              sm={12}
              xs={12}
            >
              <div className='first-col'>
                <h1 className='panel-heading'>Premium Templates</h1>
              </div>
              <Panel className='panel main-panel'>
                <div>
                  {premiumTemplates && Object.entries(premiumTemplates).map(([key, value]) =>
                    <div
                      className='panel-list'
                      key={key}
                    >
                      <span className='list-value'>{value.title}</span>
                      <Link
                        className={cn(s.btn, s['btn-sm'], s['pull-right'])}
                        to={url.premiumTemplateEditor.replace(':id', key)}
                      >
                        View
                      </Link>
                    </div>,
                  )}
                </div>
              </Panel>
            </Col>

            <Col
              md={6}
              sm={12}
              xs={12}>
              <div className='first-col'>
                <h1 className='panel-heading'>Personal Templates</h1>
              </div>
              <Panel className='panel main-panel'>
                {templates
                  ? Object.entries(templates).map(([key, value]) =>
                    <div
                      className='panel-list'
                      key={key}
                    >
                      <span className='list-value'>{value.title}</span>
                      <Link
                        className={cn(s.btn, s['btn-sm'], s['pull-right'])}
                        to={url.templateEditor.replace(':id', key)}
                      >
                        View
                      </Link>
                    </div>,
                  )
                  : <Link
                    to={url.addTemplate}
                    className={cn(s.btn, s['btn-default'], 'pull-right template-button')}
                  >
                    New Template
                  </Link>
                }
              </Panel>
            </Col>

          </div>
        </div>
      </div>
    )
  }
}

Templates.propTypes = {
  getTemplatesAttempt: PropTypes.func.isRequired,
  getPremiumTemplatesAttempt: PropTypes.func.isRequired,
  templates: PropTypes.object,
  premiumTemplates: PropTypes.object,
}

export default Templates
