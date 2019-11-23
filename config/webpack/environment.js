const { environment } = require('@rails/webpacker')

// https://www.botreetechnologies.com/blog/introducing-jquery-in-rails-6-using-webpacker
const webpack = require('webpack')
environment.plugins.prepend('Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/src/jquery',
        jQuery: 'jquery/src/jquery'
    })
)

module.exports = environment
