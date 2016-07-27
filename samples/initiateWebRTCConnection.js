// create signaling channel for negotiating between peers
var signalingChannel = new SignalingChannel();
// create p2p connection object
var pc = new RTCPeerConnection(iceConfig);
// create a named data channel with unreliable transfer option
var dc = pc.createDataChannel('namedChannel', { reliable: false });
// set media constraints to disable audio and video transfers
var mediaConstraints = {
  mandatory: {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
  }
};
pc.createOffer((offer) => { ... }, null, mediaConstraints);
