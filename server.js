const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.dev')
const bodyParser = require('body-parser')

const express = require('express')

const configController = require('./controller/')

const app = new express()
const port = 3020

const compiler = webpack(config)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({limit: '1mb'}))
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}))
app.use(webpackHotMiddleware(compiler, {port: port}))

app.use(express.static('./'))

function toIndex(req, res) {
  res.sendFile(__dirname + '/index.html')
}


configController(app)

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
