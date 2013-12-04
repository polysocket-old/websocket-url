[![browser support](https://ci.testling.com/polysocket/websocket-url.png)](https://ci.testling.com/polysocket/websocket-url)

# websocket-url

This is a URL parser specifically designed for a WebSocket client and enforces the rules of the WebSocket specification.

## html5 websocket parsing

http://dev.w3.org/html5/websockets/#parsing-websocket-urls

## api

```javascript
    var URL = require('websocket-url')
    var url = URL.parse('ws://websocket.org/echo?test')
    // url = {
    //         host:     'websocket.org',
    //         port:     '80',
    //         resource: '/echo?test',
    //         secure:   false
    //       }
```

### throws

The parse function throws an error in the following situations

* the url string is not an absolute URL
* the scheme is not "ws" or "wss"
* there is a fragment in the URL

## LICENSE

MIT

