import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/jake_logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo"> */}
    {/* <span className="icon "> */}
    <img src={logo} alt="logo" height={'70px'} style={{ marginTop: '12px' }} />
    {/* </span> */}
    {/* </div> */}
    <div className="content">
      <div className="inner">
        <h1>Data Bridge Management</h1>
        <p>
          Looking for data transfer automation? We are here to solve your
          problems!{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Info
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Process
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
