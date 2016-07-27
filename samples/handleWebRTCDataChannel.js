// initial channel and session setup and negotiation
var pc = new RTCPeerConnection(iceConfig);
var dc = pc.createDataChannel('namedChannel', { reliable: false });
...
// register callback for handling remote data channels
pc.ondatachannel = handleChannel;
// handle events on the data channel
function handleChannel(dc) {
  dc.onerror = (error) => { /* handle error event */ }
  dc.onclose = () => { /* handle close event */ }
  // exchange application information with peer
  dc.onopen = (evt) => {
    dc.send(msg);
  }
  // act on data received by another peer
  dc.onmessage = (msg) => {
    console.log(msg.data);
  }
}
