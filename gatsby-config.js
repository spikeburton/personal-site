const { NODE_ENV } = process.env

const colorSelector = env => {
  return env === "production"
    ? "#663399" // Purple
    : env === "staging"
    ? "#405ac1" // Blue
    : "#c13f5e" // Red
}

module.exports = {
  siteMetadata: {
    title: `Spike Burton`,
    description: `Personal Website`,
    author: `@spikeburton`,
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
        name: `spike-burton-personal-site`,
        short_name: `personal-site`,
        start_url: `/`,
        background_color: colorSelector(NODE_ENV),
        theme_color: colorSelector(NODE_ENV),
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
