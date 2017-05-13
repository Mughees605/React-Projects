import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import url from 'utils/url'
import AccountIcon from './Account'
import ShuffleVariantIcon from './ShuffleVariant'
import FormatListBulletedIcon from './FormatListBulleted'
import PencilBoxOutlineIcon from './PencilBoxOutline'
import './SideMenu.scss'

class SideMenu extends Component {
  render() {
    return (
      <div className='sidemenu-container'>
        <div
          style={{backgroundColor: 'rgb(46, 50, 90)', height: '100vh', paddingLeft: 0}}
          className='col-md-2 col-xs-4 col-sm-4 sidebar-offcanvas'
          id='sidebar'
          role='navigation'>
          <ul className='nav'>
            <li>
              <Link
                to={url.leads}
                className='sidemenu-a-color'>
                <span><AccountIcon/></span>
                <span>Leads</span>
              </Link>
            </li>
            <li>
              <Link
                to={url.salesSteps}
                className='sidemenu-a-color'>
                <span><ShuffleVariantIcon/></span>
                <span>Sales Steps</span>
              </Link>
            </li>
            <li>
              <Link
                to={url.leadsLists}
                className='sidemenu-a-color'>
                <span><FormatListBulletedIcon/></span>
                <span>Leads Lists</span>
              </Link>
            </li>
            <li>
              <Link
                to={url.templates}
                className='sidemenu-a-color'>
                <span><PencilBoxOutlineIcon/></span>
                <span>Templates</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SideMenu
