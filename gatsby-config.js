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
    description: `Spike Burton - Personal Website`,
    author: `@spike_burton`,
    image: `https://public-shit-69.s3.us-east-2.amazonaws.com/photos/IMG_0760.jpg`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `spike-burton-personal-site`,
        short_name: `personal-site`,
        start_url: `/`,
        background_color: colorSelector(NODE_ENV),
        theme_color: colorSelector(NODE_ENV),
        display: `minimal-ui`,
        icon: `src/images/sb-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
