module.exports = {
  siteMetadata: {
    description: `Hoegel Media Productions Videography & Photography Portfolio`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://hoegelmediaproductions.com/',
    title: 'Hoegel Media Productions Videography & Photography Portfolio'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
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
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ]
};
