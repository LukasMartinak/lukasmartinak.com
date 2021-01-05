import React from 'react'
import './style.scss'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'
import { OutboundLink } from "gatsby-plugin-google-gtag"

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      linkedin: author.elements.linkedin.value,
      twitter: author.elements.twitter.value,
      email: author.elements.email.value,
      rss: author.elements.rss.value
    }

    return (
      <div className="links">
        <ul className="links__list">
        <li className="links__list-item" data-kontent-element-codename="linkedin">
            <OutboundLink
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
            >
              <i className="icon-linkedin" />
            </OutboundLink>
          </li>
          <li className="links__list-item" data-kontent-element-codename="twitter">
            <OutboundLink
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
            >
              <i className="icon-twitter" />
            </OutboundLink>
          </li>
          <li className="links__list-item" data-kontent-element-codename="email">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
