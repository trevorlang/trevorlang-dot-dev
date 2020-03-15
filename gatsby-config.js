module.exports = {
  siteMetadata: {
    description: `Hoegel Media Productions Videography & Photography Portfolio`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://hoegelmediaproductions.com/',
    title: 'Hoegel Media Productions Videography & Photography Portfolio',
    shortTitle: 'Hoegel Media Productions',
    shoutout: 'Designed and developed by Trevor Lang'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Hoegel Media Productions Videography & Photography Portfolio',
        short_name: 'Hoegel Media Productions',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/zurg-icon.svg'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/content/pages`
      }
    },
    'gatsby-transformer-remark'
  ]
};
