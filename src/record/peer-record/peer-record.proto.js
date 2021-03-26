// @ts-nocheck protons do not support types
'use strict'

const protons = require('protons')

// PeerRecord messages contain information that is useful to share with other peers.
// Currently, a PeerRecord contains the public listen addresses for a peer, but this
// is expected to expand to include other information in the future.
// PeerRecords are designed to be serialized to bytes and placed inside of
// SignedEnvelopes before sharing with other peers.
/** @type {{PeerRecord: import('../../types').MessageProto}} */
module.exports = protons(`
message PeerRecord {
    // AddressInfo is a wrapper around a binary multiaddr. It is defined as a
    // separate message to allow us to add per-address metadata in the future.
    message AddressInfo {
        bytes multiaddr = 1;
    }

    // peer_id contains a libp2p peer id in its binary representation.
    bytes peer_id = 1;

    // seq contains a monotonically-increasing sequence counter to order PeerRecords in time.
    uint64 seq = 2;

    // addresses is a list of public listen addresses for the peer.
    repeated AddressInfo addresses = 3;
}
`)
