module.exports = () => ({
    name: "docusaurus-fonts",
    configureWebpack: () => ({
        // Use environment to define the Webpack optimization mode.
        mode: process.env.NODE_ENV || "development",
        module: {
            rules: [
                {
                    test: /\.(otf|ttf)$/i,
                    use: "file-loader"
                }
            ]
        }
    })
});
