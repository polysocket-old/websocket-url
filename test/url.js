var test = require('tape')
  , URL  = require('../index')

test('non-websocket url', function(t) {
  t.plan(1)

  t.throws(function() {
    URL.parse('http://websocket.org/test')
  })
})

test('no-host', function(t) {
  t.plan(1)

  t.throws(function() {
    URL.parse('/test')
  })
})

test('no hash', function(t) {
  t.plan(1)
  
  t.throws(function() {
    URL.parse('ws://websocket.org/echo?query=hey#fragment=ohno')
  })
})

test('good url', function(t) {
  t.plan(4)

  var url = URL.parse('ws://websocket.org/echo?query=hey')
  t.equal(url.host, 'websocket.org')
  t.equal(url.port, '80')
  t.equal(url.secure, false)
  t.equal(url.resource, '/echo?query=hey')
})

test('secure url', function(t) {
  t.plan(4)

  var url = URL.parse('wss://websocket.org/echo?query=hey')
  t.equal(url.host, 'websocket.org')
  t.equal(url.port, '443')
  t.equal(url.secure, true)
  t.equal(url.resource, '/echo?query=hey')
})

test('secure url override port', function(t) {
  t.plan(4)

  var url = URL.parse('wss://websocket.org:9001/echo')
  t.equal(url.host, 'websocket.org')
  t.equal(url.port, '9001')
  t.equal(url.secure, true)
  t.equal(url.resource, '/echo')
})
