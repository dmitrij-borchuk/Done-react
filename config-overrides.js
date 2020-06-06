const webpack = require('webpack')
const { override, addPostcssPlugins } = require('customize-cra')

const envKeys = Object.keys(process.env).reduce((prev, next) => {
  return {
    ...prev,
    [`process.env.${next}`]: JSON.stringify(process.env[next]),
  }
}, {})

const addEnvVars = (config) => {
  config.plugins.push(new webpack.DefinePlugin(envKeys))
  return config
}

module.exports = override(
  addEnvVars,
  addPostcssPlugins([require('tailwindcss')]),
)
