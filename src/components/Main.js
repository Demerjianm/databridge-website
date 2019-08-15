import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Info</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Data integration means that multiple applications have their data
            stored in a specific database, and that data is available across of
            these different applications. Data integration becomes necessary
            when multiple applications have their data stored in different
            databases, each for their respective applications. In other words,
            the data is avaiable between two different parties and therefore,
            can be easily accessed and implemented into a different application
            without having to transfer to a different database manually. Our
            solution makes it possible for all the applications to be grouped
            together into that one database group using an automated bridge
            between them.
          </p>
          <p>
            {' '}
            Improve Productivity: Operational intelligence, reusable business
            logic, and data flow recommendations simplify your integration
            process and error resolution. Tailor to your needs: Templates,
            process libraries, and custom scripting balance your productivity
            and control. This allows your organization to be successful with any
            connected business use case.{' '}
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">How It Works</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Alleviating small headaches one step at a time by minimizing the
            number of dual entries into multiple databases/systems. Much of the
            time businesses use the same data across multiple databases and
            systems and it becomes extremely difficult to keep the systems
            consistent across the board. Data Bridge Management has found great
            success by merging crucial information such as Employee
            Demographics, Labor Data, Etc. This data can be configured to update
            the 3rd party system on a schedule with crucial information.
            Sometimes that one special report, CAN'T wait a day!{' '}
          </p>
          <li>
            <ul>Step1: Identify Multiple Databases and Systems </ul>
          </li>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Our Story</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Our team of innovative thinkers from across the world have many like
            minds looking to accomplish the same goal. Our technology experts
            focus on using the m ost efficient process with the most effective
            tools. Many organizations are scared of the change and leading the
            pack, that is our design. Data Bridge Management's focus is to give
            you the most up to date advice and provide you with options that
            will carry you into the future in a cost-effective way.{' '}
          </p>
          <p>blah blah I suck</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="icon fa-instagram">
                <span className="label">Instagram </span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
