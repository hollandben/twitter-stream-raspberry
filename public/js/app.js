var socket = io();

socket.on('tweet', function(tweet) {
    console.log(tweet);
});