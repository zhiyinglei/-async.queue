var async = require('async');

var maxParallel = Number(process.env.MAX_PARALLEL_SENDS) || 5;
var queue = async.queue(send, maxParallel);

module.exports = queue;

function send(message, cb) {
	console.log('sending %j', message);
	setTimeout(cb, randomTimeout(), null, randomReply());
}

function randomTimeout() {
	return Math.floor(Math.random() * 1e3);
}


function randomReply() {
	return Math.floor(Math.random() * 1e10);
}