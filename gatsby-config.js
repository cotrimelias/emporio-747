require("dotenv").config()

module.exports = {
    siteMetadata: {
        siteTitle: "Empório 747",
        siteTitleDefault: "Empório 747",
        siteUrl: "https://emporio747.com",
        hrefLang: "pt",
        siteDescription: "Uma loja de variedades e raridades perfeita para você",
        siteImage: "/default-og-image.jpg",
        twitter: "@emporio747",
    },
    flags: {
        FAST_DEV: true,
    },
    plugins: [{
            resolve: "gatsby-source-shopify",
            options: {
                apiKey: process.env.SHOPIFY_API_KEY,
                password: process.env.SHOPIFY_SHOP_PASSWORD,
                storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
                shopifyConnections: ["collections"],
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-gatsby-cloud",
        // Add your Google Analytics ID to the .env file to enable
        // Otherwise, this plugin can be removed
        process.env.GOOGLE_ANALYTICS_ID && {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
    ].filter(Boolean),
}