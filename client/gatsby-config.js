module.exports = {
   siteMetadata: {
      title: 'Photography by Ricky Kelley'
   },
   plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'data',
            path: `${__dirname}/src/IMG/portfolio-tiny`
         }
      },
      'gatsby-plugin-styled-components',
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`
   ]
}
