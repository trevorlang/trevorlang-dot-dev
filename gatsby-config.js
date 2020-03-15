module.exports = {
  siteMetadata: {
    description: `Trevor Lang | Front End Developer & Designer`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://trevorlang.dev/',
    title: 'Trevor Lang | Front End Developer & Designer',
    shortTitle: 'Trevor Lang',
    shoutout: 'Designed and developed by Trevor Lang'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WWDVGBQ',
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Trevor Lang | Front End Developer & Designer',
        short_name: 'Trevor Lang',
        start_url: '/',
        background_color: '#018D6A',
        theme_color: '#FFF',
        display: 'standalone',
        icon: 'src/assets/images/logo.svg'
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
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          // {
          //   family: `Oswald`,
          //   subsets: [`latin`],
          // },
          {
            family: `Catamaran`,
            variants: ['200', '300', '600', '900']
          }
        ]
      }
    },
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
