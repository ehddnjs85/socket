const net =  require('net');
const server = net.createServer(function (socket) {
    // connection event
    console.log('클라이언트 접속');
    socket.write('welcome to Socket Server');

    socket.on('data', function (chunk) {
        console.log('클라이언트가 보냄 : ',
        chunk.toString());
    });
    socket.on('end', function (chunk) {
        console.log('클라이언트 접속 종료');
    });
});

server.on('listening', function () {
    console.log('Server is listening');
});

server.on('close', function () {
    console.log('Server closed');
});

server.listen(3000);
