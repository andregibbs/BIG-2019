import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import shareImg from 'images/big-share-image.jpg'

function Seo({ description, lang, meta, keywords, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description
                return (
                    <Helmet
                        htmlAttributes={{
                            lang,
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: title,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: shareImg,
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`,
                            },
                            {
                                name: `twitter:creator`,
                                content: data.site.siteMetadata.author,
                            },
                            {
                                name: `twitter:title`,
                                content: title,
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription,
                            },
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                        name: `keywords`,
                                        content: keywords.join(`, `),
                                    }
                                    : []
                            )
                            .concat(meta)}
                    >
                        {/* Favicon */}
                        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"/>
                        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                        <link rel="manifest" href="/favicons/site.webmanifest"/>
                        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                        <meta name="msapplication-TileColor" content="#da532c"/>
                        <meta name="theme-color" content="#ffffff"/>
                    </Helmet>
                )
            }}
        />
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`