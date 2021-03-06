module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        `gatsby-remark-page-creator`,
    ]
};
