module.exports = {
  siteMetadata: {
    title: "maartenlouage.nl",
    description: `Webdevelopment and online courses`,
    twitterUsername: `@maartenlouage`,
    siteUrl: `https://www.maartenlouage.nl/`
  },
  flags: {
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Caveat Brush\:400`,
          `Roboto\:400`,
        ],
        display: 'swap'
      }
    }
  ],
};
