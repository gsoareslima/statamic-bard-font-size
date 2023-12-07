const mix = require("laravel-mix");

mix.js("resources/js/bard.js", "dist/js/gsl-bard-font-size.js")
    .vue()
    .webpackConfig(require('./webpack.config'))

mix.copy('resources/css', 'dist/css');