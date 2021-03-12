module.exports = {
   siteMetadata: {
      title: 'Photography by Ricky Kelley',
      description:
         'I specialize in photojournalism which can be described as "capturing the uninterrupted moment.',
      url: 'https://dev.penneyprojects.com',
      image: '/RickyKelleyTiny.jpg'
   },
   plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet'
      // {
      //    resolve: 'gatsby-source-filesystem',
      //    options: {
      //       name: 'data',
      //       path: `${__dirname}/src/IMG/portfolio-tiny`
      //    }
      // },
      // 'gatsby-plugin-styled-components',
      // {
      //    resolve: `gatsby-plugin-sharp`,
      //    options: {
      //       defaultQuality: 100
      //    }
      // },
      // `gatsby-transformer-sharp`,
      // `gatsby-plugin-image`
   ]
}
