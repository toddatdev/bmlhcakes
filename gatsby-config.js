// require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
// })

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    // siteMetadata: {
    //     title: `BMLH Cakes`,
    //     siteUrl: `https://www.yourdomain.tld`
    // },
    plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    },
        // {
        //     resolve: `gatsby-plugin-firebase`,
        //     options: {
        //         credentials: {
        //             apiKey: process.env.API_KEY,
        //             authDomain: process.env.AUTH_DOMAIN,
        //             projectId: process.env.PROJECT_ID,
        //             storageBucket: process.env.STORAGE_BUCKET,
        //             messagingSenderId: process.env.MESSAGING_SENDER_ID,
        //             appId: process.env.APP_ID,
        //             measurementId: process.env.MEASUREMENT_ID,
        //         }
        //     },
        // }
    ]
};