module.exports = {
  siteMetadata: {
    title: `Rich Cook`,
    description: `Where I show off what I have written, and what I can write.`,
    author: `Rich Cook`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#242424`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    }
  ],
}
