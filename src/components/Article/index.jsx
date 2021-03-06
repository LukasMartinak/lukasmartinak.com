import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import * as _ from 'lodash'
import './style.scss'
import { OutboundLink } from "gatsby-plugin-google-gtag"

class Article extends React.Component {
  render() {
    const title = _.get(this.props, 'data.elements.title.value', 'N/A')
    const date = _.get(this.props, 'data.elements.date.value', 'N/A')
    const category = _.get(this.props, 'data.elements.category.value[0].elements.title.value', 'N/A')
    const categorySlug = _.get(this.props, 'data.elements.category.value[0].elements.slug.value', 'N/A')
    const description = _.get(this.props, 'data.elements.description.value', 'N/A')
    const slug = `/articles/${_.get(this.props, 'data.elements.slug.value', 'N/A')}`
    const itemId = _.get(this.props, 'data.system.id')
    const externalUrl = _.get(this.props, 'data.elements.external_url.value', '')
    const articleUrl = !externalUrl ? slug : externalUrl
    const linkTarget = !externalUrl ? "_self" : "_blank"

    let linkMarkup;

    if (!externalUrl) {
      linkMarkup = <Link className="article__readmore" to={slug}>Read</Link>
    } else {
      var externalDomain = "";
      
      var match = externalUrl.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
      if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        externalDomain = match[2];
      }

      linkMarkup = <OutboundLink href={externalUrl} target="_blank">Read on {externalDomain}</OutboundLink>
    }

    return (
      <div className="article" data-kontent-item-id={itemId}>
        <div className="article__meta">
          <time
            className="article__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
            data-kontent-element-codename="date"
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="article__meta-divider" />
          <span className="article__meta-category" key={categorySlug}  data-kontent-element-codename="category">
            <Link to={`/categories/${categorySlug}/`} className="article__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="article__title" data-kontent-element-codename="title">
          <Link className="article__title-link" to={articleUrl} target={linkTarget}>
            {title}
          </Link>
        </h2>
        <p className="article__description"  data-kontent-element-codename="description">{description}</p>
        {linkMarkup}
      </div>
    )
  }
}

export default Article
