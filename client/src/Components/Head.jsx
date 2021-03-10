import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               title
               description
               url
               image
            }
         }
      }
   `)

   const seo = data.site.siteMetadata
   return (
      <Helmet title={`${title} | ${seo.title}`}>
         <meta name='robots' content='noindex, nofollow' />
         <link rel='icon' href='/favicon.ico' />
         <meta name='twitter:card' content='summary_large_image' />
         <meta name='description' content={seo.description} />
         <meta property='og:url' content={seo.url} />
         <meta property='og:image' content={`${seo.url}${seo.image}`} />
         <meta property='og:title' content={seo.title} />
         <meta
            property='og:description'
            content='Photographic storytelling to convey whole experiences through images'
         />
         <meta property='og:type' content='website' />
         <meta property='og:image:width' content='1200' />
         <meta property='og:image:height' content='630' />
      </Helmet>
   )
}

export default Head
